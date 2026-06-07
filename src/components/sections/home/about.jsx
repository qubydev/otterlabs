import React from 'react'
import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'

export default function About() {
    const headaches = [
        "Development",
        "Designing",
        "Marketing",
        "Sales",
        "Support",
        "Accounting",
        "Legal",
        "Publishing",
        "Scaling",
        "Deployment",
        "Security",
        "Documenting",
    ];

    return (
        <RoughNotationGroup show={true}>
            <div className='mt-18 text-[18px] md:text-[22px] max-w-165 leading-8 md:leading-10'>
                <p>
                    We know, It always starts the same way. <br />
                    You're out for a quiet walk, or maybe you're just staring at the ceiling at 2 AM.<br />
                    Suddenly, it hits you... <RoughNotation type="circle" color="#22c55e" strokeWidth={3}><span className='italic font-black'>The Idea.</span></RoughNotation><br />
                    The one you absolutely have to build.
                </p>

                <p className='mt-8 mb-8'>
                    So you dive right in, but now <RoughNotation type="underline" color="var(--foreground)" strokeWidth={3}> you have to face...</RoughNotation>
                </p>

                <div className='relative my-12'>
                    <div className='space-y-4'>
                        <Marquee className='py-4'>
                            {headaches.map((item, i) => (
                                <div key={i} className='mx-4 text-lg font-bold text-foreground/90'>
                                    {item}
                                </div>
                            ))}
                        </Marquee>

                        <Marquee reverse className='py-4'>
                            {headaches.map((item, i) => (
                                <div key={i} className='mx-4 text-lg font-bold text-foreground/80'>
                                    {item}
                                </div>
                            ))}
                        </Marquee>

                        <Marquee className='py-4'>
                            {headaches.map((item, i) => (
                                <div key={i} className='mx-4 text-lg font-bold text-foreground/80'>
                                    {item}
                                </div>
                            ))}
                        </Marquee>

                        <Marquee reverse className='py-4'>
                            {headaches.map((item, i) => (
                                <div key={i} className='mx-4 text-lg font-bold text-foreground/90'>
                                    {item}
                                </div>
                            ))}
                        </Marquee>

                        <Marquee className='py-4'>
                            {headaches.map((item, i) => (
                                <div key={i} className='mx-4 text-lg font-bold text-foreground/80'>
                                    {item}
                                </div>
                            ))}
                        </Marquee>
                    </div>

                    <div className='absolute inset-y-0 left-0 w-32 pointer-events-none' style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />
                    <div className='absolute inset-y-0 right-0 w-32 pointer-events-none' style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />

                    <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
                        <Image
                            src="/otter-tensed.svg"
                            alt="Otter Tensed"
                            height={160}
                            width={160}
                            style={{ filter: 'drop-shadow(0 0 60px var(--background)) drop-shadow(0 0 40px var(--background)) drop-shadow(0 0 20px var(--background))' }}
                        />
                    </div>
                </div>  

                <p className='mt-8'>
                    ... and then you <RoughNotation type="highlight" color="#ef4444" className="text-white">QUIT!</RoughNotation>
                </p>
            </div>
        </RoughNotationGroup>
    )
}