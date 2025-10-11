import React from "react";
import hero from "../assets/imgD/imagD1.png";
import p1 from "../assets/imgD/imagD3.png";
import p2 from "../assets/imgD/imagD4.png";
import extra from "../assets/imgD/imagD2.png";
import p3 from "../assets/imgD/imagD5.png";
import p4 from "../assets/imgD/imagD6.png";
import p5 from "../assets/imgD/imagD7.png";
import p6 from "../assets/imgD/imagD8.png";
import p7 from "../assets/imgD/imagD9.png";
import icon from "../assets/imgD/icon.png";

export default function MyPageD() {
  return (
    <div className="w-full font-sans text-gray-900">
      {/* Hero */}
      <section className="relative">
        <img src={hero} alt="hero" className="w-full h-[480px] object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0">
          <div className="max-w-[1100px] mx-auto px-6 h-full flex flex-col justify-between">
            <header className="flex items-center justify-between pt-6">
              <div className="flex items-center gap-6 text-white">
                <div className="flex justify-start items-center">
                  <img
                    src={icon}
                    alt="icon"
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                </div>

                <nav className="hidden md:flex gap-6 text-sm text-white/90   font-extrabold mb-4 leading-tight">
                  <a href="#" style={{ color: "#E9BD8C" }}>
                    Home
                  </a>
                  <a href="#">Blog</a>
                  <a href="#">Contact Us</a>
                  <a href="#">Services</a>
                </nav>
              </div>
            </header>

            <div className="flex items-center h-full">
              <div className="text-white max-w-lg py-8">
                <p className="text-sm mb-3" style={{ color: "#E9BD8C" }}>
                  Delicious Cafe
                </p>
                <h1
                  className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
                  style={{ fontFamily: "'Sansita Swashed', cursive" }}
                >
                  Sweet Treats,
                  <br /> Perfect Eats
                </h1>

                <div className="flex gap-6 mt-10">
                  <button className="bg-[#b84b30] text-white px-5 py-2 rounded">
                    Shop Now
                  </button>
                  <button style={{ color: "#E9BD8C" }}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Top Products */}
      <section className="max-w-[1100px] mx-auto px-6 py-12">
        <h2
          className="text-5xl font-bold text-center mb-8"
          style={{ fontFamily: "'Sansita Swashed', cursive" }}
        >
          Top Products
        </h2>
        <div className="flex justify-center">
          <img
            src={extra}
            alt="Top Product"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-center mt-20">
          <img
            src={p1}
            alt="20% off your first order"
            className="w-screen h-auto object-cover mt-20"
          />
        </div>
      </section>
      {/* Explore More */}
      <section className="max-w-[1100px] mx-auto px-6 py-8">
        <h3
          className="text-3xl md:text-4xl font-extrabold text-center mb-4"
          style={{ fontFamily: "'Sansita Swashed', cursive" }}
        >
          Explore More
        </h3>

        <div className="flex flex-col items-center mb-6">
          <div className="flex justify-center gap-8 mb-4">
            {["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorite"].map(
              (t, i) => (
                <button
                  key={t}
                  className={`text-sm ${
                    i === 0 ? "text-[#b84b30] font-semibold" : "text-gray-600"
                  }`}
                  style={{
                    background: "transparent",
                    border: "none",
                    paddingBottom: 6,
                    borderBottom: i === 0 ? "3px solid #933C24" : "none",
                  }}
                >
                  {t}
                </button>
              )
            )}
          </div>
          <div className="w-full border-t border-gray-200" />
          <img
            src={p2}
            alt="Explore More"
            className="w-full h-auto object-cover mt-25"
          />
          <img
            src={p3}
            alt="ABOUT US"
            className="w-full h-auto object-cover mt-25"
          />
        </div>
      </section>
      {/* Featured Treats */}
      <section className="max-w-[1100px] mx-auto px-6 py-12">
        <h3
          className="text-3xl md:text-4xl font-extrabold text-center mb-8"
          style={{ fontFamily: "'Sansita Swashed', cursive" }}
        >
          Featured Treats
        </h3>
        <div className="grid grid-cols-3 gap-6 items-start">
          {[
            { img: p5, title: "Puff Pastry", price: "8 Baht" },
            { img: p6, title: "Doughnuts", price: "8 Baht" },
            { img: p4, title: "Brownies", price: "8 Baht" },
          ].map((it, idx) => (
            <div key={idx} className="flex flex-col items-start gap-3">
              <div className="w-full rounded-lg overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="text-lg font-semibold">{it.title}</div>
                <div className="text-lg font-medium">{it.price}</div>
              </div>
            </div>
          ))}
        </div>
        <img
          src={p7}
          alt="Featured Treats"
          className="w-full h-auto object-cover mt-25"
        />
      </section>
    </div>
  );
}
