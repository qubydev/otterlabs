import React from 'react'
import LinedHeading from '@/components/lined-heading'
import { Marquee } from '@/components/ui/marquee'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'
import MagneticCard from '@/components/custom-ui/magnetic-card'

const testimonialsRowOne = [
    {
        name: "Giorgio",
        role: "Founder, Quarkdown",
        body: "insane visual by @qubydev ! love this community - now live on quarkdown.com",
        img: "/profiles/quarkdown.png",
    },
    {
        name: "Sam Taylor",
        role: "Upwork Client",
        body: "Malay was fantastic ! He followed all instructions and finished task in time and with great accuracy... He understood complex problems and solved them.. would definitely recommend him to anyone",
    },
    {
        name: "Alex Mercer",
        role: "Tech Lead",
        body: "Malay absolutely crushed it. Delivered a polished, high-performing product well before the deadline. Highly recommended!",
    }
]

const testimonialsRowTwo = [
    {
        name: "Steven Pierson",
        role: "Upwork Client",
        body: "Malay Completed the project on time and budget. He fix all issues and provided excellent support to us using his solution. Would definitely hire again",
    },
    {
        name: "SweetInvestigator432",
        role: "Founder, Drift",
        body: "Bro, Bro, That's great! 🙇‍♂️ cant wait to see the rest",
        img: "/profiles/drift.jpeg",
    },
    {
        name: "Jordan Hayes",
        role: "Startup Founder",
        body: "Incredible attention to detail and a fantastic problem solver. The final delivery exceeded all our expectations and hit every mark.",
    }
]

export default function Love() {
    return (
        <div className='mt-18 text-[18px] md:text-[22px] max-w-165 leading-8 md:leading-10 w-full'>
            <LinedHeading className="mt-8">Love We Received</LinedHeading>

            <p className='mt-8 text-foreground/90'>
                We could tell you how great we are, but let me just show you...
            </p>

            <div className='relative my-10 hidden md:flex w-full overflow-hidden flex-col gap-4 rounded-xl'>
                <Marquee pauseOnHover className="[--duration:35s]">
                    {testimonialsRowOne.map((review, i) => (
                        <MagneticCard
                            key={i}
                            className="relative w-80 h-64 cursor-pointer rounded-2xl border border-border bg-card p-6 flex flex-col"
                        >
                            <div className="flex flex-row items-center gap-4 mb-4">
                                <Avatar className="h-12 w-12 border border-border">
                                    <AvatarImage src={review.img} alt={review.name} className="object-cover" />
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                        {review.name.substring(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-base font-black uppercase tracking-tight text-foreground leading-none mb-1">
                                        {review.name}
                                    </span>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                                        {review.role}
                                    </span>
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <blockquote className="text-base text-foreground leading-relaxed font-thin italic font-sans line-clamp-4">
                                "{review.body}"
                            </blockquote>
                        </MagneticCard>
                    ))}
                </Marquee>

                <Marquee reverse pauseOnHover className="[--duration:40s]">
                    {testimonialsRowTwo.map((review, i) => (
                        <MagneticCard
                            key={i}
                            className="relative w-80 h-64 cursor-pointer rounded-2xl border border-border bg-card p-6 flex flex-col"
                        >
                            <div className="flex flex-row items-center gap-4 mb-4">
                                <Avatar className="h-12 w-12 border border-border">
                                    <AvatarImage src={review.img} alt={review.name} className="object-cover" />
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                        {review.name.substring(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-base font-black uppercase tracking-tight text-foreground leading-none mb-1">
                                        {review.name}
                                    </span>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                                        {review.role}
                                    </span>
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <blockquote className="text-base text-foreground leading-relaxed font-thin italic font-sans line-clamp-4">
                                "{review.body}"
                            </blockquote>
                        </MagneticCard>
                    ))}
                </Marquee>

                <div className='absolute inset-y-0 left-0 w-24 pointer-events-none z-10' style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />
                <div className='absolute inset-y-0 right-0 w-24 pointer-events-none z-10' style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />
            </div>

            <div className='relative my-10 flex md:hidden w-full h-[500px] overflow-hidden flex-row justify-center rounded-xl'>
                <Marquee vertical pauseOnHover className="[--duration:40s] w-full px-2">
                    {[...testimonialsRowOne, ...testimonialsRowTwo].map((review, i) => (
                        <MagneticCard
                            key={i}
                            className="relative w-full h-64 cursor-pointer rounded-2xl border border-border bg-card p-6 flex flex-col"
                        >
                            <div className="flex flex-row items-center gap-4 mb-4">
                                <Avatar className="h-12 w-12 border border-border">
                                    <AvatarImage src={review.img} alt={review.name} className="object-cover" />
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">
                                        {review.name.substring(0, 2).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="text-base font-black uppercase tracking-tight text-foreground leading-none mb-1">
                                        {review.name}
                                    </span>
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                                        {review.role}
                                    </span>
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-[#facc15] text-[#facc15]" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <blockquote className="text-sm text-foreground leading-relaxed font-thin italic font-sans line-clamp-4">
                                "{review.body}"
                            </blockquote>
                        </MagneticCard>
                    ))}
                </Marquee>

                <div className='absolute inset-x-0 top-0 h-24 pointer-events-none z-10' style={{ background: 'linear-gradient(to bottom, var(--background), transparent)' }} />
                <div className='absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10' style={{ background: 'linear-gradient(to top, var(--background), transparent)' }} />
            </div>
        </div>
    )
}