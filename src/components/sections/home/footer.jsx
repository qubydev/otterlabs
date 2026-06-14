import MagneticButton from '@/components/custom-ui/magnetic-button'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-full max-w-200 mx-auto overflow-hidden mt-36'>

            <div className='flex flex-col items-center gap-6 px-4 py-8 sm:px-6'>
                <div className='w-full max-w-xl sm:max-w-2xl flex flex-col items-center gap-8 pb-4'>
                    <div className='w-full flex flex-col gap-4 sm:flex-row sm:justify-center'>
                        <a href="https://t.me/qubydev" target="_blank">
                            <MagneticButton className='mx-auto w-50 sm:w-auto px-6 py-4'>
                                <Image
                                    src='/icons/telegram.svg'
                                    alt='Send Message'
                                    width={24}
                                    height={24}
                                />
                                <span>Send Message</span>
                            </MagneticButton>
                        </a>

                        <a href="https://cal.com/qubydev" target="_blank">
                            <MagneticButton className='mx-auto w-50 sm:w-auto px-6 py-4'>
                                <Image
                                    src='/icons/gmeet.svg'
                                    alt='Book a call'
                                    width={24}
                                    height={24}
                                />
                                <span>Book a Call</span>
                            </MagneticButton>
                        </a>
                    </div>

                    <div className='w-full flex flex-col items-center gap-4'>
                        <div className='flex items-center justify-center gap-4'>
                            <a href="https://x.com/qubydev" target="_blank">
                                <MagneticButton className='p-4!'>
                                    <Image
                                        src='/icons/twitter.svg'
                                        alt='Twitter'
                                        width={24}
                                        height={24}
                                    />
                                </MagneticButton>
                            </a>
                            <a href="https://linkedin.com/in/qubydev" target="_blank">
                                <MagneticButton className='p-4!'>
                                    <Image
                                        src='/icons/linkedin.svg'
                                        alt='LinkedIn'
                                        width={24}
                                        height={24}
                                    />
                                </MagneticButton>
                            </a>
                            <a href="https://reddit.com/qubydev" target="_blank">
                                <MagneticButton className='p-4!'>
                                    <Image
                                        src='/icons/reddit.svg'
                                        alt='Reddit'
                                        width={24}
                                        height={24}
                                    />
                                </MagneticButton>
                            </a>
                        </div>

                        <span className='text-xs text-muted-foreground text-center'>Otter Labs © All rights reserved.</span>
                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden w-full' style={{ aspectRatio: '10 / 7' }}>
                <div className='absolute inset-x-0 top-0 w-full' style={{ aspectRatio: '1 / 1', transform: 'translateY(-30%)' }}>
                    <Image src='/ctx.jpeg' alt='Footer background' fill className='object-cover' />
                </div>
                <div className='absolute inset-y-0 left-0 w-32 md:w-64 pointer-events-none z-10' style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />
                <div className='absolute inset-y-0 right-0 w-32 md:w-64 pointer-events-none z-10' style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />
                <div className='absolute inset-x-0 top-0 bottom-1/2 pointer-events-none z-10' style={{ background: 'linear-gradient(to bottom, var(--background), transparent)' }} />
            </div>
        </div>
    )
}