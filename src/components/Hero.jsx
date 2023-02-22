import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
        {/* Background Image */}
        <img
            className='top-0 left-0 w-full h-screen object-cover'
            src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg" 
            alt="/"
        />
        {/* Overlay */}
        <div className='bg-black/40 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Wonderful Indonesia</h1>
                <p className='max-w-[660px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum est, eos aspernatur officia expedita. Pariatur, magni atque aliquam corporis quibusdam labore laboriosam fugiat, expedita eius recusandae dolorem facilis asperiores!</p>
                <button className='bg-white text-black font-bold'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero