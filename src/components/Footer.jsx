import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white '>
        <div>
          <h1 className='w-full text-3xl font-bold text-black'>Fintech Lending Application</h1>
          <p className='py-4'>
            Revolutionizing the way you borrow.
          </p>
          <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 ml-[45%]'>
          <div>
            <h6 className='font-medium text-black'>All rights reserved 2023</h6>
            <h6 className='font-medium text-black'>Crafted By Davinder Pandey</h6>
          </div>
        
        </div>
    </div>
  )
}

export default Footer
