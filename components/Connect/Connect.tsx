import Image from 'next/image'
import React from 'react'
import LogoSingle from '@/assets/Logo/Novatrax-single.svg'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import JoinNow from '../Ui/JoinNow'
import SocialBg from '@/assets/Button/social-btn.svg'

export default function Connect() {
    const data = new Date().getFullYear()
    return (
        <section className='h-dvh flex flex-col items-center justify-end gap-5 relative'>
            <div className="content">
                <Image
                    src={LogoSingle}
                    alt='Novatrax Logo'
                    sizes='100%'
                    className='h-36 md:h-40 lg:h-52 w-auto'
                />
            </div>
            <div className="content">
                <h2>CONNECT WITH US</h2>
            </div>
            <div className="content">
                <p className='max-w-xl md:text-xl lg:text-2xl'>Stay ahead of the game, join our community for announcements, sneak peeks, and more.</p>
            </div>

            <JoinNow />

            <div className='border-t border-white/25 py-8 content mt-16 w-full flex flex-col md:flex-row gap-5 items-center justify-between'>
                <div className='flex items-center gap-7 text-2xl'>
                    {
                        SocialLinks.map((items, idx) => (
                            <Link key={idx} href={items.href} className='relative rounded-full group/link overflow-hidden'>
                                <Image
                                    src={SocialBg}
                                    alt='Button Background'
                                    sizes='100%'

                                />

                                <div className='absolute z-10 inset-1 rounded-full bg-[#CB6AFF] blur-2xl opacity-0 group-hover/link:opacity-100 duration-200 ease-in transition-opacity'/>

                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <items.icon />
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <p className='text-[#A7A7A7] text-sm md:text-base font-medium'>&copy; {data} NOVATRAX STUDIO</p>
            </div>
        </section>
    )
}


const SocialLinks = [
    {
        icon: AiFillInstagram,
        href: ''
    }, {
        icon: FaXTwitter,
        href: ''
    }, {
        icon: FaLinkedin,
        href: ''
    },
]