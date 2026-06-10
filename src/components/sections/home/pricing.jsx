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
        duration: 'Delivered in 3-4 weeks',
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
        duration: 'Delivered in 1-2 weeks',
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
        duration: 'Delivered in 2-4 days',
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
        duration: 'Delivered in 4-6 weeks',
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
        <div className="mt-18 text-[18px] md:text-[22px] max-w-6xl mx-auto leading-8 md:leading-10 w-full px-4 sm:px-6">
            <LinedHeading className="mt-8">Pricing</LinedHeading>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 md:mt-12 mb-8">
                {services.map((service) => (
                    <MagneticButton
                        key={service.id}
                        onClick={() => setActiveTab(service.id)}
                        className={cn(
                            "transition-all duration-300 px-4 py-2 text-sm sm:text-base md:px-5 md:py-2.5",
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
                <div className="grid grid-cols-1 lg:grid-cols-3">

                    <CardContent className="p-6 sm:p-8 lg:p-12 lg:col-span-2 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border/50">
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl uppercase tracking-tight text-foreground font-bold">
                                {activeService.title}
                            </h3>

                            <ul className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                                {activeService.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start md:items-center gap-3 md:gap-4 text-sm sm:text-base md:text-lg text-primary">
                                        <Check className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5 md:mt-0" strokeWidth={3} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>

                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-muted/20">
                        <div className="mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-widest text-primary font-bold">
                            {activeService.priceLabel}
                        </div>
                        <div className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-foreground">
                            {activeService.price}
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-4 text-sm sm:text-base md:text-lg text-foreground font-medium">
                            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            {activeService.duration}
                        </div>

                        <div className="flex flex-col gap-3 md:gap-4 mt-6 md:mt-10">
                            <MagneticButton className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 md:h-14 text-base md:text-lg">
                                Start Your Project <ArrowRight size={20} />
                            </MagneticButton>

                            <MagneticButton className="w-full h-12 md:h-14 border-2 border-border bg-transparent hover:bg-muted text-foreground text-base md:text-lg">
                                <Image src="/icons/gmeet.svg" alt="Meet" width={20} height={20} className="md:w-6 md:h-6" />
                                Book a Call
                            </MagneticButton>
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
}