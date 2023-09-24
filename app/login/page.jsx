"use client";
import Offer from "@/components/Offer";
import { auth } from "../firebase/firebase";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./../firebase/firebase";
import { doc, getDoc } from "@firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const { updateLoginTime } = useAuth();

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    })
  }

  



const handleLogin = async(e) => {
  try{
    e.preventDefault();
    setIsLoading(true);

    const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password)

  
    const user = userCredential.user;
    console.log("User logged in successfully", user);

    const userDataRef = doc(db, "users", user.uid);
    const userDataSnap = await getDoc(userDataRef);

    if (userDataSnap.exists()) {
      const userData = userDataSnap.data();
      // console.log("User data from Firestore", userData);
      alert("User logged in successfully");
      e.target.reset();
      // update(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      updateLoginTime();
      setIsLoading(false)
    router.push("/dashboard")

     
    } else {
      alert("User data not found");
    }

   


  }
  catch(error){
    console.log(error)
  }
 
}

  return (
   
    <section className="w-[100%] md:bg-[#EDEDED] md:py-24" >
      <motion.article
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-[30px] bg-white w-[100%] md:w-[95%] md:m-auto md:bg-[#EDEDED]"
      >
        <form
         onSubmit={handleLogin}
          className="w-[100%] rounded-3xl md:w-[80%] md:m-auto px-4 justify-center items-center md:bg-[#fff] md:mb-20  md:px-40 py-5"
        >
          <h2 className=" font-poppins font-bold text-[24px] md:text-[32px] md:mt-6 text-center">
            Login
          </h2>

          <div className="flex flex-col gap-[8px] mt-4 md:mt-8">
            <input
              type="text"
              placeholder="Email Address"
              className="border border-[#DDDDDD] font-poppins p-4  w-[100%]"
              name = 'email'
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-[8px] mt-6 md:mt-8">
            <input
              type="password"
              placeholder=" Password"
              className="border border-[#DDDDDD] font-poppins p-4  w-[100%]"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-[8px] mt-6 md:mt-8">
            <a className="text-[#551A8B] cursor-pointer">Forgot password?</a>
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
                  Login
                </p>
              )}
            </button>
          </div>

          <div className="flex gap-[8px] mt-6 md:mt-8">
            <p>Not registered?</p>
            <a className="text-[#551A8B] cursor-pointer" href="/signup">Create Account</a>
          </div>
        </form>
      </motion.article>
      <Offer/>
    </section>
    
  );
};

export default Login;
