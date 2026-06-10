'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Camera, X, Aperture, SwitchCamera } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Gallary() {
    const [capturedImage, setCapturedImage] = useState(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [facingMode, setFacingMode] = useState('environment');
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    const startCamera = async (mode = facingMode) => {
        setIsCameraOpen(true);

        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: mode }
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            streamRef.current = stream;
        } catch (err) {
            setIsCameraOpen(false);
            alert("Please allow camera permissions to take a picture.");
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
        setIsCameraOpen(false);
    };

    const toggleCamera = () => {
        const newMode = facingMode === 'environment' ? 'user' : 'environment';
        setFacingMode(newMode);
        startCamera(newMode);
    };

    const takePhoto = () => {
        const video = videoRef.current;
        if (video) {
            const canvas = document.createElement('canvas');

            const size = Math.min(video.videoWidth, video.videoHeight);
            canvas.width = size;
            canvas.height = size;

            const sx = (video.videoWidth - size) / 2;
            const sy = (video.videoHeight - size) / 2;

            const ctx = canvas.getContext('2d');

            if (facingMode === 'user') {
                ctx.translate(size, 0);
                ctx.scale(-1, 1);
            }

            ctx.drawImage(video, sx, sy, size, size, 0, 0, size, size);

            const imageUrl = canvas.toDataURL('image/jpeg', 0.9);
            setCapturedImage(imageUrl);
            stopCamera();
        }
    };

    useEffect(() => {
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    return (
        <div className="w-full mt-8 overflow-hidden flex justify-center">
            <div className='relative w-full min-w-[600px] max-w-[1620px]'>
                <Image
                    src='/gallary.png'
                    alt='gallary'
                    width={1620}
                    height={1080}
                    className='w-full h-auto pointer-events-none select-none'
                />

                {capturedImage ? (
                    <Image
                        src={capturedImage}
                        alt='captured-image'
                        width={720}
                        height={720}
                        className='absolute w-[18%] aspect-square top-[24%] left-[44%] rotate-[5.63deg] object-cover cursor-pointer'
                        onClick={() => startCamera(facingMode)}
                    />
                ) : (
                    <div
                        onClick={() => startCamera(facingMode)}
                        className='absolute w-[18%] aspect-square top-[24%] left-[44%] rotate-[5.63deg] bg-muted/50 hover:bg-muted transition-colors cursor-pointer flex items-center justify-center border-2 border-dashed border-border text-muted-foreground z-10'
                    >
                        <Camera size={36} strokeWidth={1.5} />
                    </div>
                )}

                {isCameraOpen && (
                    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm p-6">
                        <div className="relative w-full max-w-[380px] bg-card p-4 pb-24 shadow-2xl rounded-sm transform border border-border">

                            <div className="relative w-full aspect-square bg-secondary overflow-hidden shadow-inner border border-border">
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    className={`w-full h-full object-cover ${facingMode === 'user' ? 'scale-x-[-1]' : ''}`}
                                />
                            </div>

                            <div className="absolute bottom-5 left-0 w-full flex items-center justify-center gap-6 px-6">
                                <Button
                                    variant="destructive"
                                    size="icon"
                                    onClick={stopCamera}
                                    className="h-12 w-12 rounded-full shadow-sm"
                                >
                                    <X className="h-6 w-6" strokeWidth={2.5} />
                                </Button>

                                <Button
                                    variant="default"
                                    size="icon"
                                    onClick={takePhoto}
                                    className="h-16 w-16 rounded-full shadow-md"
                                >
                                    <Aperture className="h-8 w-8" strokeWidth={2} />
                                </Button>

                                <Button
                                    variant="secondary"
                                    size="icon"
                                    onClick={toggleCamera}
                                    className="h-12 w-12 rounded-full shadow-sm"
                                >
                                    <SwitchCamera className="h-5 w-5" strokeWidth={2.5} />
                                </Button>
                            </div>
                        </div>

                        <p className="mt-4 text-center text-sm text-primary font-medium max-w-sm">
                            Processed locally on your device, not uploaded anywhere.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}