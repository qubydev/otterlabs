import React from 'react'
import MagneticButton from '@/components/custom-ui/magnetic-button';
import Image from 'next/image';
import VideoPlayer from '@/components/custom-ui/video-player';

export default function Hero() {
    return (
        <div className="max-w-165">
            <h2 className="uppercase text-muted-foreground text-sm text-center md:text-left">
                shipping in{" "} <span className="text-foreground">weeks</span> {" "}, not{" "}
                <span className="text-foreground">months</span>
            </h2>

            <p className="text-[2.125rem] md:text-[2.5rem] leading-[119%] font-bold tracking-[-0.04em] mt-8 wrap-break-word text-center md:text-left">
                The <Image src="/otter-figma.svg" alt="otter-figma" width={64} height={64} className="inline-block size-10 lg:size-16 relative bottom-1 lg:bottom-2 mx-2" /> studio <span className="text-muted-foreground">turning great ideas into</span> live products.
            </p>

            <div className='mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4'>
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
            </div>

            <div className='mt-16 w-full'>
                <VideoPlayer
                    url="https://kree8.b-cdn.net/KREE8%20MOTION%20part%202K_20-01-26%20v3_3.mp4"
                />
            </div>

        </div>
    )
}