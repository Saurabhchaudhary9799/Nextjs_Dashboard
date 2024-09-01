import React from 'react'

const Footer = () => {
  return (
    <section className="footer-section flex justify-between  px-10 py-10 text-gray-500 text-xl">
        <div>
            @ 2024 <span className='text-sky-500'>Creative Team</span>
        </div>
        <div>
            <ul className='flex gap-5 justify-center items-center'>
                 <li className='hover:text-black'>Creative Tim</li>
                 <li className='hover:text-black'>About Us</li>
                 <li className='hover:text-black'>Blog</li>
                 <li className='hover:text-black'>MIT Licence</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer