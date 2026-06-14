import React from 'react'
import MagneticButton from '@/components/custom-ui/magnetic-button';
import Image from 'next/image';
import VideoPlayer from '@/components/custom-ui/video-player';
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="max-w-165">
            <h2 className="uppercase text-muted-foreground text-sm text-center md:text-left">
                shippng in weeks not months ✨
            </h2>

            <p className="text-[2.125rem] md:text-[2.5rem] leading-[119%] font-bold tracking-[-0.04em] mt-8 wrap-break-word text-center md:text-left">
                The <Image src="/otter-figma.svg" alt="otter-figma" width={64} height={64} className="inline-block size-10 lg:size-16 relative bottom-1 lg:bottom-2" /> studio <span className="text-muted-foreground">turning great ideas into</span> live products.
            </p>

            <div className='mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4'>
                <a href="https://cal.com/qubydev" target="_blank">
                    <MagneticButton className="flex items-center justify-center gap-3">
                        <Image
                            src="/icons/gmeet.svg"
                            alt="gmeet"
                            width={24}
                            height={24}
                            className="size-6"
                        />
                        <span>Book a call</span>
                    </MagneticButton>
                </a>
                <Link href="/work">
                    <MagneticButton className="flex items-center justify-center gap-3">
                        <Image
                            src="/icons/folder.svg"
                            alt="folder"
                            width={24}
                            height={24}
                            className="size-6"
                        />
                        <span>See Works</span>
                    </MagneticButton>
                </Link>
            </div>

            <div className='mt-16 w-full'>
                <VideoPlayer
                    url="/demo-video.mp4"
                />
            </div>

        </div>
    )
}