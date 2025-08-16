"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Import your SVG file
import logoUrl from "@/assets/Shaders/game.svg";

function ExplodingSVG() {
    const svgData = useLoader(SVGLoader, logoUrl.src);
    const groupRef = useRef<THREE.Group>(null!);

    const meshes = useMemo(() => {
        const paths = Array.isArray(svgData)
            ? svgData.flatMap((d) => (d as any).paths ?? [])
            : (svgData as any).paths ?? [];

        const tempMeshes = paths.flatMap((path: any) =>
            path.toShapes(true).map((shape: THREE.Shape) => {
                const geometry = new THREE.ShapeGeometry(shape);

                // Flip Y (SVG coords inverted)
                geometry.applyMatrix4(new THREE.Matrix4().makeScale(1, -1, 1));

                const material = new THREE.MeshBasicMaterial({
                    color: "white",
                    side: THREE.DoubleSide,
                });

                const mesh = new THREE.Mesh(geometry, material);

                // Compute centroid for explosion math
                geometry.computeBoundingBox();
                const box = geometry.boundingBox!;
                mesh.userData.centroid = new THREE.Vector3(
                    (box.max.x + box.min.x) / 2,
                    (box.max.y + box.min.y) / 2,
                    0
                );

                return mesh;
            })
        );

        // 🔹 Compute bounding box of ALL meshes combined
        const fullBox = new THREE.Box3();
        tempMeshes.forEach((m: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>) => fullBox.expandByObject(m));

        const offset = new THREE.Vector3();
        fullBox.getCenter(offset).negate();

        // 🔹 Apply offset to the WHOLE GROUP later
        tempMeshes.forEach((m: THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>) => {
            m.userData.centroid.add(offset);
        });

        // Store group offset in userData
        return { meshes: tempMeshes, offset };
    }, [svgData]);


    useFrame(({ clock }) => {
        const cycle = 6; // total cycle in seconds
        const explodeDuration = 3; // explode + return = 3s
        // const pauseDuration = cycle - explodeDuration; // rest of cycle is pause

        const time = clock.getElapsedTime() % cycle;

        // If in pause phase → reset to normal position
        if (time > explodeDuration) {
            groupRef.current.children.forEach((child) => {
                const mesh = child as THREE.Mesh;
                mesh.position.set(0, 0, 0);
                mesh.rotation.z = 0;
            });
            return;
        }

        // Else → animate explosion
        const t = time / explodeDuration; // normalized 0..1 during explode phase
        const phase = t < 0.5 ? t * 2 : (1 - t) * 2; // expand (0-0.5), return (0.5-1)
        const distance = phase * 30;

        groupRef.current.children.forEach((child, i) => {
            const mesh = child as THREE.Mesh;
            const centroid = mesh.userData.centroid as THREE.Vector3;

            mesh.position.set(
                centroid.x * (distance / 60),
                centroid.y * (distance / 60),
                0
            );

            mesh.rotation.z = phase * Math.PI * (i % 2 === 0 ? 1 : -1);
        });
    });

    return (
        <group ref={groupRef} position={meshes.offset}>
            {meshes.meshes.map((m: THREE.Mesh, i: number) => (
                <primitive key={i} object={m} />
            ))}
        </group>

    );
}

export default function GameShaderLogo() {
    return (
        <div className="hidden md:block w-full h-full max-h-[400px]">
            <Canvas camera={{ position: [0, 0, 400], fov: 60 }}>
                <ambientLight intensity={1} />
                <ExplodingSVG />
            </Canvas>
        </div>
    );
}


