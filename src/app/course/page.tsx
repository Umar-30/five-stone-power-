'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const courses = [
  {
    slug: "trading-christian",
    title: "Online Trading for Christians",
    image: "https://ibwcwealth.com/wp-content/uploads/2024/05/Online-Trading1_1668586102.webp",
    description: "Faith-based trading training built on biblical values.",
  },
  {
    slug: "funds-needed",
    title: "Trading for Needy Individuals",
    image: "https://www.bizcover.com.au/bizwitty/wp-content/uploads/2019/03/chart-trading-courses-forex-analysis-shares-1457035-pxhere.com_.jpg",
    description: "Free financial education to empower struggling families.",
  },
  {
    slug: "prayer-sessions",
    title: "Weekly Prayer Sessions",
    image: "https://i.ytimg.com/vi/FA0e8qGgCNo/maxresdefault.jpg",
    description: "Join our weekly prayers focused on finance and faith.",
  },
  {
    slug: "donation-families",
    title: "Support for Poor Families",
    image: "https://www.lingayasvidyapeeth.edu.in/sanmax/wp-content/uploads/2024/02/Ethics-in-Education-min.webp",
    description: "Training with a mission: support others through giving.",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 flex items-center justify-center gap-3 font-[Playfair_Display]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          📘 Faith-Based Courses
        </motion.h1>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.slug}
              className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={350}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold text-blue-800 font-[Poppins] mb-2">
                    {course.title}
                  </h2>
                  <p className="text-sm text-gray-700 font-[Poppins]">{course.description}</p>
                </div>

                <div className="mt-4 text-right">
                  <Link
                    href={`/course/${course.slug}`}
                    className="inline-block text-sm px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verse at bottom */}
        <div className="mt-16 max-w-3xl mx-auto text-center text-gray-600 italic font-[Poppins]">
          “Let the wise listen and add to their learning...” <br />
          — <span className="text-yellow-600 font-semibold">Proverbs 1:5</span>
        </div>
      </div>
    </main>
  );
}
