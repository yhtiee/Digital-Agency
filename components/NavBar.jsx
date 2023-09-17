"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  return (
    <nav className='w-[100%] sticky top-0 z-50  bg-transparent flex flex-row items-center justify-between pr-[2rem] bg-whitesmoke h-[75px] navbar'>
        <Link href="/" className=''>
           <Image src="/DIGIlogo.svg" width={50} height={50} className='w-[100%] h-[120px]' alt='logo'/>
        </Link>
        <article className='hidden md:flex flex-row gap-[6rem]'>
            <Link href="#" className='text-black font-poppins'>Services</Link>
            <Link href="#" className='text-black font-poppins'>Blog</Link>
            <Link href="#" className='text-black font-poppins'>About</Link>
        </article>
        <article className='hidden md:flex flex-row gap-[2rem]'>
            <motion.button 
            whileHover={{scale:1.1}}
            className='w-[100px] rounded-2xl bg-[#2faf3a] px-3 py-2'>
                <a className='text-white font-poppins' href='/login'>Login</a>
            </motion.button>
            <motion.button 
            whileHover={{scale:1.1}}
            className='w-[100px] rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
               <a href='/signup' className='text-[#2faf3a] font-poppins'>Signup</a>
            </motion.button>
        </article>
        <article className='md:hidden'>
            <Image src="/hamburger.png" width={500} height={100} className='w-[100%] h-[45px]' alt='hamburger'/>
        </article>
    </nav>
  )
}

export default NavBar