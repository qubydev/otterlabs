'use client';

import React, { useRef, useEffect } from 'react';

export default function FloatingCubes() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let currentSize = 120;
        let particles = [];

        const resizeCanvas = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            currentSize = window.innerWidth < 640 ? 72 : (window.innerWidth < 1024 ? 100 : 140);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const cubes = [
            '/cubes/android.png',
            '/cubes/chrome.png',
            '/cubes/figma.png',
            '/cubes/flutter.png',
            '/cubes/ios.png',
            '/cubes/playstore.png'
        ];

        let imagesLoaded = 0;

        particles = cubes.map((src) => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => {
                imagesLoaded++;
            };

            return {
                img,
                x: Math.random() * Math.max(10, canvas.width - currentSize * 1.5),
                y: Math.random() * Math.max(10, canvas.height - currentSize * 1.5),
                dx: (Math.random() - 0.5) * 0.6,
                dy: (Math.random() - 0.5) * 0.6,
                angle: Math.random() * Math.PI * 2,
                dAngle: (Math.random() - 0.5) * 0.008
            };
        });

        const handleInteraction = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            particles.forEach(p => {
                const centerX = p.x + currentSize / 2;
                const centerY = p.y + currentSize / 2;

                const distX = centerX - x;
                const distY = centerY - y;
                const distance = Math.hypot(distX, distY);

                const interactionRadius = 300;

                if (distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    const pushPower = 15;

                    p.dx += (distX / distance) * force * pushPower;
                    p.dy += (distY / distance) * force * pushPower;

                    p.dAngle += (Math.random() - 0.5) * force * 0.15;
                }
            });
        };

        canvas.addEventListener('pointerdown', handleInteraction);

        const render = () => {
            const width = canvas.width;
            const height = canvas.height;
            ctx.clearRect(0, 0, width, height);

            if (imagesLoaded === cubes.length) {
                particles.forEach(p => {
                    p.x += p.dx;
                    p.y += p.dy;
                    p.angle += p.dAngle;

                    const currentSpeed = Math.hypot(p.dx, p.dy);
                    const targetSpeed = 0.6;

                    if (currentSpeed > targetSpeed) {
                        p.dx *= 0.96;
                        p.dy *= 0.96;
                    } else if (currentSpeed < targetSpeed * 0.8) {
                        p.dx *= 1.02;
                        p.dy *= 1.02;
                    }

                    if (Math.abs(p.dAngle) > 0.01) {
                        p.dAngle *= 0.98;
                    }

                    if (p.x <= 0) {
                        p.x = 0;
                        p.dx *= -1;
                    } else if (p.x + currentSize >= width) {
                        p.x = width - currentSize;
                        p.dx *= -1;
                    }

                    if (p.y <= 0) {
                        p.y = 0;
                        p.dy *= -1;
                    } else if (p.y + currentSize >= height) {
                        p.y = height - currentSize;
                        p.dy *= -1;
                    }

                    ctx.save();
                    ctx.translate(p.x + currentSize / 2, p.y + currentSize / 2);
                    ctx.rotate(p.angle);
                    ctx.drawImage(p.img, -currentSize / 2, -currentSize / 2, currentSize, currentSize);
                    ctx.restore();
                });
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('pointerdown', handleInteraction);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="w-full aspect-[2/1] relative overflow-hidden bg-transparent rounded-2xl mx-auto">
            <canvas
                ref={canvasRef}
                className="w-full h-full block cursor-pointer"
            />

            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            <div className="absolute left-0 right-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-background to-transparent pointer-events-none" />
            <div className="absolute left-0 right-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
    );
}