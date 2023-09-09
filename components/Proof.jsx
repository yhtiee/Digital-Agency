"use client"
import React from 'react'
import SeoSample from './SeoSample'
import { motion } from 'framer-motion'


const Proof = () => {
  return (
    <section className='w-[100%]  mt-[100px] flex flex-col gap-[1rem]'>
        <div className='w-[100%] px-[30px] flex justify-center items-center'>
           <motion.h2 
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.8}}
           className=' font-bold text-[30px] text-center md:text-[40px] lg:text-[54px] font-poppins lg:w-[80%]'>Don't Just Take Our Word For It,  Here’s Proof</motion.h2>
        </div>
        <motion.article 
        initial={{y:-100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8}}
        className='w-[100%] flex flex-row flex-wrap gap-[1rem] px-[30px]'>
            <motion.button 
            whileHover={{scale:1.1}}
            className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>seo & ppc</p>
            </motion.button>
            <motion.button 
            whileHover={{scale:1.1}}
            className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>content development</p>
            </motion.button>
            <motion.button 
            whileHover={{scale:1.1}}
            className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>web development</p>
            </motion.button>
            <motion.button 
            whileHover={{scale:1.1}}
            className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>graphics design</p>
            </motion.button>
        </motion.article>
        <motion.article 
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8}}
        className='px-[30px] bg-[#2faf3a] w-[100%] py-[4rem]'>
            <SeoSample/>
        </motion.article>
    </section>
  )
}

export default Proof