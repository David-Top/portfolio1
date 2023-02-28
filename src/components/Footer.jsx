import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-300 w-full mt-24 px-2 py-2'>
      <div className='max-w-[1400px] grid grid-cols-2 md:grid-cols-6 mx-auto border-b-2 border-gray-600 py-8 px-4'>
        {/* Solutions */}
        <div>
          <h6 className='font-bold uppercase pt-2'>Solutions</h6>
          <ul className='list-footer'>
            <li>Travel</li>
            <li>Booking</li>
            <li>Fights</li>
            <li>Cruises</li>
            <li>Ground</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className='font-bold uppercase pt-2'>Support</h6>
          <ul className='list-footer'>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Tours</li>
            <li>Refunds</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className='font-bold uppercase pt-2'>Company</h6>
          <ul className='list-footer'>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className='font-bold uppercase pt-2'>Legal</h6>
          <ul className='list-footer'>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletter</p>
          <p className='py-4'>The latest deals, articles, and resources, sent to your inbox weekly.</p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 mb-4 rounded-md' type="email" placeholder='Enter your email...'/>
            <button className='mb-4 p-2 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>
      
      {/* copyright and icons */}
      <div className='flex flex-col sm:flex-row justify-between max-w-[1400px] px-2 py-4 text-center text-gray-500'>
        <p className='py-4'>© 2022 D-Top. All Right Reserved</p>
        
        {/* icons */}
        <div className='flex justify-between sm:w-[300px] text-2xl cursor-pointer pt-4'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Footer