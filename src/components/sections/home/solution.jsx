import React from 'react';
import LinedHeading from '@/components/lined-heading';
import Gallary from '@/components/gallary';

export default function About() {
    return (
        <div className='mt-18 text-[18px] md:text-[22px] max-w-165 leading-8 md:leading-10 w-full'>
            <LinedHeading>What's the solution?</LinedHeading>

            <p className='mt-8'>
                To solve this we built Otter Labs, a team of (not lazy) otters shipping your idea to the world.
            </p>

            <Gallary />
        </div>
    );
}