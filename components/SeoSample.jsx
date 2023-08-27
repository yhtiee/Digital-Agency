"use client"
import React from 'react'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import offers from '@/constants/offers';
import Image from 'next/image';

const SeoSample = () => {

  return (
    <section className='w-[100%]'>
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
                    <article className=' rounded-md bg-white p-4 flex flex-col justify-center items-center gap-[0.5rem] h-[200px]'>
                    </article>
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  )
}

export default SeoSample