import React from 'react'
import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'
import { RoughNotationScroll } from '@/components/rough-notation-scroll';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export default function Problem() {
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
        <div className='mt-18 text-[18px] md:text-[22px] max-w-165 leading-8 md:leading-10 w-full'>
            <p>
                We know, It always starts the same way. <br />
                You're out for a quiet walk, or maybe you're just staring at the ceiling at 2 AM.<br />
                Suddenly, it hits you... <RoughNotationScroll type="circle" color="#22c55e" strokeWidth={3}><span className='italic font-black'>The Idea.</span></RoughNotationScroll><br />
                The one you absolutely have to build.
            </p>

            <p className='mt-8 mb-8'>
                So you dive right in, but now you have to face...
            </p>

            <div className='relative my-12 h-[450px] w-full overflow-hidden flex items-center justify-center rounded-xl'>

                <div className='absolute w-[150%] top-[15%] -left-[25%] -rotate-[12deg] z-0'>
                    <Marquee className='py-3 bg-[#facc15] border-y-4 border-black shadow-2xl'>
                        {shuffleArray([...headaches]).map((item, i) => (
                            <div key={i} className='mx-6 flex items-center gap-6 text-xl md:text-2xl font-black text-black uppercase tracking-widest'>
                                <span>🚧</span>
                                {item}
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className='absolute w-[150%] top-[40%] -left-[25%] rotate-[8deg] z-10'>
                    <Marquee reverse className='py-3 bg-[#facc15] border-y-4 border-black shadow-2xl'>
                        {shuffleArray([...headaches]).map((item, i) => (
                            <div key={i} className='mx-6 flex items-center gap-6 text-xl md:text-2xl font-black text-black uppercase tracking-widest'>
                                <span>⚠️</span>
                                {item}
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className='absolute w-[150%] bottom-[12%] -left-[25%] -rotate-[6deg] z-0'>
                    <Marquee className='py-3 bg-[#facc15] border-y-4 border-black shadow-2xl'>
                        {shuffleArray([...headaches]).map((item, i) => (
                            <div key={i} className='mx-6 flex items-center gap-6 text-xl md:text-2xl font-black text-black uppercase tracking-widest'>
                                <span>☢️</span>
                                {item}
                            </div>
                        ))}
                    </Marquee>
                </div>

                {/* <div className='absolute w-[150%] top-[5%] -left-[25%] rotate-[45deg] z-10'>
                    <Marquee className='py-3 bg-[#facc15] border-y-4 border-black shadow-2xl'>
                        {shuffleArray([...headaches]).map((item, i) => (
                            <div key={i} className='mx-6 flex items-center gap-6 text-xl md:text-2xl font-black text-black uppercase tracking-widest'>
                                <span>🛑</span>
                                {item}
                            </div>
                        ))}
                    </Marquee>
                </div> */}

                {/* <div className='absolute w-[250%] top-[10%] -left-[100%] -rotate-[75deg] z-1'>
                    <Marquee className='py-3 bg-[#facc15] border-y-4 border-black shadow-2xl'>
                        {shuffleArray([...headaches]).map((item, i) => (
                            <div key={i} className='mx-6 flex items-center gap-6 text-xl md:text-2xl font-black text-black uppercase tracking-widest'>
                                <span>🔥</span>
                                {item}
                            </div>
                        ))}
                    </Marquee>
                </div> */}

                <div className='absolute inset-0 flex justify-center items-center pointer-events-none z-20'>
                    <div className="relative">
                        <Image
                            src="/otter-tensed.svg"
                            alt="Otter Tensed"
                            height={240}
                            width={240}
                            className="relative z-10"
                        />
                    </div>
                </div>

                <div className='absolute inset-y-0 left-0 w-32 pointer-events-none z-30' style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />
                <div className='absolute inset-y-0 right-0 w-32 pointer-events-none z-30' style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />
                <div className='absolute inset-x-0 top-0 h-32 pointer-events-none z-30' style={{ background: 'linear-gradient(to bottom, var(--background), transparent)' }} />
                <div className='absolute inset-x-0 bottom-0 h-32 pointer-events-none z-30' style={{ background: 'linear-gradient(to top, var(--background), transparent)' }} />
            </div>

            <p className='mt-8'>
                ... and then <RoughNotationScroll type="highlight" color="#ef4444" className="text-white px-2">YOU QUIT!</RoughNotationScroll>
            </p>
        </div>
    )
}