"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  return (
    <nav className='w-[100%] fixed bg-transparent flex flex-row items-center justify-between pr-[2rem] bg-white h-[75px] z-20'>
        <Link href="/" className=''>
           <Image src="/DIGIlogo.svg" width={50} height={50} className='w-[100%] h-[120px]' alt='logo'/>
        </Link>
        <article className='hidden md:flex flex-row gap-[2rem]'>
            <Link href="#" className='text-black font-poppins'>Services</Link>
            <Link href="#" className='text-black font-poppins'>Blog</Link>
            <Link href="#" className='text-black font-poppins'>About</Link>
        </article>
        <article className='hidden md:flex flex-row gap-[2rem]'>
            <motion.button 
            whileHover={{scale:1.1}}
            className='w-[100px] rounded-2xl bg-[#2faf3a] px-3 py-2'>
                <p className='text-white font-poppins'>Login</p>
            </motion.button>
            <motion.button 
            whileHover={{scale:1.1}}
            className='w-[100px] rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>Signup</p>
            </motion.button>
        </article>
        <article className='md:hidden'>
            <Image src="/hamburger.png" width={500} height={100} className='w-[100%] h-[45px]' alt='hamburger'/>
        </article>
    </nav>
  )
}

export default NavBar