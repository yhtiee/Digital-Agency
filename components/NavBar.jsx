"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Serviceitems from "@/constants/Serviceitems";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lastLoginTime } = useAuth()
  const [userData, setUserData] = useState(null);
  const router =  useRouter()

  useEffect(() => {
    
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [lastLoginTime]);

  const handleSignOut = () => {
    try {
      
      localStorage.removeItem('userData');
      router.push("/")
      setUserData(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
 

  return (
  
    <nav className="w-[100%] sticky top-0 z-50 bg-transparent flex flex-row items-center justify-between pr-[2rem] bg-whitesmoke h-[75px] navbar">
      <Link href="/" className="">
        <Image
          src="/DIGIlogo.svg"
          width={50}
          height={50}
          className="w-[100%] h-[120px]"
          alt="logo"
        />
      </Link>
      <article className="hidden md:flex flex-row gap-[6rem]">
        <Link
          href="#"
          className="text-black font-poppins"
          onMouseEnter={() => setIsOpen(true)}
        >
          Services
        </Link>
        <Link
          href="http://blog.digitalwakaa.com/"
          className="text-black font-poppins"
        >
          Blog
        </Link>
        <Link href="/about" className="text-black font-poppins">
          About
        </Link>
        {userData && <Link href="/dashboard">Dashboard</Link>}
      </article>
      <article className="hidden md:flex flex-row gap-[2rem]">
        {userData? (
          <div className="md:flex  items-center gap-4"  >
            <p className="">Welcome, {userData.lastName}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-[100px] cursor-pointer rounded-2xl bg-[#2faf3a] px-3 py-2"
              onClick={handleSignOut}
            >
              <a className="text-white font-poppins">Sign out</a>
            </motion.button>
          </div>
        ) : (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-[100px] rounded-2xl bg-[#2faf3a] px-3 py-2"
            >
              <a className="text-white font-poppins" href="/login">
                Login
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-[100px] rounded-2xl border border-[#2faf3a] bg-white px-3 py-2"
            >
              <a href="/signup" className="text-[#2faf3a] font-poppins">
                Signup
              </a>
            </motion.button>
          </>
        )}
      </article>
      <article className="md:hidden">
        <Image
          src="/hamburger.png"
          width={300}
          height={100}
          className="w-[100%] h-[45px]"
          alt="hamburger"
        />
      </article>

      {isOpen && (
        <article
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className={`hidden absolute left-[15%] top-[75px] bg-[#000] text-white md:flex justify-between items-center w-[65%] p-4 px-16 py-8`}
        >
          <div>
            <p className="pb-4">LINK BUILDING</p>

            <ul className="">
              {Serviceitems.link.map((item, index) => (
                <li key={index} className="pb-2">
                  <Link href="#" className="text-[13px] hover:text-[#3faf3a]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="pb-4">DIGITAL PR</p>
            <ul className="">
              {Serviceitems.digital.map((item, index) => (
                <li key={index} className="pb-2">
                  <Link href="#" className="text-[13px]  hover:text-[#3faf3a]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="pb-4">SEO</p>

            <ul className="">
              {Serviceitems.seo.map((item, index) => (
                <li key={index} className="pb-2">
                  <Link href="#" className="text-[13px]  hover:text-[#3faf3a]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="pb-4">CONTENT WRITING</p>

            <ul className="">
              {Serviceitems.content.map((item, index) => (
                <li key={index} className="pb-2">
                  <Link href="#" className="text-[13px]  hover:text-[#3faf3a]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="pb-4">DESIGN & VIDEO</p>

            <ul className="">
              {Serviceitems.video.map((item, index) => (
                <li key={index} className="pb-2">
                  <Link href="#" className="text-[13px]  hover:text-[#3faf3a]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </article>
      )}
    </nav>
  
  );
};

export default NavBar;
