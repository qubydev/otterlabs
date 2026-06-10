import React from 'react'
import Hero from '@/components/sections/home/hero'
import Problem from '@/components/sections/home/problem'
import Solution from '@/components/sections/home/solution'
import Pricing from '@/components/sections/home/pricing'
import Love from '@/components/sections/home/love'
import Footer from '@/components/sections/home/footer'

export default function Home() {
  return (
    <>
      <div className='pt-24 px-4 flex flex-col items-center justify-center'>
        <Hero />
        <Problem />
        <Solution />
        <Pricing />
        <Love />
      </div>
      <Footer />
    </>
  )
}