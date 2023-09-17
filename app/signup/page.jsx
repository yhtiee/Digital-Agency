
"use client"
import { motion } from 'framer-motion'
import React from 'react'


const Signup = () => {
return(
  <section className='w-[100%] md:bg-[#EDEDED] md:h-[97vh] md:pt-4'>
        <motion.article 
        initial={{x:-200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:0.8}}
        className='px-[30px] bg-white w-[100%] md:w-[95%] md:m-auto md:bg-[#EDEDED]'>
            <form action="" className='w-[100%] md:h-[87vh] rounded-3xl md:w-[80%] md:m-auto px-4 justify-center items-center md:bg-[#fff]  md:px-40 py-5'>
            <h2 className=' font-poppins font-bold text-[24px] md:text-[32px] md:mt-6 text-center'>Create Account</h2>

              <div className='flex flex-col gap-[8px] mt-4 md:mt-8 pt-2'>
                <input type="text" placeholder='Last name' className='border border-[#DDDDDD] font-poppins p-4 w-[100%]'/>
              </div>

              <div className='flex flex-col gap-[8px] mt-4 md:mt-8'>
                <input type="text" placeholder='First name' className='border border-[#DDDDDD] font-poppins p-4  w-[100%]'/>
              </div>

              <div className='flex flex-col gap-[8px] mt-4 md:mt-8'>
                <input type="text" placeholder='Username' className='border border-[#DDDDDD] font-poppins p-4  w-[100%]'/>
              </div>

              <div className='flex flex-col gap-[8px] mt-4 md:mt-8'>
                <input type="email" placeholder='Email address' className='border border-[#DDDDDD] font-poppins p-4  w-[100%]'/>
              </div>
          
              <div className='flex flex-col gap-[8px] mt-4 md:mt-8'>
                <input type="password" placeholder='Create password' className='border border-[#DDDDDD] font-poppins p-4  w-[100%]'/>
              </div>

              <div className='w-[100%] flex justify-center items-center mt-6 lg:mt-8'>
                <button className='rounded-xl w-[100%] md:w-[100%] md bg-[#3faf3a] px-3 py-4 md:py-3 md:text-[20px] hover:bg-[#EDEDED] hover:border hover:border-[#3faf3a] hover:text-[#3faf3a] cursor-pointer '>
                  <p className='text-white font-poppins hover:text-[#3faf3a]'>Create Account</p>
                </button>
              </div>

            <div className="flex  gap-[8px] mt-6 md:mt-6 md:text-[16px]">
            <p className=''>Already registered?</p>
            <a className="text-[#551A8B] cursor-pointer" href='/login'>login</a>
          </div>
            </form>
        </motion.article>
       
    </section>
  )
}

export default Signup