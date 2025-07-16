import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";

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
      title: "Worship – Honoring God ",
      description: " True worship comes from the heart and includes our words, actions, and thoughts.",
      image: "https://i0.wp.com/www.peterdehaan.com/wp-content/uploads/2022/08/how-do-we-worship-God.jpg?fit=1200%2C675&ssl=1",
      link: "components/2",
    },
    {
      id: 3,
      title: "Build Strong, Faith-Filled Communities",
      description: "Our mission is so important — to build strong, faith-filled communities where people can grow in love, truth, and hope.",
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
    {
      id: 6,
      title: "Living and Standing on God's Truth",
      description: "Get tips and guidance for achieving your fitness aspirations.",
      image: "https://americandecency.org/wp-content/uploads/2022/05/Standing-on-Truth.png",
      link: "components/6",
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-start text-center p-5 items-center min-h-screen bg-gray-100 pt-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 flex items-center justify-center gap-3 font-[Playfair_Display]">
          Explore the Topics you Love ❤️
        </h1>
        <p className="pb-10 pt-4">
         "This blog shares inspiration for daily living — from spiritual growth and wellness to uplifting journeys and meaningful lifestyle tips.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ${
                index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={600}
                height={400}  // Increased height for better proportion
                layout="intrinsic"
                className="w-full h-auto object-cover"
              />
              <div className="flex flex-col flex-grow p-4">
                <Link className="text-black" href={card.link}>
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                </Link>
                <p className="text-gray-600 text-sm line-clamp-3">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SwipeableCards;
