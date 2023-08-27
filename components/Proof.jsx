import React from 'react'
import SeoSample from './SeoSample'

const Proof = () => {
  return (
    <section className='w-[100%]  mt-[100px] flex flex-col gap-[1rem]'>
        <div className='w-[100%] px-[30px] flex justify-center items-center'>
           <h2 className=' font-bold text-[30px] text-center md:text-[40px] lg:text-[54px] font-poppins lg:w-[80%]'>Don't Just Take Our Word For It,  Here’s Proof</h2>
        </div>
        <article className='w-[100%] flex flex-row flex-wrap gap-[1rem] px-[30px]'>
            <button className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>seo & ppc</p>
            </button>
            <button className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>content development</p>
            </button>
            <button className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>web development</p>
            </button>
            <button className='rounded-2xl border border-[#2faf3a] bg-white px-3 py-2'>
                <p className='text-[#2faf3a] font-poppins'>graphics design</p>
            </button>
        </article>
        <article className='px-[30px] bg-[#2faf3a] w-[100%] py-[4rem]'>
            <SeoSample/>
        </article>
    </section>
  )
}

export default Proof