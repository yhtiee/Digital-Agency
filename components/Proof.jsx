"use client"

import React, { useState } from 'react';
import SeoSample from './SeoSample';
import { motion } from 'framer-motion';

const Proof = () => {
  const [selectedCategory, setSelectedCategory] = useState('SEO & PPC'); 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className='w-[100%] mt-[100px] flex flex-col gap-[1rem]'>
      <div className='w-[100%] px-[30px] flex justify-center items-center'>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className='font-bold text-[30px] text-center md:text-[40px] lg:text-[54px] font-poppins lg:w-[80%]'
        >
          Don't Just Take Our Word For It, Here’s Proof
        </motion.h2>
      </div>
      <motion.article
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='w-[100%] flex flex-row flex-wrap gap-[1rem] px-[30px]'
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => handleCategoryClick('SEO & PPC')}
          className={`rounded-2xl border ${
            selectedCategory === 'SEO & PPC' ? 'border-[#2faf3a]' : 'border-gray-300'
          } bg-white px-3 py-2`}
        >
          <p className={`text-${selectedCategory === 'SEO & PPC' ? '[#2faf3a]' : 'gray-500'} font-poppins`}>
            SEO & PPC
          </p>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => handleCategoryClick('Content Development')}
          className={`rounded-2xl border ${
            selectedCategory === 'Content Development' ? 'border-[#2faf3a]' : 'border-gray-300'
          } bg-white px-3 py-2`}
        >
          <p
            className={`text-${
              selectedCategory === 'Content Development' ? '[#2faf3a]' : 'gray-500'
            } font-poppins`}
          >
            Content Development
          </p>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => handleCategoryClick('Web Development')}
          className={`rounded-2xl border ${
            selectedCategory === 'Web Development' ? 'border-[#2faf3a]' : 'border-gray-300'
          } bg-white px-3 py-2`}
        >
          <p
            className={`text-${
              selectedCategory === 'Web Development' ? '[#2faf3a]' : 'gray-500'
            } font-poppins`}
          >
            Web Development
          </p>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => handleCategoryClick('Graphics Design')}
          className={`rounded-2xl border ${
            selectedCategory === 'Graphics Design' ? 'border-[#2faf3a]' : 'border-gray-300'
          } bg-white px-3 py-2`}
        >
          <p
            className={`text-${
              selectedCategory === 'Graphics Design' ? '[#2faf3a]' : 'gray-500'
            } font-poppins`}
          >
            Graphics Design
          </p>
        </motion.button>
      </motion.article>
      <motion.article
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='px-[30px] bg-[#2faf3a] w-[100%] py-[4rem]'
      >
        <SeoSample category={selectedCategory} />
      </motion.article>
    </section>
  );
};

export default Proof;
