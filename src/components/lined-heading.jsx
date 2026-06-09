import React from 'react';

export default function LinedHeading({ children }) {
    return (
        <div className='flex items-center justify-center gap-3 w-full'>
            <div className='flex-grow h-[2px] bg-[linear-gradient(to_right,currentColor_6px,transparent_6px)] bg-[length:10px_100%] opacity-50 text-muted-foreground' />
            <h1 className='uppercase text-sm text-muted-foreground whitespace-nowrap flex-shrink-0'>{children}</h1>
            <div className='flex-grow h-[2px] bg-[linear-gradient(to_right,currentColor_6px,transparent_6px)] bg-[length:10px_100%] opacity-50 text-muted-foreground' />
        </div>
    )
}