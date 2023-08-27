"use client"
import services from '@/constants/services'
import React from 'react'
import Image from 'next/image';

const Services = () => {
    
  return (
    <section className='w-[100%] px-[30px] mt-[100px] flex flex-col gap-[2rem]'>
        <h2 className=' font-bold text-[30px] text-center md:text-[40px] font-poppins lg:text-[54px]'>Here’s What We Can Do For You</h2>
        <article className='grid grid-cols-1 md:grid-cols-2 flex-wrap justify-center items-center gap-[2rem] lg:gap-[4rem]'>
            {services.map((items, index) => (
                <div key={index}>
                    <Image src={items.img} width={500} height={100} className=' rounded-xl w-[100%]'/>
                </div>
            ))}
        </article>
    </section>
  )
}

export default Services