import React from 'react'
import PhotoB from '../assets/imgB/PhotoB.png'
import { FaLinkedin, FaBehance, FaTwitter, FaDropbox } from 'react-icons/fa'
import { SiClickup, SiPaychex } from 'react-icons/si'
import { TbBrandElastic } from 'react-icons/tb'
import { FaStripe } from 'react-icons/fa6'

export default function MyPageB() {
  return (
    <div className='w-full min-h-screen bg-black text-white font-mono flex flex-col items-center'>
      {/* top navigation bar (centered rounded bar) */}
      <div className='w-full flex justify-center pt-6'>
        <nav className='bg-[#171717] text-gray-400 rounded-xl px-6 py-3 max-w-[1200px] w-full shadow-sm'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-30 text-sm text-gray-400'>
              <a href='#' className='hover:text-white transition-colors duration-200'>Home</a>
              <a href='#' className='hover:text-white transition-colors duration-200'>Case Studies</a>
              <a href='#' className='hover:text-white transition-colors duration-200'>Testimonials</a>
              <a href='#' className='hover:text-white transition-colors duration-200'>Recent work</a>
              <a href='#' className='hover:text-white transition-colors duration-200'>Get In Touch</a>
            </div>


            <div className='flex items-center gap-4 text-gray-400  '>
              <FaLinkedin size={28} />
              <FaBehance size={28} />
              <FaTwitter size={28} />
            </div>
          </div>
        </nav>
      </div>

      {/* main content: centered vertically */}
      <main className='flex-1 w-full flex items-center justify-center px-6'>
        <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          {/* left: text block */}
          <div className='order-2 md:order-1'>
            {/* START: Added MY CAPABILITIES / MY EXPERIENCE here */}
            
            {/* END: Added MY CAPABILITIES / MY EXPERIENCE here */}

            <h2 className='text-5xl md:text-6xl font-extrabold mb-6' style={{ fontFamily: 'Monomaniac One, system-ui', letterSpacing: '-0.5px' }}>Sombat Jaideemak</h2>
            <p className='text-sm md:text-base text-gray-400 mb-8 max-w-lg leading-relaxed text-gray-400' style={{ opacity: 0.9 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima autem adipisci earum rem odio libero aut labore laborum odit maxime quidem facere deserunt, explicabo obcaecati blanditiis nulla, rerum eveniet inventore.
            </p>

            <button
              className='transition-all text-black font-semibold px-8 py-4 rounded'
              style={{
                background: 'linear-gradient(180deg,#34b027,#22a20b)',
                boxShadow: '0 18px 40px rgba(34,162,11,0.25), 0 0 60px rgba(34,162,11,0.18)'
              }}
            >
              Let's get started ▸
            </button>
          </div>

          {/* right: circular photo */}
          <div className='flex justify-center md:justify-end order-1 md:order-2'>
            <div className='w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden relative translate-y-[-12px]'>
              <div className='absolute inset-0 rounded-full' style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }} />
              <div className='relative rounded-full p-1 m-4' style={{ background: 'transparent', boxShadow: '0 0 0 8px rgba(0,0,0,0.45), 0 14px 40px rgba(0,200,160,0.07)' }}>
                <div className='rounded-full p-1' style={{ border: '6px solid rgba(255,255,255,0.02)', boxShadow: '0 6px 30px rgba(0,200,150,0.06)'}}>
                  <img src={PhotoB} alt='photo' className='w-full h-full object-cover rounded-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* worked with footer at bottom */}
      <footer className='w-full py-10'>
        <div className='max-w-[1200px] mx-auto px-6'>
          <p className='text-xs text-gray-400 mb-4' style={{ opacity: 0.9 }}>Worked with</p>
          <div className='grid grid-cols-1 sm:grid-cols-5 gap-6'>
            {[
              { name: 'ClickUp', Icon: SiClickup, iconOnly: false },
              { name: 'Dropbox', Icon: FaDropbox, iconOnly: false },
              { name: 'Paychex', Icon: SiPaychex, iconOnly: true },
              { name: 'elastic', Icon: TbBrandElastic, iconOnly: false },
              { name: 'stripe', Icon: FaStripe, iconOnly: true }
            ].map(({ name, Icon, iconOnly }) => {
                const boxClass = 'bg-transparent border border-[#222] text-gray-400 rounded-md px-8 py-6 flex items-center justify-center gap-4 min-h-[80px]'
                const iconOnlyClass = 'w-12 h-12 md:w-14 md:h-14 text-gray-300'
                const normalIconClass = 'w-7 h-7 text-gray-300'
              return (
                <div key={name} className={boxClass}>
                  {iconOnly ? (
                    <Icon className={iconOnlyClass} style={{ opacity: 0.32 }} />
                  ) : (
                    <div className='flex items-center gap-3'>
                      <Icon className={normalIconClass} style={{ opacity: 0.32 }} />
                        <span className='text-base text-gray-300' style={{ opacity: 0.35 }}>{name}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}