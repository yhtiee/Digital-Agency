"use client"
import { motion } from 'framer-motion'
import React from 'react'


const HomepageHeader = () => {
  return (
    <section className='homepage-header h-[100vh] w-[100%] flex justify-center items-center'>
        <motion.article 
        initial={{y:-50, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8}}
        className='flex flex-col gap-[2rem]'>
          <div>
            <h1 className='header-text text-center font-poppins font-bold text-[42px] md:text-[64px]'>We're Thrilled You Found Us!</h1>
            <p className='text-center font-poppins font-bold text-[24px] text-white'>Now that you are here, let's turn your online goals into achievements.</p>
          </div>
          <div className='w-[100%] flex justify-center items-center gap-[1.5rem]'>
            <motion.button 
            whileHover={{scale:1.1}}
            className='rounded-2xl bg-[#2faf3a] px-3 py-2'>
              <p className='text-white font-poppins font-medium text-[18px]'>Get Started</p>
            </motion.button>
            <motion.button 
            whileHover={{scale:1.1}}
            className='rounded-2xl border bg-transparent px-3 py-2'>
              <p className='text-white font-poppins font-medium text-[18px]'>Learn More</p>
            </motion.button>
          </div>
        </motion.article>
    </section>
  )
}

export default HomepageHeader