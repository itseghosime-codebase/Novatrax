"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NovatraxFullLogo from "@/assets/Logo/Novatrax full_logo.svg"; 

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection() {
    const heroSectionRef = useRef(null);
    const heroContentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const hr = gsap.timeline({
            scrollTrigger: {
                trigger: heroSectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        // Stagger logo & text
        gsap.from(heroContentRef.current?.children || [], {
            y: 80,
            opacity: 0,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: heroSectionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <section
            ref={heroSectionRef}
            className="relative z-20 min-h-screen flex flex-col items-center justify-end pb-[27vh] gap-12 content"
        >
            <div ref={heroContentRef} className="flex flex-col items-center gap-6 md:gap-8">
                {/* Hero Logo Image */}
                <Image
                    src={NovatraxFullLogo}
                    alt="Hero Logo"
                    className="w-auto h-20 md:h-32 lg:h-44 xl:h-56"
                    sizes="100%"
                    priority
                />
                {/* Hero Text */}
                <p className="text-sm md:text-base lg:text-lg font-medium z-10 font-sans max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center text-pretty text-white">
                    Novatrax Studio isn’t just another game development company—it’s a
                    movement, a vision brought to life by a team of creators who believe
                    in the power of games to shape culture, connect people, and put Africa
                    on the global map of gaming excellence.
                </p>
            </div>
        </section>
    );
}
