'use client';

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, DollarSign, BookOpenCheck } from "lucide-react";
import { use } from "react";
import { useState } from "react";

type CourseType = {
  title: string;
  postedDate: string;
  postedBy: string;
  description: string;
  learn: string[];
  whyDifferent: string;
  whoShouldJoin: string[];
  howToEnroll: {
    url: string;
    start: string;
    cost: string;
  };
  verse: string;
};

const courseData: Record<string, CourseType> = {
  "trading-christian": {
    title: "Faith & Finance: Free Online Trading Course for Christians",
    postedDate: "July 14, 2025",
    postedBy: "Five Stones Power",
    description: `In today’s world, financial wisdom is more important than ever — not just for personal gain, but to be good stewards of God’s blessings. At Five Stones Power, we believe Christians are called to lead lives of integrity, generosity, and purpose — including in the way we handle money.

                  That’s why we’re excited to offer a Free Online Trading Course designed especially for Christians who want to learn how to navigate the world of trading with biblical values at the core.`,
    learn: [
      "📈 Basics of Online Trading – What trading is, how markets work, and how to get started.",
      "💡 Biblical Principles of Stewardship – Align your trading goals with biblical wisdom: avoiding greed, debt, and dishonest gain.",
      "💼 Practical Financial Skills – Stock trading, crypto basics, risk management, and portfolio building.",
      "🙏 Faith-Based Decision Making – Pray, plan, and proceed with confidence, trusting God.",
    ],
    whyDifferent:
      "Unlike secular trading programs that focus solely on profit, our course integrates faith, ethics, and financial literacy. We believe wealth is a tool — not a goal — and when used wisely, it can bring glory to God and bless others.",
    whoShouldJoin: [
      "Christians wanting to grow in financial knowledge",
      "Church leaders guiding congregations in financial health",
      "Young adults seeking faith-aligned income opportunities",
      "Anyone curious about trading without compromising their values",
    ],
    howToEnroll: {
      url: "https://www.fivestonespower.com/freetradingcourse",
      start: "Enroll anytime — 100% online, learn at your pace",
      cost: "FREE — Because we believe knowledge should be accessible to all",
    },
    verse:
      "“For the Lord your God will bless you in all your work and in everything you put your hand to.” — Deuteronomy 15:10",
  },
};

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const course = courseData[slug];

  if (!course) return notFound(); 

  const [showForm, setShowForm] = useState(false);
  const [verseText, verseRef] = course.verse.split("—").map((part) => part.trim()); 

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16 font-[Poppins]">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-6 text-black font-[Playfair_Display]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {course.title}
        </motion.h1>

        {/* Meta */}
        <p className="text-center text-xl text-gray-500 mb-10">
          📅 {course.postedDate} | ✍️ By{" "}
          <span className="font-medium">{course.postedBy}</span>
        </p>

        {/* Description */}
        <motion.p
          className="text-base text-gray-800 whitespace-pre-line mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {course.description}
        </motion.p>

        {/* Learn */}
        <motion.section
          className="mb-10 bg-gray-100 p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold text-yellow-700 mb-3">📘 What You’ll Learn</h2>
          <ul className="list-disc list-inside space-y-2">
            {course.learn.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.section>

        {/* Why Different */}
        <motion.section
          className="mb-10 bg-yellow-50 p-6 rounded-xl border border-yellow-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-yellow-700 mb-3">🎯 Why This Course is Different</h2>
          <p>{course.whyDifferent}</p>
        </motion.section>

        {/* Who Should Join */}
        <motion.section
          className="mb-10 bg-blue-50 p-6 rounded-xl border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-blue-700 mb-3">👥 Who Should Join?</h2>
          <ul className="list-disc list-inside space-y-2">
            {course.whoShouldJoin.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.section>

        {/* How to Enroll */}
        <motion.section
          className="mb-10 bg-green-50 p-6 rounded-xl border border-green-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-green-700 mb-3">📝 How to Enroll</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <BookOpenCheck className="text-blue-600 w-5 h-5" />
              <span>
                Website:&nbsp;
                <Link href={course.howToEnroll.url} className="text-blue-700 underline" target="_blank">
                  {course.howToEnroll.url}
                </Link>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CalendarDays className="text-blue-600 w-5 h-5" />
              {course.howToEnroll.start}
            </li>
            <li className="flex items-center gap-2">
              <DollarSign className="text-blue-600 w-5 h-5" />
              {course.howToEnroll.cost}
            </li>
          </ul>
        </motion.section>

        {/* Apply Now Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className=" bg-gradient-to-r from-cyan-400 to-yellow-600 text-black px-6 py-2 rounded-full hover: transition"
          >
            {showForm ? 'Hide Admission Form' : 'Apply Now'}
          </button>
        </div>

        {/* Admission Form */}
        {showForm && (
          <motion.div
            className="mb-10 bg-white border border-blue-200 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-black font-serif">
              Admission Form
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
              <textarea
                placeholder="Why do you want to join this course?"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-yellow-600 text-black px-6 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </motion.div>
        )}

        {/* Final Verse */}
        <motion.blockquote
          className="text-center text-gray-600 italic border-l-4 border-blue-500 pl-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {verseText}{" "}
          {verseRef && (
            <span className="text-yellow-600 font-semibold">— {verseRef}</span>
          )}
        </motion.blockquote>
      </div>
    </main>
  );
}
