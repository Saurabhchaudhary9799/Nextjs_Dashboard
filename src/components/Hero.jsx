import React from 'react'
import profile_image from "../../public/profile.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
     <section className="hero-section relative">
         <div>
            <Image src={profile_image} alt="image"  height={600}  className="w-full h-[700px] object-cover"/>
         </div>
         <div className='absolute top-0 left-0 w-full h-full bg-hero-gradient z-10 opacity-75 flex items-center  sm:pl-10'>
            <div className='text-white flex flex-col gap-y-5 justify-start  w-[700px] pl-5'> 
    <h1 className='text-5xl font-bold'>Hello Jesse</h1>
    <p className='text-xl'>This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
    <div className='border p-3 bg-[#11cdef] border border-[#11cdef] w-[150px] text-xl rounded-xl font-bold text-center'>Edit Profile</div>
    </div>
         </div>
     </section>
  )
}

export default Hero