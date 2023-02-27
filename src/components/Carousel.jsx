import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1606143704849-eb181ba1543a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVuZGFuZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            title: 'Rendang',
        },
        {
            url: 'https://images.pexels.com/photos/14272918/pexels-photo-14272918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Ayam Geprek',
        },
        {
            url: 'https://images.unsplash.com/photo-1645696301019-35adcc18fc21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80',
            title: 'Sate',
        },
        {
            url: 'https://images.unsplash.com/photo-1647093953000-9065ed6f85ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            title: 'Nasi Goreng',
        },
        {
            url: 'https://i.pinimg.com/originals/a0/de/a2/a0dea2f9020994adf833887ca9194296.jpg',
            title: 'Bakso',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const nextImage = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (imageIndex) => {
        setCurrentIndex(imageIndex);
    };

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 lg:px-32 relative group'>
        {/* Backgound Images */}
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${images[currentIndex].url})`}}></div>
        
        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer'>
            <BsChevronCompactLeft size={25} onClick={prevImage}/>
        </div>
        
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/40 text-white cursor-pointer'>
            <BsChevronCompactRight size={25} onClick={nextImage}/>
        </div>

        {/* Bullet icons */}
        <div className='flex top-4 justify-center py-2'>
            {images.map((image, imageIndex) => (
                <div className='text-2xl cursor-pointer' key={imageIndex} onClick={() => goToSlide(imageIndex)}>
                    <RxDotFilled/>
                </div>                
            ))}
        </div>
    </div>
  )
}

export default Carousel