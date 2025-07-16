'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// 👉 Dynamically import framer-motion
const MotionDiv = dynamic(() =>
  import('framer-motion').then(mod => mod.motion.div), { ssr: false });

const MotionButton = dynamic(() =>
  import('framer-motion').then(mod => mod.motion.button), { ssr: false });

export default function HeroSection() {
  const fullText = "Five Stones Power";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const buttons = [
    { text: "Start Learning", href: "/course" },
    { text: "Explore Ministries", href: "/ministries" },
    { text: " Latest Blogs", href: "#blog-topic" },
    { text: "Contact Us", href: "/contact" },
  ];

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat sm:bg-center sm:bg-cover"
      style={{ backgroundImage: "url('/image/five stone.jpg')" }}
  >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10" />

      <div className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center px-6 sm:px-16 gap-10 text-white">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold font-[Playfair_Display] mb-4">
            {displayedText}
            <span className="text-yellow-400 animate-pulse">|</span>
          </h1>
          <p className="text-lg sm:text-2xl text-yellow-200 font-semibold mb-3 font-[Poppins] drop-shadow">
            Empowered by Faith. Equipped for Battle.
          </p>
          <p className="text-sm sm:text-xl text-gray-100 font-[Poppins] max-w-md drop-shadow">
            We are a Christian faith-based organization focused on raising spiritual warriors through the Word of God, prayer, and community impact.
          </p>
        </div>

        {/* Buttons Section */}
        <MotionDiv
          className="w-full md:w-1/2 flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {buttons.map((btn, index) => (
            <Link key={index} href={btn.href}>
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-60 py-3 bg-gradient-to-r from-cyan-400 to-yellow-600 text-black font-semibold rounded-full shadow-lg font-poppins hover:shadow-xl transition duration-300"
              >
                {btn.text}
              </MotionButton>
            </Link>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
