'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import framer-motion only when client renders
const MotionHeading = dynamic(
  async () => {
    const { motion } = await import('framer-motion');
    return ({ children }: { children: React.ReactNode }) => (
      <motion.h1
        className="text-4xl sm:text-5xl font-bold mb-12 flex items-center justify-center gap-3 font-[Playfair_Display]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.h1>
    );
  },
  { ssr: false } // Only render on client
);

const AboutPage: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center">
        {/* Image first on mobile for better LCP */}
        <div className="md:w-1/2 order-2 md:order-1 md:pl-8">
          <Image
            src="/image/blog about.jpg"
            alt="About Us"
            width={400}
            height={400}
            loading="lazy"
            className="rounded-lg mb-6 mx-auto"
          />
        </div>

        <div className="md:w-1/2 order-1 md:order-2 flex flex-col items-center">
          <MotionHeading>📖 About Us</MotionHeading>

          <p className="text-lg text-gray-700 mb-4 mt-4 font-sans text-center md:text-left">
            <b>Five Stone Power</b> is a global platform focused on sharing powerful values like{' '}
            <b>Faith, Obedience, Courage, Trust,</b> and <b>Praise</b>. We provide a blend of{' '}
            <b>religious teachings</b> and <b>practical learning</b> through <b>online classes,
            educational content,</b> and <b>webinars</b>.
            <br />
            Our goal is to help individuals grow spiritually and intellectually by offering accessible learning opportunities. With active roots in <b>Texas (USA)</b> and <b>Punjab (Pakistan)</b>, we aim to build a community connected through <b>values, wisdom,</b> and <b>personal development</b>.
          </p>
        </div>
      </div>

      {/* Read more button */}
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-gradient-to-r from-cyan-400 to-yellow-600 text-black font-bold py-2 px-6 rounded-xl transition"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Read less' : 'Read more'}
        </button>
      </div>

      {/* Show more content */}
      {showMore && (
        <div className="max-w-3xl mx-auto mt-6 text-center">
          <p className="text-gray-700 text-lg font-sans leading-relaxed">
            We are committed to building a bridge between <b>cultures</b> through meaningful{' '}
            <b>education</b> and <b>spiritual development</b>. Whether you are seeking growth in your
            faith, knowledge, or calling — Five Stones Power is here to equip and empower you for
            your journey.
          </p>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
