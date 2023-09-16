
"use client"
import { motion } from 'framer-motion'
import React from 'react'


const Login = () => {
return(
  <section className='w-[100%] '>
        <motion.article 
        initial={{x:-200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.8}}
        className='px-[30px] bg-white w-[100%] md:w-[95%] md:m-auto'>
            <form action="" className='w-[100%] rounded-xl px-4 justify-center items-center lg:bg-[#EDEDED] lg:px-40 py-5 lg:h-[93vh]'>
            <h2 className=' font-poppins font-bold text-[24px] md:text-[32px] text-center'>Create Account</h2>

              <div className='flex flex-col gap-[8px] mt-2 lg:mt-8 pt-2'>
                <label className='font-poppins'>Last name</label>
                <input type="text" className='border border-[#000] font-poppins rounded-lg p-2  w-[100%]'/>
              </div>

              <div className='flex flex-col gap-[8px] mt-2 lg:mt-8'>
                <label className=' font-poppins'>First Name</label>
                <input type="text" className='border border-[#000] font-poppins rounded-lg p-2  w-[100%]'/>
              </div>

              <div className='flex flex-col gap-[8px] mt-2 lg:mt-8'>
                <label className=' font-poppins'>Username</label>
                <input type="text" className='border border-[#000] font-poppins rounded-lg p-2  w-[100%]'/>
              </div>

              <div className='flex flex-col gap-[8px] mt-2 lg:mt-8'>
              <label className=' font-poppins'>Email Address</label>
                <input type="email" className='border border-[#000] font-poppins rounded-lg p-2  w-[100%]'/>
              </div>
          
              <div className='flex flex-col gap-[8px] mt-2 lg:mt-8'>
                <label className=' font-poppins'>Password</label>
                <input type="password" className='border border-[#000] font-poppins rounded-lg p-2  w-[100%]'/>
              </div>

              <div className='w-[100%] flex justify-center items-center mt-6 lg:mt-8'>
                <button className='rounded-3xl w-[80%]  bg-[#3faf3a] px-3 py-2 lg:py-3 lg:text-[20px] hover:bg-[#3faf5a]'>
                  <p className='text-white font-poppins'>Create Account</p>
                </button>
              </div>
            </form>
        </motion.article>
       
    </section>
  )
}

export default Login