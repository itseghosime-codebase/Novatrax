import React from 'react'
import LearnMore from '../Ui/LearnMore'
import AboutShaderLogo from '../Shaders/AboutShader'

export default function AboutSectionTwo() {
    return (
        <section className='h-dvh content relative z-30 grid gap-10 md:grid-cols-2 items-center'>
            <div className='flex flex-col items-center justify-center md:gap-8'>
                <h2 className="text-8xl font-mono animate-in mb-5">
                    WE ARE
                </h2>
                <p className='font-medium font-sans max-w-xl text-sm md:text-base lg:text-xl'>
                    At Novatrax Studio, we are redefining the future of gaming from the heart of Africa. Based in Nigeria, we are a creative game development studio dedicated to crafting bold, immersive, and unforgettable gaming experiences that transcend borders.
                </p>
                <LearnMore />
            </div>
            <AboutShaderLogo />
        </section>
    )
}
