'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

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

export default function CourseSlider() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 font-[Playfair_Display] text-gray-800">
        📘 Featured Courses
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.slug}>
            <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col h-full">
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={350}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold text-blue-800 font-[Poppins] mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-700 font-[Poppins]">
                  {course.description}
                </p>
                <div className="mt-4 text-right">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-block text-sm px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="mt-12 text-center text-gray-600 italic font-[Poppins] max-w-xl mx-auto">
        “Let the wise listen and add to their learning...” <br />
        — <span className="text-yellow-600 font-semibold">Proverbs 1:5</span>
      </p>
    </section>
  );
}
