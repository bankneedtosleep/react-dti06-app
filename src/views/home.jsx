import React from 'react'
import img1 from '../assets/imgH/img1.png'
import img2 from '../assets/imgH/img2.png'
import webprofile02 from '../assets/imgH/webprofile02.png'
import webprofile03 from '../assets/imgH/webprofile03.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div style={{ fontFamily: 'Roboto Mono' }} className='min-h-screen bg-[#91FFB2] flex flex-col justify-between'>
      
      {/* ส่วนบน */}
      <div className='max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row justify-between gap-10'>
        {/* คอลัมน์ซ้าย */}
        <div className='flex flex-col flex-1'>
          <h1 className='text-3xl font-bold text-[#333333]'>My Web Design by</h1>
          <h2 className='text-3xl font-bold text-[#333333] mb-6'>React + TailwindCSS</h2>
          
          <p className='text-[#333333] mb-6 leading-relaxed'>
            Lorem ipsum dolor sit amet. <br />
            consectetur adipisicing elit. <br />
            Cursus imperdiet sed id elementum. <br />
            Quam vel aliquam sit vulputate.
          </p>

          <a
            href="#"
            className='inline-block bg-[#333333] text-white rounded-full px-8 py-4 hover:bg-[#888888] transition mb-6 w-fit'
          >
            Follow Me
          </a>

          <div className='flex gap-4'>
            <Link to="/MyPageA">
            <img src={img1} alt="img1" className='w-82 h-min mr-5' />
            </Link>
            <Link to="/MyPageB">
            <img src={webprofile02} alt="webprofile02" className='w-89 h-min' />
            </Link>
            
          </div>
        </div>

        {/* คอลัมน์กลาง */}
        <div className='flex justify-center items-start'>
          <Link to="/MyPageC">
          <img src={webprofile03} alt="webprofile03" className='w-59 h-min ml-7' />
          </Link>
        </div>

        {/* คอลัมน์ขวา */}
        <div className='flex justify-center items-start '>
          <Link to ="/MyPageD">
          <img src={img2} alt="img2" className='w-36 h-min' />
          </Link>
        </div>
      </div>

      {/* ส่วนล่าง */}
      <div className='flex flex-col justify-center items-center text-lg'>
        <p>(รูปและเนื้อหาทั้งหมดใช้เพื่อการศึกษาเท่านั้น)</p>
        <p>Created by bankneedtolseep</p>
        <p>Copyright ©2025 Wow Wow Wow</p>
      </div>
    </div>
  )
}
