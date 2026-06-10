import MagneticButton from '@/components/custom-ui/magnetic-button'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='relative w-full max-w-200 mx-auto aspect-square overflow-hidden mt-16 md:mt-10 lg:mt-0'>
            <div
                className='absolute inset-0 bg-[url(/ctx.jpeg)] bg-cover bg-bottom z-0'
                style={{
                    maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
                }}
            />

            <div className='absolute inset-y-0 left-0 w-32 md:w-64 pointer-events-none z-10' style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />

            <div className='absolute inset-y-0 right-0 w-32 md:w-64 pointer-events-none z-10' style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />

            <div className='absolute inset-x-0 top-0 bottom-1/2 z-20 flex flex-col items-center justify-end gap-3 pb-6'>
                <MagneticButton className="mb-4">
                    <Image
                        src="/icons/telegram.svg"
                        alt="Telegram"
                        width={28}
                        height={28}
                    />
                    <span>Send Message</span>
                </MagneticButton>

                <div className='flex items-center gap-4'>
                    <MagneticButton className="p-4">
                        <Image
                            src="/icons/twitter.svg"
                            alt="Twitter"
                            width={24}
                            height={24}
                        />
                    </MagneticButton>
                    <MagneticButton className="p-4">
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                    </MagneticButton>
                    <MagneticButton className="p-4">
                        <Image
                            src="/icons/reddit.svg"
                            alt="Reddit"
                            width={24}
                            height={24}
                        />
                    </MagneticButton>
                </div>

                <span className='text-xs text-muted-foreground'>
                    Otter Labs © All rights reserved.
                </span>
            </div>
        </div>
    )
}