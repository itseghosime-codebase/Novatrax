import React from 'react'
import Our from '../Ui/Our'
import Image from 'next/image'
import Bubbles from '@/assets/Button/bubbles.svg'
import XHI from '@/assets/Logo/xhi.svg'
import CaveBear from '@/assets/Logo/cave-bear.svg'
import PNS from '@/assets/Logo/pns.svg'
import PartnerShaderLogo from '../Shaders/PartnerShader'


export default function PartnerSection() {
    return (
        <section className='grid md:grid-cols-2 gap-10 items-center h-dvh content relative z-40'>
            <div className='flex items-center justify-center flex-col'>
                <Our label='Our' />
                <h2>PARTNERS</h2>
                <div className='mt-10 flex flex-col items-center justify-center gap-5'>
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* XHI Logo - bouncing */}
                        <Image
                            src={XHI}
                            alt="XHI Logo"
                            sizes="100%"
                            className="h-8 w-auto absolute z-0 animate-bounce-slow"
                        />

                        {/* Bubble - on top */}
                        <Image
                            src={Bubbles}
                            alt="Bubble"
                            sizes="100%"
                            className="h-32 w-32 relative z-10"
                        />
                    </div>
                    <div className='flex items-center justify-between gap-16 md:gap-24'>
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            {/* XHI Logo - bouncing */}
                            <Image
                                src={CaveBear}
                                alt="XHI Logo"
                                sizes="100%"
                                className="h-20 w-auto absolute z-0 animate-bounce-slow"
                                style={{
                                    animationDuration: '2.5s'
                                }}
                            />

                            {/* Bubble - on top */}
                            <Image
                                src={Bubbles}
                                alt="Bubble"
                                sizes="100%"
                                className="h-32 w-32 relative z-10"
                            />
                        </div>
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            {/* XHI Logo - bouncing */}
                            <Image
                                src={PNS}
                                alt="XHI Logo"
                                sizes="100%"
                                className="h-8 w-auto absolute z-0 animate-bounce-slow"
                                style={{
                                    animationDuration: '2.3s'
                                }}
                            />

                            {/* Bubble - on top */}
                            <Image
                                src={Bubbles}
                                alt="Bubble"
                                sizes="100%"
                                className="h-32 w-32 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <PartnerShaderLogo/>
        </section>
    )
}
