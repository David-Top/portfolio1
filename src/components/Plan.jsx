import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1440px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* left side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='object-cover w-full h-full p-2 row-span-3' src="https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full p-2 row-span-2' src="https://images.pexels.com/photos/2499777/pexels-photo-2499777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full p-2 row-span-2' src="https://images.pexels.com/photos/1555581/pexels-photo-1555581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full p-2 row-span-3' src="https://images.pexels.com/photos/837745/pexels-photo-837745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full p-2 row-span-2' src="https://images.pexels.com/photos/161293/prambanan-temple-java-hinduism-161293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>

        {/* right side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, labore.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, maiores? Totam doloremque aliquam molestiae sapiente quas cumque consectetur, labore, ex expedita earum et inventore, obcaecati id perspiciatis quidem quisquam itaque!</p>
            <div>
                <button className='border-black mr-6 hover:shadow-xl'>Learn More</button>
                <button className='border-black bg-black text-white hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan