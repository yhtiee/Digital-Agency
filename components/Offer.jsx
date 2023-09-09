"use client"
import React from 'react'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import offers from '@/constants/offers';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Offer = () => {

  return (
    <section className='w-[100%] px-[30px] mt-[100px]'>
        <motion.h2 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
        className=' font-bold text-[30px] mb-[1rem] text-center md:text-[40px] lg:text-[54px] font-poppins'>We Don't Mean To Brag But</motion.h2>
        <motion.article
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.8}} 
        >
        <Swiper 
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                425: {
                    slidesPerView: 1,
                },
                640: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 4,
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true}}>
            {offers.map((items, index) => (
                <SwiperSlide key={index}>
                    <article className=' rounded-md bg-[#f5f5f5] p-4 flex flex-col justify-center items-center gap-[0.5rem] h-[300px]'>
                        <motion.div 
                        animate={{y:[0, -10, 0]}}
                        transition={{duration:2, repeat:Infinity}}
                        >
                        <Image src={items.img} width={500} height={100} className='w-[50px] h-[50px]'/>
                        </motion.div>
                        <h3 className=' font-bold font-poppins'>{items.title}</h3>
                        <p className=' text-center font-poppins'>{items.desc}</p>
                    </article>
                </SwiperSlide>
            ))}
        </Swiper>
        </motion.article>
    </section>
  )
}

export default Offer