import React from 'react'
import Hero from '@/components/sections/home/hero'
import About from '@/components/sections/home/about'

export default function Home() {
  return (
    <div className='py-24 px-4 flex flex-col items-center justify-center'>
      <Hero />
      <About />
    </div>
  )
}