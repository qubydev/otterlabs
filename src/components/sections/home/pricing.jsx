'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import LinedHeading from '@/components/lined-heading'
import MagneticButton from '@/components/custom-ui/magnetic-button'
import { Check, ArrowRight, Calendar } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const services = [
    {
        id: 'web',
        label: 'Web App',
        title: 'Full-Stack Web MVP',
        priceLabel: 'One-Time Flat Rate',
        price: '$ 499',
        duration: '3-4 weeks',
        features: [
            'Next.js & Supabase Architecture',
            'Responsive Design (Desktop, Tablet, Mobile)',
            'Authentication & Database Setup',
            'Basic SEO & Performance Optimization',
            '2 Rounds of Revisions for free',
            '7 days of Post-Launch Support'
        ]
    },
    {
        id: 'automations',
        label: 'Automations',
        title: 'Workflow & AI Automations',
        priceLabel: 'One-Time Flat Rate',
        price: '$ 299',
        duration: '1-2 weeks',
        features: [
            'Custom API Integrations',
            'Zapier / Make.com Workflows',
            'OpenAI / ChatGPT Integrations',
            'CRM & Email Syncing',
            'Custom automation scripts',
            '2 Rounds of Revisions for free',
        ]
    },
    {
        id: 'illustrations',
        label: 'Illustrations',
        title: 'Custom Brand Graphics',
        priceLabel: 'Starting At',
        price: '$ 49',
        duration: '2-4 days',
        features: [
            'Hero Section Illustrations',
            'Spot Illustrations & Icons',
            'All Vector Files (SVG, AI, EPS)',
            'Full Commercial Usage Rights',
            '2 Rounds of Revisions for free',
            'Figma Source File Included'
        ]
    },
    {
        id: 'mobile',
        label: 'Mobile App',
        title: 'Mobile App MVP',
        priceLabel: 'One-Time Flat Rate',
        price: '$ 999',
        duration: '4-6 weeks',
        features: [
            'iOS & Android Cross-Platform',
            'Custom UI/UX Implementation',
            'Backend API Integration',
            'App Store & Play Store Prep',
            '1 Round of Revisions for free',
            '7 Days Post-Launch Support'
        ]
    }
]

export default function Pricing() {
    const [activeTab, setActiveTab] = useState(services[0].id)
    const activeService = services.find(s => s.id === activeTab)

    return (
        <div className="mt-18 text-[18px] md:text-[22px] max-w-165 leading-8 md:leading-10 w-full">
            <LinedHeading className="mt-8">Pricing</LinedHeading>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 md:mt-10 mb-6">
                {services.map((service) => (
                    <MagneticButton
                        key={service.id}
                        onClick={() => setActiveTab(service.id)}
                        className={cn(
                            "transition-all duration-300 px-4 py-2 text-sm md:text-base rounded-full",
                            activeTab === service.id
                                ? "bg-primary text-primary-foreground shadow-md"
                                : "bg-muted hover:bg-muted/80"
                        )}
                    >
                        {service.label}
                    </MagneticButton>
                ))}
            </div>

            <Card className="overflow-hidden border-border/50 shadow-lg bg-card/50 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-5">

                    <CardContent className="p-6 md:p-8 md:col-span-3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-border/50">
                        <div>
                            <h3 className="text-2xl md:text-3xl uppercase tracking-tight text-foreground font-black leading-tight max-w-[90%]">
                                {activeService.title}
                            </h3>

                            <ul className="mt-6 space-y-3 md:space-y-4">
                                {activeService.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-primary/90">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>

                    <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-center bg-muted/20">
                        <div className="mb-2 text-xs uppercase tracking-widest text-primary/80">
                            {activeService.priceLabel}
                        </div>
                        <div className="text-5xl md:text-6xl font-black tracking-tighter text-foreground whitespace-nowrap">
                            {activeService.price}
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-sm md:text-base text-primary/80">
                            <Calendar className="w-4 h-4 text-primary/80 flex-shrink-0" />
                            {activeService.duration}
                        </div>

                        <div className="flex flex-col gap-3 mt-8">
                            <MagneticButton className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 md:h-12 text-sm md:text-base flex justify-center items-center gap-2 px-4 transition-colors rounded-full">
                                Start Now <ArrowRight size={18} className="flex-shrink-0" />
                            </MagneticButton>

                            <MagneticButton className="w-full h-11 md:h-12 border-2 border-border/50 bg-transparent hover:bg-muted text-foreground text-sm md:text-base flex justify-center items-center gap-2 px-4 transition-colors rounded-full">
                                <Image src="/icons/gmeet.svg" alt="Meet" width={18} height={18} className="flex-shrink-0" />
                                Book a Call
                            </MagneticButton>
                        </div>
                    </div>

                </div>
            </Card>

            <p className='mt-8 text-center text-sm md:text-base text-muted-foreground'>
                Have something else in mind? <a href="#contact" className="underline whitespace-nowrap text-foreground hover:text-primary transition-colors">Let's discuss</a>
            </p>
        </div>
    )
}