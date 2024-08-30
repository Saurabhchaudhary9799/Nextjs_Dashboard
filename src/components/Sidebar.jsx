import React from 'react'
import { MdComputer } from "react-icons/md";
import { TbIcons } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import Link from 'next/link';
const Sidebar = () => {
  return (
    <section className="sidebar-section">
         <h1 className='text-center text-4xl font-extrabold py-3'>Dashboard</h1>
         <div className="sidebar-items py-10">
             <ul className="sidebar-list px-10 text-xl text-[#212229]">
                <li className="sidebar-list-item flex  items-center gap-x-5  py-4  hover:text-gray-500">
                     <span className='text-[#5e72e4]'><MdComputer/></span> <Link href="/">Dashboard</Link>
                </li>
                <li className="sidebar-list-item flex  items-center gap-x-5  py-4  hover:text-gray-500">
                <span className='text-[#5e72e4]'><TbIcons/></span> <Link href="/icons">Icons</Link>
                </li>
                <li className="sidebar-list-item flex  items-center gap-x-5  py-4  hover:text-gray-500">
                <span className='text-[#fb6340]'><IoLocationSharp/></span> <Link href="/maps">Maps</Link>
                </li>
                <li className="sidebar-list-item flex  items-center gap-x-5  py-4  hover:text-gray-500">
                <span className='text-[#ffd600]'><FaUser/></span> <Link href="/profile">User Profile</Link>
                </li>
                <li className="sidebar-list-item flex  items-center gap-x-5  py-4  hover:text-gray-500">
                <span className='text-[#f5365c]'><FaTableList/></span><Link href="/tables">Tables</Link>
                </li>
             </ul>
         </div>
    </section>
  )
}

export default Sidebar