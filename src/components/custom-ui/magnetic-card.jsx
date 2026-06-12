'use client'
import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useIsMobile } from '@/hooks/use-is-mobile'

export default function MagneticCard({ children, className, ...props }) {
    const wrapperRef = useRef(null)
    const cardRef = useRef(null)
    const contentRef = useRef(null)
    const isMobile = useIsMobile()

    const position = useRef({
        targetCard: { x: 0, y: 0 },
        targetContent: { x: 0, y: 0 },
        currentCard: { x: 0, y: 0 },
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

            const magneticArea = 100
            const maxMove = 6
            const maxContentMove = 12
            const contentMultiplier = 1.5

            if (distanceToEdge < magneticArea) {
                const ratio = 1 - distanceToEdge / magneticArea

                let cardMoveX = distX * ratio
                let cardMoveY = distY * ratio
                const cardMagnitude = Math.sqrt(cardMoveX * cardMoveX + cardMoveY * cardMoveY)

                if (cardMagnitude > maxMove) {
                    const scale = maxMove / cardMagnitude
                    cardMoveX *= scale
                    cardMoveY *= scale
                }

                let contentMoveX = distX * ratio * contentMultiplier
                let contentMoveY = distY * ratio * contentMultiplier
                const contentMagnitude = Math.sqrt(contentMoveX * contentMoveX + contentMoveY * contentMoveY)

                if (contentMagnitude > maxContentMove) {
                    const scale = maxContentMove / contentMagnitude
                    contentMoveX *= scale
                    contentMoveY *= scale
                }

                position.current.targetCard = { x: cardMoveX, y: cardMoveY }
                position.current.targetContent = { x: contentMoveX, y: contentMoveY }
            } else {
                position.current.targetCard = { x: 0, y: 0 }
                position.current.targetContent = { x: 0, y: 0 }
            }
        }

        const handleMouseLeave = () => {
            position.current.targetCard = { x: 0, y: 0 }
            position.current.targetContent = { x: 0, y: 0 }
        }

        const lerp = (current, target, factor) => {
            const diff = target - current;
            if (Math.abs(diff) < 0.01) return target;
            return current + diff * factor;
        }

        const render = () => {
            const lerpFactor = 0.15

            position.current.currentCard.x = lerp(position.current.currentCard.x, position.current.targetCard.x, lerpFactor)
            position.current.currentCard.y = lerp(position.current.currentCard.y, position.current.targetCard.y, lerpFactor)

            position.current.currentContent.x = lerp(position.current.currentContent.x, position.current.targetContent.x, lerpFactor)
            position.current.currentContent.y = lerp(position.current.currentContent.y, position.current.targetContent.y, lerpFactor)

            if (cardRef.current && contentRef.current) {
                cardRef.current.style.transform = `translate(${position.current.currentCard.x}px, ${position.current.currentCard.y}px)`
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

            if (cardRef.current && contentRef.current) {
                cardRef.current.style.transform = 'translate(0px, 0px)'
                contentRef.current.style.transform = 'translate(0px, 0px)'
            }
        }
    }, [isMobile])

    return (
        <div ref={wrapperRef} className="inline-block overflow-visible">
            <div
                ref={cardRef}
                className={className}
                {...props}
            >
                <div ref={contentRef} className="w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}
