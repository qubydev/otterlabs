"use client";
import React from 'react';
import MagneticButton from '@/components/custom-ui/magnetic-button';

const WORK = {
    "websites": [
        {
            name: "Project 1",
            img: "/projects/project.png",
        },
        {
            name: "Project 2",
            img: "/projects/project.png",
        },
        {
            name: "Project 3",
            img: "/projects/project.png",
        },
        {
            name: "Project 4",
            img: "/projects/project.png",
        },
    ],
    "illustrations": [
        {
            name: "Project 1",
            img: "/illustrations/illustration.png",
        },
        {
            name: "Project 2",
            img: "/illustrations/illustration.png",
        },
        {
            name: "Project 3",
            img: "/illustrations/illustration.png",
        },
        {
            name: "Project 4",
            img: "/illustrations/illustration.png",
        },
    ],
    "branding": [
        {
            name: "Brand 1",
            colors: [
                { hex: "#000000" },
                { hex: "#FFFFFF" },
                { hex: "#3B82F6" },
                { hex: "#1F2937" },
                { hex: "#F3F4F6" },
                { hex: "#9CA3AF" },
            ],
            logo: "/logo.png",
            fonts: [
                { name: "Inter", family: "Inter" },
                { name: "Playfair Display", family: "Playfair Display" },
                { name: "Roboto Mono", family: "Roboto Mono" },
            ]
        },
        {
            name: "Brand 2",
            colors: [
                { hex: "#FF6B6B" },
                { hex: "#4ECDC4" },
                { hex: "#45B7D1" },
                { hex: "#FFA07A" },
                { hex: "#98D8C8" },
                { hex: "#F7DC6F" },
            ],
            logo: "/logo.png",
            fonts: [
                { name: "Poppins", family: "Poppins" },
                { name: "Lora", family: "Lora" },
                { name: "IBM Plex Mono", family: "IBM Plex Mono" },
            ]
        },
        {
            name: "Brand 3",
            colors: [
                { hex: "#667EEA" },
                { hex: "#764BA2" },
                { hex: "#F093FB" },
                { hex: "#4158D0" },
                { hex: "#C850C0" },
                { hex: "#FFAA40" },
            ],
            logo: "/logo.png",
            fonts: [
                { name: "Montserrat", family: "Montserrat" },
                { name: "Merriweather", family: "Merriweather" },
                { name: "Source Code Pro", family: "Source Code Pro" },
            ]
        },
    ]
};

export default function Page() {
    const [activeTab, setActiveTab] = React.useState("websites");

    React.useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;600;700&family=Roboto+Mono:wght@400;600;700&family=Poppins:wght@400;600;700&family=Lora:wght@400;600;700&family=IBM+Plex+Mono:wght@400;600;700&family=Montserrat:wght@400;600;700&family=Merriweather:wght@400;600;700&family=Source+Code+Pro:wght@400;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    const getGridClass = () => {
        if (activeTab === "websites") return "grid grid-cols-1";
        if (activeTab === "illustrations") return "grid grid-cols-1 md:grid-cols-2";
        if (activeTab === "branding") return "grid grid-cols-1 md:grid-cols-2";
        return "grid grid-cols-1";
    };

    const renderContent = () => {
        if (activeTab === "branding") {
            return (
                <div className={getGridClass() + " gap-6 lg:gap-8"}>
                    {WORK.branding.map((brand, idx) => (
                        <div key={idx} className="bg-card p-6 rounded-xl shadow-md">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="col-span-2">
                                    <div className="grid grid-cols-3 grid-rows-2 gap-2">
                                        {brand.colors.map((color, colorIdx) => (
                                            <div
                                                key={colorIdx}
                                                className="aspect-square rounded-lg"
                                                style={{ backgroundColor: color.hex }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-1">
                                    <div className="aspect-square rounded-lg bg-muted shadow-md overflow-hidden">
                                        <img
                                            src={brand.logo}
                                            alt="Logo"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                {brand.fonts.map((font, fontIdx) => (
                                    <div key={fontIdx} className="text-center">
                                        <div
                                            style={{ fontFamily: font.family }}
                                            className="text-lg font-semibold mb-1 truncate"
                                        >
                                            Aa
                                        </div>
                                        <p className="text-xs text-muted-foreground">{font.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            );
        }

        return (
            <div className={getGridClass() + " gap-6 lg:gap-8"}>
                {WORK[activeTab].map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-card p-4 rounded-xl shadow-md"
                    >
                        <img
                            src={project.img}
                            alt={project.name}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="w-full bg-background">
            <div className="max-w-200 mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-wrap gap-3 mb-12">
                    {Object.keys(WORK).map((service) => (
                        <MagneticButton
                            key={service}
                            onClick={() => setActiveTab(service)}
                            className={activeTab === service ? 'bg-primary text-primary-foreground' : ''}
                        >
                            {service}
                        </MagneticButton>
                    ))}
                </div>

                {renderContent()}
            </div>
        </div>
    );
}