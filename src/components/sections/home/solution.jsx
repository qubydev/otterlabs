import React from 'react';
import LinedHeading from '@/components/lined-heading';
import Gallary from '@/components/gallary';
import { RoughNotationScroll } from '@/components/rough-notation-scroll';
import FloatingCubes from '@/components/floating-cubes';

export default function Solution() {
    return (
        <div className='mt-18 text-[18px] md:text-[22px] max-w-165 leading-8 md:leading-10 w-full'>
            <LinedHeading className="mt-8">What's the solution?</LinedHeading>

            <p className='mt-8'>
                To solve this we built <span className='text-primary font-black'>Otter Labs</span>, a team of (not lazy) otters shipping your idea to the world.
            </p>

            <Gallary />

            <p className='mt-8'>
                From branding and websites to product design and launch day chaos, we handle the work that stands between a great idea and a real business.
            </p>

            <p className='mt-8'>
                And yes,{' '}
                <span className="relative inline-block font-black italic -skew-x-12 text-primary">
                    <span className="relative z-10">we're fast.</span>

                    <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 -z-10 text-primary opacity-50 -translate-x-2 select-none"
                        style={{ filter: 'url(#motion-blur-short)' }}
                    >
                        we're fast.
                    </span>
                    <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 -z-10 text-primary opacity-20 -translate-x-6 select-none"
                        style={{
                            filter: 'url(#motion-blur-long)',
                            maskImage: 'linear-gradient(to right, transparent, black 70%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent, black 70%)'
                        }}
                    >
                        we're fast.
                    </span>

                    <svg className="absolute w-0 h-0 pointer-events-none">
                        <defs>
                            <filter id="motion-blur-short" x="-100%" y="-50%" width="300%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10 0" />
                            </filter>
                            <filter id="motion-blur-long" x="-100%" y="-50%" width="300%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="28 0" />
                            </filter>
                        </defs>
                    </svg>
                </span>
            </p>

            <p className='mt-8'>
                Because ideas have momentum. The longer they sit in a backlog, the more likely they are to become another forgotten tab in your browser. We ship in weeks,  <RoughNotationScroll type="strike-through" color="#FF0000" strokeWidth={2}>not months</RoughNotationScroll>.
            </p>

            <div className='mt-8'>
                <FloatingCubes />
            </div>

            <p className='mt-8'>
                Whether it's a full-stack web app, SaaS platform, AI-powered product, mobile application, e-commerce store, or custom software, we got you.
            </p>

            <p className='mt-8'>
                Alright, enough talking. Let's take action...
            </p>

            <p className='mt-8'>
                - Seen our work? Pretty good, right? <br />
                - Pick a plan or book a call. <br />
                - We'll take it from there.
            </p>

            <p className='mt-8'>
                You're just one decision away from <RoughNotationScroll type="highlight" color="#56ef1555" className="px-2 whitespace-nowrap">making it real</RoughNotationScroll> ✨
            </p>

        </div>
    );
}