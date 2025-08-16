import React from 'react'
import Our from '../Ui/Our'
import GetInTouch from '../Ui/GetInTouch'
import ContactShaderLogo from '../Shaders/ContactShader'

export default function ContactSection() {
    return (
        <section className='grid md:grid-cols-2 gap-10 items-center min-h-screen content relative z-40'>
            <div className='flex items-center justify-center flex-col'>
                <Our />
                <h2>CONTACT</h2>
                <p className='font-medium font-sans max-w-lg  md:text-base lg:text-xl mt-6 md:mt-12 md:mb-5'>Have a project, partnership, or idea in mind? We’d love to hear from you. Reach out and let’s build the future of gaming together.</p>
                <GetInTouch />
            </div>
            <ContactShaderLogo/>
        </section>
    )
}
