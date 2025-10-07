import React from 'react'
import Hello from '../assets/imgA/Hello.png'
import Profile from '../assets/imgA/Profile.png'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function MyPageA() {
  return (
    <>
      <div style={{ fontFamily: 'Monomaniac One' }} className='w-full h-lvh flex flex-col bg-black'>
        {/* ส่วนที่ 1: Navbar */}
        <div className="w-10/12 mx-auto flex mt-10 items-center">
          <div className="flex-1 flex gap-10 text-2xl">
            <a href="#" className='text-white'>Porfolio</a>
            <a href="#" className='text-white'>About</a>
            <a href="#" className='text-white'>Get In Touch</a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={Hello} alt="Hello" className="w-20" />
          </div>
          <div className="flex-1 text-white flex gap-5 justify-end text-2xl">
            <FaGithub />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        {/* ส่วนที่ 2: ข้อความ */}
        <div className='flex justify-center items-center h-[70vh]'>
          <div className='text-center flex flex-col items-center gap-6'>
            <div className='text-5xl md:text-3xl text-white tracking-wider' style={{ fontFamily: 'Monomaniac One' }}>
              Somrak Sudyodjing
            

            
              <p className="text-[#01D5A2] text-lg md:text-3xl font-medium">Freelance Web Developer</p>
              <p className='text-5xl md:text-3xl text-white tracking-wider'>Based In THAILAND</p>
            </div>

            {/* profile circle with teal ring */}
            <div className='mt-4'>
              <div className='rounded-full p-1 bg-gradient-to-br from-transparent to-transparent' style={{ boxShadow: '0 0 0 4px rgba(0,0,0,0.45), 0 8px 30px rgba(0,255,200,0.06)' }}>
                <div className='rounded-full p-1 bg-black' style={{ boxShadow: '0 0 0 3px rgba(1, 213, 162, 1), inset 0 0 18px rgba(0,255,200,0.06)' }}>
                  <img src={Profile} alt='Profile' className='w-48 h-48 md:w-56 md:h-56 rounded-full object-cover' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
