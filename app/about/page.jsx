"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-[100%] md:bg-[#EDEDED] py-10 ">
      <motion.article
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-[2rem]"
      >
        <article className="w-[85%] m-auto bg-white rounded-2xl">
          <div className="about h-[40vh] rounded-xl flex flex-col justify-center items-center">
            <h2 className="header-text text-center font-poppins font-bold text-[45px] md:text-[84px] ">
              About us
            </h2>
            <p className="text-center font-poppins font-bold text-[20px] md:text-[35px] text-white">
              We provide one of the best services around
            </p>
          </div>

          <article className="flex flex-col px-3 md:flex md:flex-row md:px-12 md:justify-between">
            
              <div className="md:w-[45%] md:pt-8">
                <h2 className="pt-6 font-poppins text-3xl ">
                  About our company
                </h2>
                <p className="pt-4 md:leading-8">
                  We are a team of marketing experts, helping businesses and
                  individuals thrive in the digital landscape. With our
                  extensive experience and innovative strategies, we deliver
                  outstanding results that drive growth and make a lasting
                  impact.Our team of skilled professionals brings expertise in
                  various digital marketing disciplines, including search engine
                  optimization (SEO), pay-per-click (PPC) advertising, social
                  media marketing, content creation, and more.
                </p>
              </div>

              <div className="pt-4 md:w-[40%]">
                <Image
                  src="/images/aboutOne.jpg"
                  width={380}
                  height={100}
                  alt="image showing things about our company"
                />
              </div>
           
          </article>

          <article className="flex flex-col px-3 md:flex md:flex-row-reverse md:justify-between ">
           
            <div className=" md:w-[45%] md:pr-20">
              <h2 className="pt-6 font-poppins text-3xl">What have we done?</h2>
              <p className="pt-4 md:leading-8">
                Over the years, we have helped numerous businesses across
                different industries achieve remarkable results and unlock their
                full potential. From small startups to established enterprises,
                we have a proven ability to drive traffic, increase conversions,
                and boost revenue.Beyond the numbers, we also build good
                relationships with our clients. Your success is our success, and
                we are genuinely invested in seeing your business thrive.
              </p>
            </div>
            <div className="pt-4 md:w-[45%] md:flex md:items-end md:justify-end">
              <Image
                src="/images/aboutTwo.jpg"
                width={380}
                height={100}
                alt="image showing things about our company"
              />
            </div>
            
           
          </article>
        </article>
      </motion.article>
    </section>
  );
};

export default About;
