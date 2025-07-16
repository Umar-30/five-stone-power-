'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, BookOpenCheck, Users, ShieldCheck, Wifi } from 'lucide-react';

const ministries = [
  {
    title: "Intercessory Prayer Gatherings",
    icon: <HeartHandshake className="h-8 w-8 text-yellow-500" />,
    description: "Standing in the gap through fervent prayer for individuals, families, and nations."
  },
  {
    title: "Bible Study & Discipleship Programs",
    icon: <BookOpenCheck className="h-8 w-8 text-yellow-500" />,
    description: "Growing deeper in God’s Word through guided teaching and spiritual mentorship."
  },
  {
    title: "Youth & Women's Empowerment",
    icon: <Users className="h-8 w-8 text-yellow-500" />,
    description: "Building confident, faith-filled individuals ready to lead with purpose."
  },
  {
    title: "Deliverance & Healing Services",
    icon: <ShieldCheck className="h-8 w-8 text-yellow-500" />,
    description: "Freedom from spiritual bondage through prayer, worship, and the Holy Spirit’s power."
  },
  {
    title: "Online Encouragement & Teachings",
    icon: <Wifi className="h-8 w-8 text-yellow-500" />,
    description: "Virtual sessions to strengthen faith through daily Word, prayer, and community."
  },
];

export default function MinistriesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-12 flex items-center justify-center gap-3 font-[Playfair_Display]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ⛪ Ministries & Services
        </motion.h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4 justify-center">
                {ministry.icon}
                <h2 className="text-xl font-semibold font-[Poppins]">{ministry.title}</h2>
              </div>
              <p className="text-sm text-gray-700 font-[Poppins]">
                {ministry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bible Verse */}
        <div className="mt-16 max-w-3xl mx-auto text-center text-gray-600 italic font-[Poppins]">
          “Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace...” <br />
          — <span className="text-yellow-600 font-semibold">1 Peter 4:10</span>
        </div>
      </div>
    </main>
  );
}

