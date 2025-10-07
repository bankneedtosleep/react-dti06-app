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
        <div className='flex justify-center items-center h-[60vh]'>
          <div className="border-4 border-yellow-400 px-10 py-6 text-center rounded-md">
            <h1 className='text-4xl text-white mb-4'>
              Somrak Sudyodjing
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
