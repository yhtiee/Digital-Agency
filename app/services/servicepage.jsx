'use client';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Pricing from './pricing';



const Servicespage = ({ miniservice }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState([]);
  const [whyWeCare, setWhyWeCare] = useState([]);
  const [howWeDoIt, setHowWeDoIt] = useState([]);

  useEffect(() => {
    console.log(miniservice.miniservice[1]);
    setName(miniservice.miniservice[3].name);
    setDescription(miniservice.miniservice[0].description);
    setWhyWeCare(miniservice.miniservice[1].why);
    setHowWeDoIt(miniservice.miniservice[2].how);
  }, []);

  const why = ["Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.",
  'Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.',
  'Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.',
  'Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.',
  'Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.',
  'Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.',
  ]

  const how = ["Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.",
  'Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.',
  'Lorem ipsum dolor sit amet conse.Rhoncus nunc in commodo in. Nec ultrices adipiscing vitae aliquam sagittis. Eu porttitor quis sed turpis at sed. Ac.'
  ]
  
  return (
<section className="w-[100%] md:bg-[#EDEDED] py-10 md:mb-10">
      <motion.article
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-[2rem]"
      >
        <article className="w-[85%] m-auto bg-white rounded-2xl">
          <div className="services p-2 rounded-xl flex flex-col md:flex-row">
            <div className='md:p-8 md:ml-8 text-center md:text-start pt-2'>
              <p className='text-[#149FDA] text-2xl font-medium pt-4 font-poppins'>We are digital wakka</p>
              <p className='text-white md:pt-8 md:text-[40px] text-3xl pt-4 font-poppins'>{name}</p>
              <p className='text-white md:pt-8 md:w-[51%] font-light text-[15px] pt-4 font-poppins'>{description}</p>
              <button className='font-poppins bg-[#3faf3a] text-white md:mt-10 p-4 px-8 mt-6 mb-6 md:px-12 hover:bg-white hover:text-[#3faf3a] hover:ease-in hover:duration-500'>Get started</button>
            </div>

            <Image
                  src="/images/serviceImg.svg"
                  width={750}
                  height={100}
                  alt="image showing things about our company"
                  className=' md:pt-24 pt-4 md:pr-2'

                />
          </div>

          <h2 className='text-center text-3xl font-poppins pt-6 md:pt-16 pb-4'>Why do we care?</h2>

          <article className=""> 
            <ul className='pl-4 flex flex-col md:flex md:flex-row md:px-6 md:flex-wrap'>
              {whyWeCare.map((item, index) => (
                <li key={index} className='md:w-1/3 font-poppins text-[15px] text-[#707070] pt-4 md:px-6 md:pt-8'>
                  <p className='font-poppins md:text-center text-2xl md:text-4xl text-black italic'>0{index +1}.</p>
                  <p className='font-poppins md:text-start md:pt-4 md:leading-[2rem] text-[14px]'>{item}</p>
                </li>
              ))}
            </ul>  
          </article>
          <h2 className='text-center text-3xl font-poppins pt-6 md:pt-16'>How we do it.</h2>
          <article className="">
          <ul className='pl-4 flex flex-col md:flex md:flex-row md:px-6 md:flex-wrap'>
              {howWeDoIt.map((item, index) => (
                <li key={index} className='md:w-1/3 font-poppins text-[15px] text-[#707070] pt-4 md:px-6 md:pt-8'>
                  <p className='font-poppins md:text-center text-2xl md:text-4xl text-black italic'>0{index +1}.</p>
                  <p className='font-poppins md:text-start md:pt-4 md:leading-[2rem] text-[14px]'>{item}</p>
                </li>
              ))}
            </ul>
          </article>

          <h2 className='text-center text-3xl font-poppins pt-6 md:pt-16 pb-4'>Pricing.</h2>

          <article className='flex flex-col md:flex md:flex-row md:px-16 md:justify-between md:items-center pt-6' >
                <Pricing>
                  <div style={{backgroundColor:"rgba(243, 243, 243, 0.9)"}} className='p-4 rounded-xl'>
                  <p className='text-3xl text-center font-poppins'>Basic plan</p>  
                  <p className='italic text-2xl text-center pt-3'>$49 <sub>/month</sub></p>
                  </div>
                
                </Pricing>

               <Pricing>
                <div style={{backgroundColor:"rgba(243, 243, 243, 0.9)"}} className='p-4 rounded-xl'>
                <p className='text-3xl text-center font-poppins'>Standard plan</p>  
                <p className='italic text-2xl text-center pt-3'>$100 <sub>/month</sub></p>
                </div>
             
               </Pricing>

                <Pricing>
                  <div style={{backgroundColor:"rgba(243, 243, 243, 0.9)"}} className='p-4 rounded-xl'>
                  <p className='text-3xl text-center font-poppins'>Premium plan</p>
                 <p className='italic text-2xl text-center pt-3'>$149 <sub>/month</sub></p>
                  </div>
               
                </Pricing>
          </article>
        </article>
      </motion.article>
    </section>
  )
}

export default Servicespage