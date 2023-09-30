import React from 'react'

const Pricing = ({children}) => {
  return (
   
<article className='flex flex-col md:w-[28%] '>
<div className='shadow-2xl rounded-2xl'>
   {children}
    <div className='pt-2 pl-4 pb-2 leading-[3rem] '>
    <p className='font-poppins'><span className='text-[#3faf3a] pr-4'> &#10003; </span>Benefits you'll get </p>
   <p className='font-poppins'><span className='text-[#3faf3a] pr-4'> &#10003; </span>Benefits you'll get </p>
   <p className='font-poppins'><span className='text-[#3faf3a] pr-4'> &#10003; </span>Benefits you'll get </p>
   <p className='font-poppins'><span className='text-[#3faf3a] pr-4'> &#10003; </span>Benefits you'll get </p>
   <p className='font-poppins'><span className='text-[#3faf3a] pr-4'> &#10003; </span>Benefits you'll get </p>
   <p className='font-poppins'><span className='text-[#3faf3a] pr-4'> &#10003; </span>Benefits you'll get </p>
   <p className='font-poppins'><span className='text-[#3faf3a] pr-4'> &#10003; </span>Benefits you'll get </p>
    </div>
   

</div>
<button className='bg-[#3faf3a] p-4 mt-6 mb-10 w-[190px] m-auto hover:bg-white hover:border hover:border-[#3faf3a] hover:text-[#3faf3a] hover:ease-in hover:duration-300'>Choose this plan</button>
</article>

 


   
  )
}

export default Pricing