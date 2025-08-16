"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import LoadingImg from "@/assets/Background/Loading.png";
import Novatrax from "@/assets/Logo/Novatrax.svg";

gsap.registerPlugin(useGSAP);

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function Loading({ onComplete }: LoadingScreenProps) {
    const [counter, setCounter] = useState(0);
    const [loadingText, setLoadingText] = useState("");
    const loaderRef = useRef(null);
    const gradientRef = useRef(null);

    useGSAP(() => {
        const word = "Loading";
        const tl = gsap.timeline({
            onComplete: () => onComplete(),
        });

        // Step 1: Gradient enters
        tl.to(gradientRef.current, {
            yPercent: -50,
            duration: 0.8,
            ease: "circ.out",
            delay: 1
        });

        // Step 2: Logo & counter fade + slide in
        tl.fromTo(
            ".load-item",
            { autoAlpha: 0, yPercent: 50, opacity: 0 },
            {
                autoAlpha: 1,
                yPercent: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        // Step 3: Counter from 0 → 100
        tl.to(
            { val: 0 },
            {
                val: 100,
                duration: 6,
                ease: "power2.out",
                onUpdate: function () {
                    let progress = Math.floor(this.targets()[0].val);
                    if (progress < 95 && Math.random() > 0.8) {
                        progress += Math.floor(Math.random() * 3);
                    }
                    if (progress > 100) progress = 100;
                    setCounter(progress);
                },
            },
            "<" // start same time as Step 2 ends
        );

        // Step 4: Spell "Loading" at the SAME time as counter
        tl.to(
            {},
            {
                duration: 1.5, // adjust typing speed
                onUpdate: function () {
                    const idx = Math.floor(this.progress() * word.length);
                    setLoadingText(word.slice(0, idx + 1));
                },
                onComplete: () => {
                    // Step 5: Start dots AFTER the word is fully typed
                    let dots = "";
                    gsap.to({}, {
                        repeat: -1,
                        duration: 0.5,
                        onRepeat: () => {
                            dots = dots.length < 3 ? dots + "." : "";
                            setLoadingText(word + dots);
                        }
                    });
                }
            },
            "<" // start same time as counter
        );


        // Step 5: Loop dots after spelling done
        tl.call(() => {
            gsap.to({}, {
                repeat: -1,
                duration: 0.5,
                onRepeat: (() => {
                    let dots = "";
                    return () => {
                        dots = dots.length < 3 ? dots + "." : "";
                        setLoadingText(word + dots);
                    };
                })()
            });
        });

        // Step 6: Loader exits
        tl.to(loaderRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
        });
    }, [onComplete]);


    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-3xl font-bold overflow-hidden"
        >
            {/* Background Image */}
            <Image
                className="w-full h-full object-cover object-center"
                src={LoadingImg}
                alt="Loading Image"
                sizes="100vw"
                priority
                fill
            />

            {/* Gradient Background */}
            <div
                ref={gradientRef}
                className="absolute -inset-x-20 flex translate-y-2/4 justify-center items-center gap-20 md:gap-40 lg:gap-64 top-3/4"
            >
                <div className="h-[50vw] w-[50vw] shrink-0 bg-[#35B8FF]/30 rounded-full blur-[596px]" />
                <div className="h-[50vw] w-[50vw] shrink-0 bg-[#7735FF]/30 rounded-full blur-[596px]" />
            </div>

            {/* Loading Content */}
            <div className="relative z-10 h-screen py-24 flex flex-col load-item items-center justify-between text-center">
                <div />
                <div className="load-item opacity-0">
                    <Image
                        src={Novatrax}
                        alt="Novatrax Logo"
                        width={145}
                        height={145}
                        draggable={false}
                        sizes="100%"
                        priority
                    />
                </div>
                <div className="font-mono">
                    <h5 className="text-7xl load-item opacity-0">{counter}</h5>
                    <p className="text-3xl load-item opacity-0">{loadingText}</p>
                </div>
            </div>
        </div>
    );
}
