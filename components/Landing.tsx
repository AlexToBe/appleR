import React from 'react'
import Image from 'next/image'
import Button from './Button'
const Landing = () => {
  return (
    <section className=' sticky top-0 mx-auto z-29 flex h-screen max-w-[1350px] items-center justify-between px-8 bg-gray-100'>
        <div className=' space-y-8' >
            <h1 className='space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl'>
                <span className=' block bg-gradient-to-r  from-pink-500 to-violet-500  bg-clip-text   text-transparent '>powered ss</span>
                <span className=' block bg-gradient-to-r  from-pink-500 to-violet-500  bg-clip-text text-transparent '>By Intellet</span>
                <span className=' block bg-gradient-to-r  from-pink-500 to-violet-500  bg-clip-text text-transparent '>Driven by values</span>
               
              </h1>
            <div className=' space-x-8 '>
                <Button title='Buy Now'/> ß
                <a className='link'>learn more</a>
            </div>
        </div>
          
        <div className='relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[650px]'>
            <Image src='/usedimg/iphone.png' fill = {true}  alt = '' style ={{objectFit:'contain'}}  />
        </div>
    </section>
  )
}

export default Landing
