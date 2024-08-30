import React from 'react'
import { FaChartBar } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaPercentage } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Stats = () => {
  return (
    <section className="stats bg-custom-gradient py-10 h-[1000px] md:h-[1100px] lg:h-[700px] xl:h-[600px] flex justify-center   items-center ">
        <div className="container  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 mx-2 sm:mx-10  ">
             <div className='bg-white py-10 rounded-xl flex flex-col gap-y-5 px-3'>
                <div className='flex justify-between items-center gap-x-5  '>
                    <div className='text-lg'><h1 className='text-gray-500'>TRAFFIC</h1>
                    <span className='text-3xl font-bold'>350,897</span>
                    </div>
                    <div className='bg-[#f5365c] text-white text-2xl p-4 rounded-[50%]'>
                        <span><FaChartBar/></span>
                    </div>
                </div>
                <div className='flex  items-center   text-lg gap-x-2 text-gray-500'>
                    <span className='text-[#2dce89] flex items-center'><FaArrowUp/> 3.48%</span> Since last month
                </div>
             </div>
             <div className='bg-white py-10 rounded-xl flex flex-col gap-y-5 px-3'>
                <div className='flex justify-between items-center gap-x-5  '>
                    <div className='text-lg'><h1 className='text-gray-500'>NEW USERS</h1>
                    <span className='text-3xl font-bold'>2,356</span>
                    </div>
                    <div className='bg-[#f5365c] text-white text-2xl p-4 rounded-[50%]'>
                        <span><FaChartPie/></span>
                    </div>
                </div>
                <div className='flex  items-center   text-lg gap-x-2 text-gray-500'>
                    <span className='text-[#2dce89] flex items-center'><FaArrowDown/> 3.48%</span> Since last week
                </div>
             </div>
             <div className='bg-white py-10 rounded-xl flex flex-col gap-y-5 px-3'>
                <div className='flex justify-between items-center gap-x-5  '>
                    <div className='text-lg'><h1 className='text-gray-500'>SALES</h1>
                    <span className='text-3xl font-bold'>924</span>
                    </div>
                    <div className='bg-[#ffd600] text-white text-2xl p-4 rounded-[50%]'>
                        <span><FaUsers/></span>
                    </div>
                </div>
                <div className='flex  items-center   text-lg gap-x-2 text-gray-500'>
                    <span className='text-[#2dce89] flex items-center'><FaArrowDown/> 1.10%</span> Since yesterday
                </div>
             </div>
             <div className='bg-white py-10 rounded-xl flex flex-col gap-y-5 px-3'>
                <div className='flex justify-between items-center gap-x-5  '>
                    <div className='text-lg'><h1 className='text-gray-500'>PERFORMANCE</h1>
                    <span className='text-3xl font-bold'>46.95%</span>
                    </div>
                    <div className='bg-[#11cdef] text-white text-2xl p-4 rounded-[50%]'>
                        <span><FaPercentage/></span>
                    </div>
                </div>
                <div className='flex  items-center   text-lg gap-x-2 text-gray-500'>
                    <span className='text-[#2dce89] flex items-center'><FaArrowUp/> 12%</span> Since last month
                </div>
             </div>
        </div>
    </section>
  )
}

export default Stats