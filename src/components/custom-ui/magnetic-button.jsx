'use client'
import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-is-mobile'

export default function MagneticButton({ children, className, ...props }) {
    const wrapperRef = useRef(null)
    const buttonRef = useRef(null)
    const contentRef = useRef(null)
    const isMobile = useIsMobile()

    const position = useRef({
        targetButton: { x: 0, y: 0 },
        targetContent: { x: 0, y: 0 },
        currentButton: { x: 0, y: 0 },
        currentContent: { x: 0, y: 0 }
    })

    useEffect(() => {
        if (isMobile) return;

        let rafId;

        const handleMouseMove = (e) => {
            if (!wrapperRef.current) return

            const rect = wrapperRef.current.getBoundingClientRect()

            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const halfWidth = rect.width / 2
            const halfHeight = rect.height / 2

            const distX = e.clientX - centerX
            const distY = e.clientY - centerY

            const absX = Math.abs(distX)
            const absY = Math.abs(distY)
            const distXToEdge = Math.max(0, absX - halfWidth)
            const distYToEdge = Math.max(0, absY - halfHeight)
            const distanceToEdge = Math.sqrt(distXToEdge * distXToEdge + distYToEdge * distYToEdge)

            const magneticArea = 50
            const maxMove = 5
            const maxContentMove = 8
            const contentMultiplier = 1.5

            if (distanceToEdge < magneticArea) {
                const ratio = 1 - distanceToEdge / magneticArea

                let buttonMoveX = distX * ratio
                let buttonMoveY = distY * ratio
                const buttonMagnitude = Math.sqrt(buttonMoveX * buttonMoveX + buttonMoveY * buttonMoveY)

                if (buttonMagnitude > maxMove) {
                    const scale = maxMove / buttonMagnitude
                    buttonMoveX *= scale
                    buttonMoveY *= scale
                }

                let contentMoveX = distX * ratio * contentMultiplier
                let contentMoveY = distY * ratio * contentMultiplier
                const contentMagnitude = Math.sqrt(contentMoveX * contentMoveX + contentMoveY * contentMoveY)

                if (contentMagnitude > maxContentMove) {
                    const scale = maxContentMove / contentMagnitude
                    contentMoveX *= scale
                    contentMoveY *= scale
                }

                position.current.targetButton = { x: buttonMoveX, y: buttonMoveY }
                position.current.targetContent = { x: contentMoveX, y: contentMoveY }
            } else {
                position.current.targetButton = { x: 0, y: 0 }
                position.current.targetContent = { x: 0, y: 0 }
            }
        }

        const handleMouseLeave = () => {
            position.current.targetButton = { x: 0, y: 0 }
            position.current.targetContent = { x: 0, y: 0 }
        }

        const lerp = (current, target, factor) => {
            const diff = target - current;
            if (Math.abs(diff) < 0.01) return target;
            return current + diff * factor;
        }

        const render = () => {
            const lerpFactor = 0.15

            position.current.currentButton.x = lerp(position.current.currentButton.x, position.current.targetButton.x, lerpFactor)
            position.current.currentButton.y = lerp(position.current.currentButton.y, position.current.targetButton.y, lerpFactor)

            position.current.currentContent.x = lerp(position.current.currentContent.x, position.current.targetContent.x, lerpFactor)
            position.current.currentContent.y = lerp(position.current.currentContent.y, position.current.targetContent.y, lerpFactor)

            if (buttonRef.current && contentRef.current) {
                buttonRef.current.style.transform = `translate(${position.current.currentButton.x}px, ${position.current.currentButton.y}px)`
                contentRef.current.style.transform = `translate(${position.current.currentContent.x}px, ${position.current.currentContent.y}px)`
            }

            rafId = requestAnimationFrame(render)
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.documentElement.addEventListener('mouseleave', handleMouseLeave)
        render()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
            cancelAnimationFrame(rafId)

            if (buttonRef.current && contentRef.current) {
                buttonRef.current.style.transform = 'translate(0px, 0px)'
                contentRef.current.style.transform = 'translate(0px, 0px)'
            }
        }
    }, [isMobile])

    return (
        <div ref={wrapperRef} className="inline-flex">
            <button
                ref={buttonRef}
                className={cn(
                    'inline-flex items-center justify-center bg-card px-4 py-3 md:px-5 md:py-4 text-sm md:text-base rounded-full cursor-pointer shadow-btn',
                    className
                )}
                {...props}
            >
                <span
                    ref={contentRef}
                    className="inline-flex items-center justify-center w-full h-full whitespace-nowrap gap-2"
                >
                    {children}
                </span>
            </button>
        </div>
    )
}