import React from 'react';
import { cn } from '@/lib/utils';

export default function LinedHeading({ children, className }) {
    const squigglyMask = {
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 12 6'%3E%3Cpath d='M0 3 Q 3 0, 6 3 T 12 3' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
        WebkitMaskRepeat: 'repeat-x',
        maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='6' viewBox='0 0 12 6'%3E%3Cpath d='M0 3 Q 3 0, 6 3 T 12 3' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
        maskRepeat: 'repeat-x',
    };

    return (
        <div className={cn('flex items-center justify-center gap-3 w-full', className)}>
            <div className='grow h-1.5 bg-muted-foreground opacity-50' style={squigglyMask} />
            <h1 className='uppercase text-sm text-muted-foreground whitespace-nowrap shrink-0'>
                {children}
            </h1>
            <div className='grow h-1.5 bg-muted-foreground opacity-50' style={squigglyMask} />
        </div>
    )
}