"use client";
import Offer from "@/components/Offer";
import { motion } from "framer-motion";
import React, { useState,  } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./../firebase/firebase";
import { doc, setDoc } from "@firebase/firestore";
import { useRouter } from "next/navigation";
import {  useAuth } from "../context/AuthContext";

const Signup = () => {
  const [signup, setSignup] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { signOut } = useAuth()

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const users = await createUserWithEmailAndPassword(
        auth,
        signup.email,
        signup.password
      );

      const userData = doc(db, "users", users.user.uid);
      await setDoc(userData, {
        email: signup.email,
        firstName: signup.firstName,
        lastName: signup.lastName,
        username: signup.username,
        password: signup.password,
      });

      alert("Account created successfully");
      
      e.target.reset();
      setIsLoading(false);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
 

   
    <section className="w-[100%] md:bg-[#EDEDED] md:py-6 md:pb-16">
      <motion.article
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-[30px] bg-white w-[100%] md:w-[95%] md:m-auto md:bg-[#EDEDED]"
      >
        <form
          onSubmit={handleSubmit}
          className="w-[100%] rounded-3xl md:w-[80%] md:m-auto px-4 justify-center items-center md:bg-[#fff]  md:px-40 py-5"
        >
          <h2 className=" font-poppins font-bold text-[24px] md:text-[32px] md:mt-6 text-center">
            Create Account
          </h2>

          <div className="flex flex-col gap-[8px] mt-4 md:mt-8 pt-2">
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
              className="border border-[#DDDDDD] font-poppins p-4 w-[100%]"
            />
          </div>

          <div className="flex flex-col gap-[8px] mt-4 md:mt-8">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
              className="border border-[#DDDDDD] font-poppins p-4  w-[100%]"
            />
          </div>

          <div className="flex flex-col gap-[8px] mt-4 md:mt-8">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="border border-[#DDDDDD] font-poppins p-4  w-[100%]"
            />
          </div>

          <div className="flex flex-col gap-[8px] mt-4 md:mt-8">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleChange}
              className="border border-[#DDDDDD] font-poppins p-4  w-[100%]"
            />
          </div>

          <div className="flex flex-col gap-[8px] mt-4 md:mt-8">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              onChange={handleChange}
              className="border border-[#DDDDDD] font-poppins p-4  w-[100%]"
            />
          </div>

          <div className="w-[100%] flex justify-center items-center mt-6 lg:mt-8">
            <button
              className="rounded-xl w-[100%] md:w-[100%] md bg-[#3faf3a] px-3 py-4 md:py-3
               md:text-[20px] hover:bg-[#EDEDED] hover:border hover:border-[#3faf3a] 
               hover:text-[#3faf3a] cursor-pointer "
              disabled={isLoading} 
            >
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="loader"></div>
                 
                </div>
              ) : (
                <p className="text-white font-poppins hover:text-[#3faf3a]">
                  Create Account
                </p>
              )}
            </button>
          </div>

          <div className="flex  gap-[8px] mt-6 md:mt-6 md:text-[16px]">
            <p className="">Already registered?</p>
            <a className="text-[#551A8B] cursor-pointer" href="/login">
              login
            </a>
          </div>
        </form>
      </motion.article>
      <Offer />
    </section>
  
  );
};

export default Signup;
