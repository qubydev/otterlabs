'use client'

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function FancyButton({ children, className, ...props }) {
    const buttonRef = useRef(null)
    const contentRef = useRef(null)
    const mousePos = useRef({ x: 0, y: 0 })
    const targetTransform = useRef({ buttonX: 0, buttonY: 0, contentX: 0, contentY: 0 })
    const currentTransform = useRef({ buttonX: 0, buttonY: 0, contentX: 0, contentY: 0 })
    const animationFrameId = useRef(null)

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
        const button = buttonRef.current
        const content = contentRef.current
        if (!button || !content) return

        const smoothness = 0.15 // Lower = smoother but slower

        currentTransform.current.buttonX = lerp(
            currentTransform.current.buttonX,
            targetTransform.current.buttonX,
            smoothness
        )
        currentTransform.current.buttonY = lerp(
            currentTransform.current.buttonY,
            targetTransform.current.buttonY,
            smoothness
        )
        currentTransform.current.contentX = lerp(
            currentTransform.current.contentX,
            targetTransform.current.contentX,
            smoothness
        )
        currentTransform.current.contentY = lerp(
            currentTransform.current.contentY,
            targetTransform.current.contentY,
            smoothness
        )

        button.style.transform = `translate(${currentTransform.current.buttonX}px, ${currentTransform.current.buttonY}px)`
        content.style.transform = `translate(${currentTransform.current.contentX}px, ${currentTransform.current.contentY}px)`

        animationFrameId.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!buttonRef.current) return

            const button = buttonRef.current
            const rect = button.getBoundingClientRect()
            const buttonCenterX = rect.left + rect.width / 2
            const buttonCenterY = rect.top + rect.height / 2

            const mouseX = e.clientX
            const mouseY = e.clientY

            const distX = mouseX - buttonCenterX
            const distY = mouseY - buttonCenterY
            const distance = Math.sqrt(distX * distX + distY * distY)

            const maxDistance = 150
            const maxTransform = 8
            const maxContentTransform = 12

            if (distance < maxDistance) {
                const ratio = 1 - distance / maxDistance
                targetTransform.current.buttonX = (distX / distance) * maxTransform * ratio
                targetTransform.current.buttonY = (distY / distance) * maxTransform * ratio
                targetTransform.current.contentX = (distX / distance) * maxContentTransform * ratio
                targetTransform.current.contentY = (distY / distance) * maxContentTransform * ratio
            } else {
                targetTransform.current = { buttonX: 0, buttonY: 0, contentX: 0, contentY: 0 }
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        animationFrameId.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [])

    return (
        <button
            ref={buttonRef}
            className={cn("bg-card px-5 py-4 rounded-full shadow-btn cursor-pointer", className)}
            {...props}
        >
            <span
                ref={contentRef}
                style={{
                    display: 'inline-block'
                }}
            >
                {children}
            </span>
        </button>
    )
}