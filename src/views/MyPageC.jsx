import React from "react";
import C1 from "../assets/imgC/imageC1.png";
import C2 from "../assets/imgC/imageC2.png";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

export default function MyPageC() {
  return (
    <div className="w-full min-h-screen bg-[#07124a] text-white font-sans">
      {/* Top Navbar */}
      <div className="w-full bg-[#0b0833]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between py-3">
            <div className="text-2xl font-bold text-white">bankneedtosleep</div>
            <nav className="flex gap-6 text-sm font-bold text-white">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
        <div className="border-t border-[#11122a]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              HI, I AM
              <br />
              bankneedtosleep
            </h1>
            <p className="text-gray-300 max-w-lg mb-6">
              นักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์จากประเทศไทย
              <br />
              ที่มีความหลงใหลในการสร้าง
              เว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button className="relative bg-[#3b6bf0] text-black px-6 pr-10 py-3 rounded-full text-sm font-semibold overflow-visible">
                  CONTACT ME
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-black rounded-full" aria-hidden="true" />
                </button>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-9 h-9 rounded-full bg-[#0f1a44] flex items-center justify-center text-gray-300">
                  <FaLinkedin />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#0f1a44] flex items-center justify-center text-gray-300">
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-start">
            <div className="w-80 md:w-[420px] mt-4 md:mt-6 rounded-2xl overflow-hidden">
              <img src={C2} alt="hero" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <div className="w-full h-[2px] my-12 bg-[#484848]"></div>

        {/* About Section */}
        <section id="about" className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h3
                className="text-4xl md:text-5xl font-extrabold mb-4"
                style={{ letterSpacing: "-1px" }}
              >
                ABOUT ME
              </h3>
            </div>

            <div>
              <p className="text-xl md:text-xl font-extrabold mb-4">
                ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่ทำงานอยู่ในกรุงเทพฯ
                กำลังมองหาโอกาสที่น่าตื่นเต้น
                ในการทำงานมีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
              </p>
              <p className="text-sm text-gray-300 mb-4">
                และชอบเรื่องการเข้าถึง (accessibility)
                ชอบให้ความสำคัญกับการเข้าถึง (accessibility)
                เมื่อต้องพัฒนาเว็บไซต์
                มีความกระตือรือร้นและอยากเรียนรู้เทคโนโลยีใหม่ ๆ เช่น React.js
                และการออกแบบ UX/UI
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button className="relative bg-[#3b6bf0] px-5 pr-10 py-2 rounded-full text-sm overflow-visible">
                    DOWNLOAD RESUME
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-black rounded-full" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0f1a44] flex items-center justify-center text-gray-300">
                    <FaLinkedin />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#0f1a44] flex items-center justify-center text-gray-300">
                    <FaGithub />
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#0f1a44] flex items-center justify-center text-gray-300">
                    <FaXTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden">
            <img src={C1} alt="about" className="w-full h-full object-cover" />
          </div>

          <div className="my-10">
            <div className="border-t border-[#0f1733]" />
          </div>
        </section>
        <div className="w-full h-[2px] my-12 bg-[#484848]"></div>

        {/* Capabilities */}
        <section className="mb-12">
          <h3 className="text-3xl font-extrabold mb-6">MY CAPABILITIES</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "FLUTTER",
              "DART",
              "IoT",
              "REACT",
              "DATABASE",
            ].map((x) => (
              <div
                key={x}
                className="border border-[rgba(255,255,255,0.06)] rounded-full px-4 py-2 text-sm"
              >
                {x}
              </div>
            ))}
          </div>
        </section>
                  <div className="w-full h-[2px] my-12 bg-[#484848]"></div>
        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-3xl font-extrabold mb-6">MY EXPERIENCE</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold">
                Freelance Developer{" "}
                <span className="text-sm text-gray-400">
                  Nov 2023 – Present
                </span>
              </h4>
              <p className="text-sm">
                พัฒนาและปรับปรุงเว็บไซต์สำหรับเว็บแอปพลิเคชันโดยใช้ React.js
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                Front-End Intern{" "}
                <span className="text-sm text-gray-400">
                  Sep 2023 – Nov 2023
                </span>
              </h4>
              <p className="text-sm">
                พัฒนา UI/UX และเพิ่มประสิทธิภาพการเข้าถึงตามมาตรฐาน WCAG
              </p>
            </div>
          </div>
        </section>
        <div className="w-full h-[2px] my-12 bg-[#484848]"></div>

        {/* Contact */}
        <section id="contact" className="mb-10">
          <h3 className="text-3xl font-extrabold mb-6">LET'S CONNECT</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p>Say hello at chanintornc@sau.ac.th</p>
              <div className="flex items-center gap-3 mt-4 text-gray-300">
                <FaLinkedin />
                <FaGithub />
                <FaXTwitter />
              </div>
            </div>

            <form className="space-y-4">
              <input
                className="w-full bg-[#0b1a55] px-3 py-2 rounded"
                placeholder="Name"
              />
              <input
                className="w-full bg-[#0b1a55] px-3 py-2 rounded"
                placeholder="Email"
              />
              <input
                className="w-full bg-[#0b1a55] px-3 py-2 rounded"
                placeholder="Subject"
              />
              <textarea
                className="w-full bg-[#0b1a55] px-3 py-2 rounded h-32"
                placeholder="Message"
              />
              <button className="bg-[#7aa3ff] px-6 py-2 rounded-full">
                SUBMIT
              </button>
            </form>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 py-6">
          © 2025 Created by SAU-Dev-Team
        </footer>
      </div>
    </div>
  );
}
