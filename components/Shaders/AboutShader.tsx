"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Load logo
import logoUrl from '@/assets/Shaders/aboutshader.svg';

function WavyLogo() {
  const mesh = useRef<THREE.Mesh>(null!);

  // ✅ Correct way to load texture in Next.js
  const texture = new THREE.TextureLoader().load(logoUrl.src);

  // Uniforms
  const uniforms = useRef({
    uTime: { value: 0 },
    uTexture: { value: texture },
  });

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh}>
      {/* Bigger plane so you can see it */}
      <planeGeometry args={[5, 5, 64, 64]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.z += sin(pos.x * 5.0 + uTime) * 0.2;
            pos.z += cos(pos.y * 5.0 + uTime) * 0.2;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform sampler2D uTexture;
          varying vec2 vUv;
          void main() {
            vec4 texColor = texture2D(uTexture, vUv);
            if (texColor.a < 0.1) discard; // ✅ handle transparent SVG background
            gl_FragColor = texColor;
          }
        `}
        transparent
      />
    </mesh>
  );
}

export default function AboutShaderLogo() {
  return (
    <div className="w-full h-full max-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <WavyLogo />
      </Canvas>
    </div>
  );
}
