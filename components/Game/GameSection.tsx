import React from 'react'
import Our from '../Ui/Our'
import ExtendedDestructuredBtn from '../Ui/ExtendedDestructuredBtn'
import Image from 'next/image'
import XPool from '@/assets/Background/Xpool.png'
import GameShaderLogo from '../Shaders/GameShader'

export default function GameSection() {
    return (
        <section className='grid md:grid-cols-2 items-center min-h-screen content relative z-40 py-24'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <Our label='Our' />
                <h2>GAMES</h2>
                <div>
                    <Image
                        src={XPool}
                        alt='Xpool'
                        sizes='100%'
                        className='w-auto h-72 object-center'
                    />
                    <p className='font-sans md:text-xl lg:text-2xl font-semibold'>
                        X-POOL
                    </p>
                </div>
                <ExtendedDestructuredBtn label='view' width={150} height={20} />
            </div>
            <GameShaderLogo />
        </section>
    )
}
