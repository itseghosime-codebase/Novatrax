import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import ArrowLeft from '@/assets/Button/Union-2.png'
import ArrowRight from '@/assets/Button/Union-3.png'

export default function FixedDestructuredBtn({ icon }: { icon?: React.ReactNode }) {
    const btnRefshare = useRef<HTMLButtonElement | null>(null);

    const handleMouseEnter = () => {
        const partUp = btnRefshare.current?.querySelectorAll(".part-up-share");
        const partDown = btnRefshare.current?.querySelectorAll(".part-down-share");
        const partLeft = btnRefshare.current?.querySelectorAll(".part-left-share");
        const partRight = btnRefshare.current?.querySelectorAll(".part-right-share");

        if (!partUp || !partDown || !partLeft || !partRight) return;
        gsap.to(partUp, { y: -4, x: (i) => (i % 2 === 0 ? -3 : 3), duration: 0.4, stagger: 0.05, ease: "power2.out" });
        gsap.to(partDown, { y: 4, x: (i) => (i % 2 === 0 ? -3 : 3), duration: 0.4, stagger: 0.05, ease: "power2.out" });
        gsap.to(partLeft, { x: -3, duration: 0.4, stagger: 0.05, ease: "power2.out" });
        gsap.to(partRight, { x: 3, duration: 0.4, stagger: 0.05, ease: "power2.out" });


    };

    const handleMouseLeave = () => {
        const partUp = btnRefshare.current?.querySelectorAll(".part-up-share");
        const partDown = btnRefshare.current?.querySelectorAll(".part-down-share");
        const partLeft = btnRefshare.current?.querySelectorAll(".part-left-share");
        const partRight = btnRefshare.current?.querySelectorAll(".part-right-share");

        if (!partUp || !partDown || !partLeft || !partRight) return;

        const allParts = [
            ...Array.from(partUp),
            ...Array.from(partDown),
            ...Array.from(partLeft),
            ...Array.from(partRight),
        ];

        gsap.to(allParts, { x: 0, y: 0, duration: 0.4, ease: "power2.inOut" });

    };


    return (
        <button
            ref={btnRefshare}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='flex flex-col items-center justify-center space-y-0.5 scale-75 md:scale-95 text-[#CB6AFF]'>

            <div className='relative'>
                <svg
                    className='absolute left-3.5 -top-1 part-up-share'
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.3"
                        d="M11.5898 1H4.94212L1.36257 5.60227"
                        stroke="currentColor"
                        strokeWidth="1.02273" />
                </svg>
                <svg
                    className='absolute right-3.5 -top-1 part-up-share'
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.3"
                        d="M0.433594 1H7.08132L10.6609 5.60227"
                        stroke="currentColor"
                        strokeWidth="1.02273" />
                </svg>

                <svg
                    className="drop-shadow-lg drop-shadow-[#CB6AFF]"
                    opacity={0.5}
                    width="90"
                    height="28"
                    viewBox="0 0 90 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M70.2119 0.273438L85.0166 20.1826C85.3785 20.0694 85.7639 20.0098 86.1631 20.0098C88.2811 20.0098 89.9989 21.7267 89.999 23.8447L89.9932 24.042C89.8905 26.0685 88.2151 27.6807 86.1631 27.6807L85.9658 27.6748C83.9396 27.572 82.3283 25.8965 82.3281 23.8447C82.3282 22.4975 83.0234 21.3129 84.0742 20.6289L69.5459 1.08984H21.9883L6.7373 21.3389C7.31842 22.011 7.67083 22.8866 7.6709 23.8447L7.66504 24.042C7.56238 26.0685 5.88695 27.6807 3.83496 27.6807L3.6377 27.6748C1.61144 27.572 0.00011583 25.8965 0 23.8447C0.000143913 21.7268 1.71703 20.0099 3.83496 20.0098C4.62538 20.0098 5.36024 20.2484 5.9707 20.6582L21.3252 0.270508L21.4785 0.0664062H70.0586L70.2119 0.273438ZM86.1631 21.0322C84.61 21.0324 83.3507 22.2916 83.3506 23.8447C83.3507 25.3978 84.61 26.6571 86.1631 26.6572C87.7163 26.6572 88.9755 25.3979 88.9756 23.8447C88.9754 22.2915 87.7163 21.0322 86.1631 21.0322ZM3.83496 21.0322C2.28187 21.0324 1.0226 22.2916 1.02246 23.8447C1.02258 25.3978 2.28186 26.6571 3.83496 26.6572C5.38819 26.6572 6.64734 25.3979 6.64746 23.8447C6.64732 22.2915 5.38817 21.0322 3.83496 21.0322Z"
                        fill="currentColor" />
                </svg>
            </div>

            <div className='flex items-center justify-center -space-x-1'>
                <Image
                    src={ArrowLeft}
                    alt="Arrow Left"
                    className='part-left-share'
                    width={38}
                    height={9}
                    sizes="100%"
                />

                {icon}
                <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    className='part-right-share'
                    width={38}
                    height={9}
                    sizes="100%"
                />

            </div>

            <div className='relative'>
                <svg
                    className="drop-shadow-lg drop-shadow-[#CB6AFF]"
                    width="90"
                    height="29"
                    viewBox="0 0 90 29"
                    fill="none"
                    opacity={0.5}
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M70.2119 28.2148L85.0166 8.30566C85.3785 8.41888 85.7639 8.47849 86.1631 8.47852C88.2811 8.47852 89.9989 6.76157 89.999 4.64355L89.9932 4.44629C89.8905 2.41983 88.2151 0.807617 86.1631 0.807617L85.9658 0.813477C83.9396 0.916288 82.3283 2.59179 82.3281 4.64355C82.3282 5.99081 83.0234 7.17535 84.0742 7.85938L69.5459 27.3984H21.9883L6.7373 7.14941C7.31841 6.47725 7.67083 5.60169 7.6709 4.64355L7.66504 4.44629C7.56237 2.41982 5.88694 0.807617 3.83496 0.807617L3.6377 0.813477C1.61144 0.916289 0.000121821 2.59178 0 4.64355C0.000143913 6.76148 1.71703 8.47837 3.83496 8.47852C4.62538 8.47852 5.36024 8.23991 5.9707 7.83008L21.3252 28.2178L21.4785 28.4219H70.0586L70.2119 28.2148ZM86.1631 7.45605C84.61 7.45591 83.3507 6.19664 83.3506 4.64355C83.3507 3.09045 84.61 1.8312 86.1631 1.83105C87.7163 1.83105 88.9755 3.09037 88.9756 4.64355C88.9754 6.19673 87.7163 7.45605 86.1631 7.45605ZM3.83496 7.45605C2.28187 7.45591 1.0226 6.19664 1.02246 4.64355C1.02259 3.09045 2.28186 1.8312 3.83496 1.83105C5.38818 1.83105 6.64734 3.09036 6.64746 4.64355C6.64732 6.19673 5.38817 7.45605 3.83496 7.45605Z"
                        fill="currentColor" />
                </svg>
                <svg
                    className='absolute left-3.5 -bottom-1 part-down-share'
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.3"
                        d="M11.5898 4.97656H4.94212L1.36257 0.37429"
                        stroke="currentColor"
                        strokeWidth="1.02273" />
                </svg>
                <svg
                    className='absolute right-3.5 -bottom-1 part-down-share'
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        opacity="0.3"
                        d="M0.433594 4.97656H7.08132L10.6609 0.37429"
                        stroke="currentColor"
                        strokeWidth="1.02273" />
                </svg>

            </div>
        </button>
    )
}
