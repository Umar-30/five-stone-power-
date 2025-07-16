'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const SwipeableCards = () => {
  const cards = [
    {
      id: 1,
      title: "The Power of Five Stones",
      description: "five stones—Faith, Trust, Praise, Obedience, and Courage. These are not just words; they are powerful weapons",
      image: "https://i0.wp.com/kimenink.com/wp-content/uploads/2019/02/5-Smooth-Stones-5-Inspiring-Words-kimenink.jpg?resize=1280%2C1280&ssl=1",
      link: "components/5",
    },
    {
      id: 2,
      title: "Worship – Honoring God",
      description: " True worship comes from the heart and includes our words, actions, and thoughts.",
      image: "https://i0.wp.com/www.peterdehaan.com/wp-content/uploads/2022/08/how-do-we-worship-God.jpg?fit=1200%2C675&ssl=1",
      link: "components/2",
    },
    {
      id: 3,
      title: "Build Strong, Faith-Filled Communities",
      description: "our mission is so important — to build strong, faith-filled communities where people can grow in love, truth, and hope.",
      image: "https://sanctifiedbychrist.com/wp-content/uploads/2017/12/slide-1.jpg",
      link: "components/3",
    },
    {
      id: 4,
      title: "Prayer – Our Direct Line to God",
      description: "Prayer is not just a religious practice—it’s a lifeline, a personal connection to God",
      image: "https://s3.amazonaws.com/uss-cache.salvationarmy.org/bd2b989a-7b26-409f-8bcc-5cd142486c34_hands_24985apc.jpg",
      link: "components/4",
    },
    {
      id: 5,
      title: "Faith – Trusting God ",
      description: "Faith is not just a feeling or a belief; it is the deep trust in God",
      image: "https://drmichellebengtson.com/wp-content/uploads/2024/03/God-will-see-you-through-2.jpg",
      link: "/components/1",
    },
  ];

  return (
    <div className="flex flex-col justify-start text-center p-5 items-center min-h-screen bg-gray-100 pt-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 flex items-center justify-center gap-3 font-[Playfair_Display]">
        Welcome to the Ultimate Five Stones Power Blog
      </h1>
      <p className="pb-10 pt-4">
       "This blog shares inspiration for daily living — from spiritual growth and wellness to uplifting journeys and meaningful lifestyle tips."
      </p>
      
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: '.custom-pagination' }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        speed={500} // Adjust the speed for smoother transitions
        className="w-full px-4"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image with fixed height */}
              <div className="h-60 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  height={240}
                  width={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content with equal height */}
              <div className="p-4 flex flex-col flex-grow justify-between">
                <Link className="text-black" href={card.link}>
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                </Link>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="custom-pagination mt-4"></div>
      <footer className="mt-8">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default SwipeableCards;
