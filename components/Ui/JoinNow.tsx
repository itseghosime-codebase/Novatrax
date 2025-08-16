import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import ArrowLeft from '@/assets/Button/Union-2.png'
import ArrowRight from '@/assets/Button/Union-3.png'

export default function JoinNow() {
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
            className='flex flex-col items-center justify-center scale-75 md:scale-95 text-[#CB6AFF] group mt-5 relative'>

            <div className='relative z-10'>
                <svg
                    className='absolute left-2.5 -top-1 part-up-share'
                    width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.386719 5.97083L5.35754 1H12.3167" stroke="#CB6AFF" strokeOpacity="0.3" strokeWidth="0.994165" />
                </svg>

                <svg
                    className='absolute right-2.5 -top-1 part-up-share'
                    width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8672 5.97083L7.89636 1H0.937205" stroke="#CB6AFF" strokeOpacity="0.3" strokeWidth="0.994165" />
                </svg>


                <svg className="drop-shadow-lg drop-shadow-[#CB6AFF]" width={150} height={20} viewBox={`0 0 212 28`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M187.006 0.629883L206.392 20.0166L205.789 20.6182C206.413 20.1487 207.189 19.8702 208.029 19.8701L208.221 19.875C210.19 19.9748 211.757 21.6042 211.757 23.5986L211.752 23.79C211.652 25.7598 210.024 27.326 208.029 27.3262L207.837 27.3213C205.931 27.2245 204.402 25.6962 204.306 23.79L204.301 23.5986C204.301 22.4317 204.837 21.3897 205.677 20.7061L186.448 1.47852H26.3027L6.58008 21.2002C7.12591 21.8486 7.45594 22.6848 7.45605 23.5986L7.45117 23.79C7.35135 25.7598 5.72299 27.326 3.72852 27.3262L3.53613 27.3213C1.62992 27.2246 0.101488 25.6963 0.00488281 23.79L0 23.5986C0.00025877 21.5399 1.66969 19.8701 3.72852 19.8701L3.91992 19.875C4.63261 19.9111 5.29178 20.1489 5.84375 20.5303L25.8906 0.484375H186.86L187.006 0.629883ZM208.029 20.8643C206.52 20.8643 205.295 22.089 205.295 23.5986C205.295 25.1083 206.52 26.3319 208.029 26.332C209.539 26.3318 210.762 25.1082 210.763 23.5986C210.762 22.0891 209.539 20.8645 208.029 20.8643ZM3.72852 20.8643C2.21875 20.8643 0.994399 22.0889 0.994141 23.5986C0.994355 25.1084 2.21873 26.332 3.72852 26.332C5.23812 26.3318 6.4617 25.1082 6.46191 23.5986C6.46166 22.0891 5.2381 20.8645 3.72852 20.8643Z" fill="#CB6AFF" />
                </svg>

            </div>

            <div className='relative z-10 flex items-center justify-center'>
                <Image
                    src={ArrowLeft}
                    alt="Arrow Left"
                    className='part-left-share'
                    width={38}
                    height={9}
                    sizes="100%"
                />
                <p className="text-white font-mono text-2xl uppercase">JOIN now</p>
                <Image
                    src={ArrowRight}
                    alt="Arrow Right"
                    className='part-right-share'
                    width={38}
                    height={9}
                    sizes="100%"
                />

            </div>

            <div className='relative z-10'>
                <svg className="drop-shadow-lg drop-shadow-[#CB6AFF]" width={150} height={20} viewBox="0 0 212 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.752 27.3545L5.36621 7.96777L5.96875 7.36621C5.34508 7.83571 4.56915 8.11422 3.72852 8.11426L3.53711 8.10938C1.56742 8.00955 0.00122717 6.38018 0.000976562 4.38574L0.00585938 4.19434C0.105686 2.22462 1.73404 0.658411 3.72852 0.658203L3.9209 0.663086C5.82705 0.759874 7.35555 2.28814 7.45215 4.19434L7.45703 4.38574C7.45688 5.55263 6.92062 6.59471 6.08105 7.27832L25.3096 26.5059H185.455L205.178 6.78418C204.632 6.13574 204.302 5.2996 204.302 4.38574L204.307 4.19434C204.406 2.22462 206.035 0.658411 208.029 0.658203L208.222 0.663086C210.128 0.7598 211.656 2.28809 211.753 4.19434L211.758 4.38574C211.758 6.44451 210.088 8.11426 208.029 8.11426L207.838 8.10938C207.125 8.07326 206.466 7.83547 205.914 7.4541L185.867 27.5H24.8975L24.752 27.3545ZM3.72852 7.12012C5.23821 7.12003 6.46263 5.89539 6.46289 4.38574C6.46268 2.87605 5.23823 1.65243 3.72852 1.65234C2.21891 1.65256 0.995331 2.87614 0.995117 4.38574C0.995376 5.89531 2.21894 7.1199 3.72852 7.12012ZM208.029 7.12012C209.539 7.12012 210.763 5.89544 210.764 4.38574C210.763 2.876 209.539 1.65234 208.029 1.65234C206.52 1.65256 205.296 2.87614 205.296 4.38574C205.296 5.89531 206.52 7.1199 208.029 7.12012Z" fill="#CB6AFF" />
                </svg>

                <svg
                    className='absolute left-2.5 -bottom-1 part-down-share'
                    width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.386719 1.00574L5.35754 5.97656H12.3167" stroke="#CB6AFF" strokeOpacity="0.3" strokeWidth="0.994165" />
                </svg>
                <svg
                    className='absolute right-2.5 -bottom-1 part-down-share'
                    width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8672 1.00574L7.89636 5.97656H0.937205" stroke="#CB6AFF" strokeOpacity="0.3" strokeWidth="0.994165" />
                </svg>


            </div>

            <div className="absolute z-0">
                <div className="absolute top-1/2 left-1/2 -translate-1/2 h-20 w-20 rounded-full bg-[#CB6AFF] blur-2xl transition-opacity opacity-0 group-hover:opacity-100 duration-300 ease-in-out" />
                <svg className="group-hover:animate-spin transition-transform ease-linear duration-300 opacity-0 group-hover:opacity-100" width="108" height="111" viewBox="0 0 108 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M53.874 0.5C70.4672 0.5 83.7499 6.19016 92.8857 15.8457C102.025 25.5048 107.055 39.1758 107.055 55.2051C107.055 71.2341 102.025 84.9037 92.8857 94.5625C83.7499 104.218 70.4673 109.908 53.874 109.908C37.1815 109.908 23.8507 104.218 14.6914 94.5635C5.52904 84.9053 0.500094 71.2357 0.5 55.2051C0.5 39.1742 5.52886 25.5033 14.6914 15.8447C23.8506 6.18973 37.1816 0.500043 53.874 0.5ZM48.3301 26.3359C35.078 28.9818 25.087 41.0777 25.0869 55.5908C25.0869 72.0308 37.9106 85.3906 53.7764 85.3906C69.6376 85.3906 82.464 72.0309 82.4629 55.5908C82.4706 51.1858 81.5277 46.8301 79.6982 42.8193L79.3906 42.1455L78.8809 42.6826C75.6837 46.0507 71.2456 48.1347 66.3418 48.1348C56.6191 48.1348 48.7051 39.9326 48.7051 29.7822L48.7188 29.0596C48.7457 28.3371 48.8132 27.6166 48.9219 26.9014L49.0293 26.1963L48.3301 26.3359Z" stroke="#CB6AFF" />
                </svg>
            </div>

        </button>
    )
}
