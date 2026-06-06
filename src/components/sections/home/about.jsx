import React from 'react'

export default function About() {
    return (
        <div className='mt-18 text-[18px] md:text-[22px] max-w-165 leading-8 md:leading-10'>
            <p>
                We know, It always starts the same way. <br />
                You’re out for a quiet walk, or maybe you’re just staring at the ceiling at 2 AM.<br />
                Suddenly, it hits you... <span className='italic font-black'>The Idea.</span><br />
                The one you absolutely have to build.
            </p>

            <p className='mt-8'>
                So you dive right in...
            </p>

            <p className='mt-8'>
                You start binge-watching tutorials.<br />
                You try to figure out how to verify the concept.<br />
                You look into hiring developers, then realize you also need a marketing guy.<br />
                Interviewing, context-switching, second-guessing everything...
            </p>

            <p className='mt-8'>
                Eventually, the friction becomes too much. The excitement drains away... and you just quit.
            </p>
        </div>
    )
}