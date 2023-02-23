import React from 'react'

const Rooms = () => {
  return (
    <div className='bg-blue-100 max-w-[1400px] h-[500px] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        {/* Text */}
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Find Where You Stay</h3>
            <p className='pt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloremque voluptatibus fuga? Rem ipsum debitis libero vero ducimus necessitatibus odio aperiam culpa eum. In cum sit laboriosam vero porro repellendus?</p>
        </div>

        {/* Image grid */}
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full row-span-2' src="https://images.pexels.com/photos/1103808/pexels-photo-1103808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            <img className='object-cover w-full h-full' src="https://images.pexels.com/photos/3209049/pexels-photo-3209049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
    </div>
  )
}

export default Rooms