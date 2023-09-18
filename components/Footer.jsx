"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {

  const socials = [
    "/facebook.png", "/gram.png", "/linkedin.png", "/x.png"
  ]

  return (
    <section className='w-[100%] flex flex-col md:flex-row mt-[100px] overflow-hidden'>
        <motion.article 
        initial={{x:-200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.8}}
        className='px-[30px] bg-white w-[100%] md:w-[60%] py-[20px]'>
          <h2 className=' font-poppins font-bold text-[24px] md:text-[32px]'>Contact Us</h2>
            <form action="" className='border w-[100%] border-[#159EDD] rounded-xl p-4 grid grid-cols-1 gap-[24px] justify-center items-center'>
              <div className='flex flex-col gap-[8px]'>
                <label className='font-poppins'>First Name</label>
                <input type="text" className='border border-[#159EDD] font-poppins rounded-lg p-2 w-[100%]' placeholder='Enter Your First Name'/>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <label className=' font-poppins'>Last Name</label>
                <input type="text" className='border border-[#159EDD] font-poppins rounded-lg p-2 w-[100%]' placeholder='Enter Your Last Name'/>
              </div>
              <div className='flex flex-col gap-[8px]'>
              <label className=' font-poppins'>Email</label>
                <input type="email" className='border border-[#159EDD] font-poppins rounded-lg p-2 w-[100%]' placeholder='Enter Your Mail'/>
              </div>
              <div className='flex flex-col gap-[8px]'>
                <label className=' font-poppins'>Message</label>
                <textarea type="text" className="w-[100%] h-[210px] resize-none pl-4 pr-[140px] pt-3 pb-[177px] bg-white rounded-lg border border-[#159EDD] justify-start items-center inline-flex font-poppins text-black" placeholder='Enter Message'/>
              </div>
              <div className='w-[100%] flex justify-center items-center'>
                <button className='rounded-2xl w-[80%] border border-[#159EDD] bg-[#159EDD] px-3 py-2'>
                  <p className='text-white font-poppins'>Submit</p>
                </button>
              </div>
            </form>
        </motion.article>
        <motion.article 
        initial={{x:200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.8}}
        className='px-[30px] bg-[#000000] w-[100%] md:w-[40%] flex flex-col justify-center items-center gap-[64px] py-[30px] md:pyy-[0px]'>
            <div className='flex flex-col gap-[1.5rem]'>
              <Link className=' text-white font-poppins font-semibold text-center' href="#">
                Support & FAQs
              </Link>
              <Link className=' text-white font-poppins font-semibold text-center' href="#">
                Email
              </Link>
              <Link className=' text-white font-poppins font-semibold text-center' href="#">
                Phone Number 1
              </Link>
              <Link className=' text-white font-poppins font-semibold text-center' href="#">
                Phone Number 1
              </Link>
              <Link className=' text-white font-poppins font-semibold text-center' href="#">
                Nigeria
              </Link>
            </div>
            <div className='flex flex-row gap-[1rem]'>
              {socials.map((items, index) => (
                <Link key={index} href="#">
                  <Image src={items} width={500} height={100} className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]'/>
                </Link>
              ))}
            </div>
            <div className='flex flex-col gap-[1rem]'>
              <p className=' font-poppins font-medium text-white text-center'>© 2012 - 2023 DigitalWakaa. All Rights Reserved.</p>
              <p className=' font-poppins font-medium text-white text-center'>Our Privacy and Cookie Policies and Terms</p>
            </div>
        </motion.article>
    </section>
  )
}

export default Footer