"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
//   const links = [
//     {
//       name: "Services",
//       links: "#",
//     },
//     {
//       name: "Blog",
//       links: "#",
//     },

//     {
//       name: "About",
//       links: "/about",
//     },
//   ];
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className='w-[100%] sticky top-0 z-50  bg-transparent flex flex-row items-center justify-between pr-[2rem] bg-whitesmoke h-[75px] navbar'>
        <Link href="/" className=''>
           <Image src="/DIGIlogo.svg" width={50} height={50} className='w-[100%] h-[120px]' alt='logo'/>
        </Link>
        <article className='hidden md:flex flex-row gap-[6rem]'>
            <Link href="#" className='text-black font-poppins'>Services</Link>
            <Link href="#" className='text-black font-poppins'>Blog</Link>
            <Link href="/about" className='text-black font-poppins'>About</Link>
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
            <Image src="/hamburger.png" width={300} height={100} className='w-[100%] h-[45px]' alt='hamburger'/>
        </article>
    </nav>




    // <div className="shadow-md w-full sticky top-0 z-50 pb-12 md:py-0">
    //   <div className="md:px-10 px-7 md:flex justify-between items-center">
    //     <div>
    //       <Link href="/" className="">
    //         <Image src="/DIGIlogo.svg" width={120} height={50} alt="logo" />
    //       </Link>
    //     </div>

    //     <article
    //       className="w-7 h-7 absolute right-8 top-6  md:hidden"
    //       onClick={() => setIsOpen(!isOpen)}
    //     >
    //       {isOpen ? (
    //         <Image
    //           src="/hamburger.png"
    //           width={30}
    //           height={100}
    //           alt="hamburger"
    //         />
    //       ) : (
    //         <button>
    //           <p className="text-3xl text-[#3faf3a]">&#10005;</p>
    //         </button>
    //       )}
    //     </article>

    //     <ul
    //       className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute md:z-auto md:static z-[-1] md:w-auto md:justify-between left-0 w-full transition-all bg-white duration-500 ease-in ${isOpen ? "top-12" : "top-[-490px]"}`}
    //     >
    //       {links.map((link, index) => (
    //             <li key={index} className="my-7 md:my-0 md:ml-12 font-semibold">
    //           <a href={link.links}>{link.name}</a>
    //         </li>
            
    //       ))}

    //       <article className="flex flex-col md:flex md:flex-row gap-[2rem] ">
    //         <motion.button
    //           whileHover={{ scale: 1.1 }}
    //           className="w-[100px] rounded-2xl bg-[#2faf3a] px-3 py-2"
    //         >
    //           <a className="text-white font-poppins " href="/login">
    //             Login
    //           </a>
    //         </motion.button>
    //         <motion.button
    //           whileHover={{ scale: 1.1 }}
    //           className="w-[100px] rounded-2xl border border-[#2faf3a] bg-white px-3 py-2"
    //         >
    //           <a href="/signup" className="text-[#2faf3a] font-poppins">
    //             Signup
    //           </a>
    //         </motion.button>
    //       </article>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default NavBar;
