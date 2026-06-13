"use client"

import React, { useEffect, useRef, useState } from "react"
import {
    Play,
    Pause,
    VolumeX,
    Volume2,
    Maximize,
} from "lucide-react"
import MagneticButton from "./magnetic-button"

export default function VideoPlayer({ url }) {
    const videoRef = useRef(null)
    const playerRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)
        const handleVolumeChange = () => setIsMuted(video.muted)

        video.addEventListener("play", handlePlay)
        video.addEventListener("pause", handlePause)
        video.addEventListener("volumechange", handleVolumeChange)

        return () => {
            video.removeEventListener("play", handlePlay)
            video.removeEventListener("pause", handlePause)
            video.removeEventListener("volumechange", handleVolumeChange)
        }
    }, [])

    const togglePlay = async () => {
        const video = videoRef.current
        if (!video) return

        try {
            if (video.paused) {
                await video.play()
            } else {
                video.pause()
            }
        } catch (err) {
            console.error(err)
        }
    }

    const toggleMute = () => {
        const video = videoRef.current
        if (!video) return

        video.muted = !video.muted
        setIsMuted(video.muted)
    }

    const toggleFullscreen = async () => {
        try {
            if (!document.fullscreenElement) {
                await playerRef.current?.requestFullscreen()
            } else {
                await document.exitFullscreen()
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="w-full max-w-2xl bg-card rounded-2xl md:rounded-[2.5rem] p-2 md:p-4 shadow-sm border flex flex-col gap-2 md:gap-4">
            <div
                ref={playerRef}
                className="w-full aspect-video bg-muted rounded-xl md:rounded-[2rem] overflow-hidden relative group"
            >
                <video
                    ref={videoRef}
                    src={url}
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    preload="metadata"
                    onClick={togglePlay}
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                        className={`transition-all duration-300 pointer-events-auto ${isPlaying
                            ? "opacity-0 scale-90"
                            : "opacity-100 scale-100"
                            }`}
                    >
                        <MagneticButton
                            onClick={togglePlay}
                            className="
                                p-4 md:p-6
                                rounded-full
                                bg-transparent
                                backdrop-blur-sm
                                border
                                border-white/10
                                shadow-[0_8px_32px_rgba(0,0,0,0.35)]
                                ring-1
                                ring-white/5
                            "
                            style={{
                                boxShadow: "inset 0px 7px 32px rgb(255 255 255)"
                            }}
                        >
                            {isPlaying ? (
                                <Pause className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
                            ) : (
                                <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-white" />
                            )}
                        </MagneticButton>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between px-1 pb-1 md:px-2 md:pb-2">
                <div className="flex items-center gap-2 md:gap-4">
                    <MagneticButton
                        onClick={togglePlay}
                        className="px-3 py-3 md:px-4 md:py-4"
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5 text-foreground fill-foreground" />
                        ) : (
                            <Play className="w-5 h-5 text-foreground fill-foreground translate-x-0.5" />
                        )}
                    </MagneticButton>

                    <MagneticButton onClick={toggleMute} className="px-3 py-3 md:px-5 md:py-4">
                        {isMuted ? (
                            <VolumeX className="w-5 h-5 text-foreground" />
                        ) : (
                            <Volume2 className="w-5 h-5 text-foreground" />
                        )}

                        <span className="hidden md:inline">
                            {isMuted ? "Unmute" : "Mute"}
                        </span>
                    </MagneticButton>
                </div>

                <MagneticButton onClick={toggleFullscreen} className="px-3 py-3 md:px-5 md:py-4">
                    <Maximize className="w-5 h-5 text-foreground" />
                    <span className="hidden md:inline">Full Screen</span>
                </MagneticButton>
            </div>
        </div>
    )
}