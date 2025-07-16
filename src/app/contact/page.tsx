// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
//       <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
//       <p className="text-lg text-gray-700 mb-8 text-center">
//         We&apos;d be honored to hear from you. Whether you have a question, feedback, or simply wish to connect —<br/>
//          feel free to reach out and be part of our growing global community.
//       </p>
//       <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800"
//         >
//           Send Message
//         </button>
//       </form>
//       <div className="mt-12 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
//   <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Other Ways to Contact</h2>

//   {/* Phone */}
//   <div className="flex items-center mb-4">
//     <span className="text-gray-700 text-xl mr-3">📞</span>
//     <a href="tel:+971 52 453 0960" className="text-gray-700 text-lg hover:text-blue-600 transition">
//       +971 52 453 0960
//     </a>
//   </div>

//   {/* Email */}
//   <div className="flex items-center mb-4">
//     <span className="text-gray-700 text-xl mr-3">✉️</span>
//     <a href="mailto: fivestonespower@gmail.com" className="text-gray-700 text-lg hover:text-blue-600 transition">
//       fivestonespower@gmail.com
//     </a>
//   </div>

//   {/* Email Button (optional - matches form) */}
//   <div className="mt-6 text-center">
//     <a
//       href="mailto: fivestonespower@gmail.com"
//       className="inline-block bg-gray-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-900 transition duration-200"
//     >
//       Send an Email
//     </a>
//   </div>
// </div>

//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Optional: Add form submission to email / backend logic here
  };

  return (
    <section className="bg-[#f9f5f0] min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <motion.h1
  className="text-4xl sm:text-5xl font-bold mb-12 flex items-center justify-center gap-3 font-[Playfair_Display]"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  ✉️ Contact Us
</motion.h1>
        <p className="text-lg text-gray-700 font-[poppins]">
          We’d be honored to hear from you. Whether you have a question, a prayer request, or want to get involved —
          feel free to reach out and be part of our growing faith community.
        </p>
        <p className="text-md text-gray-600 italic mt-4">
          "For where two or three gather in My name, there am I with them." — Matthew 18:20
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-2xl mx-auto p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div>
          <label htmlFor="name" className="block font-bold text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-bold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-bold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-400 to-yellow-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
        >
          Send Message
        </button>

        {submitted && (
          <p className="text-green-700 mt-4 font-medium text-center">
            ✅ Thank you! Your message has been sent. We will be in touch soon.
          </p>
        )}
      </form>

      {/* Additional Contact Info */}
      <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded-xl shadow-md space-y-4 text-gray-700">
        <h2 className="text-2xl font-bold text-center text-gray-800">Other Ways to Contact</h2>

        <div className="flex items-center gap-3">
          <span className="text-xl">📞</span>
          <a href="tel:+971524530960" className="hover:text-yellow-700 transition">
            +971 52 453 0960
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xl">✉️</span>
          <a
            href="mailto:fivestonespower@gmail.com"
            className="hover:text-yellow-700 transition"
          >
            fivestonespower@gmail.com
          </a>
        </div>

        <div className="text-center pt-4">
          <a
            href="mailto:fivestonespower@gmail.com"
            className="inline-block bg-gradient-to-r from-cyan-400 to-yellow-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-yellow-600 transition"
          >
            Send an Email
          </a>
        </div>

        <div className="text-center text-sm text-gray-600 pt-4">
          🌍 <strong>Locations:</strong> Amarillo, Texas USA & Jhelum, Punjab Pakistan
        </div>
      </div>
    </section>
  );
}

