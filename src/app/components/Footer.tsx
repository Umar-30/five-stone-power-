import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-8">
        
        <div className="container mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-white text-xl font-semibold font-[Playfair_Display] mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
              Five Stone Power is more than a blog — it’s a space where faith meets knowledge, and individuals grow together through purpose-driven learning.
              </p>
            </div>
  
            {/* Navigation Links */}
            <div>
              <h3 className="text-white text-xl font-semibold font-[Playfair_Display] mb-4">Quick Links</h3>
              <ul>
                <li>
                  <Link
                  href="/" className="text-gray-400 hover:text-white text-sm block mb-2">Home</Link>
                </li>
                <li>
                  <Link
                     href="/about" className="text-gray-400 hover:text-white text-sm block mb-2">About</Link>
                </li>
                <li>
                  <Link
                    href="/contact" className="text-gray-400 hover:text-white text-sm block mb-2">Contact</Link>
                </li>
                <li>
                  <Link href
                  ="/explore"className="text-gray-400 hover:text-white text-sm block mb-2">Blog</Link>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-white text-xl font-semibold font-[Playfair_Display] mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/share/1CeKTydE1q/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.351C0 23.408.593 24 1.325 24h11.495v-9.294H9.69V11.7h3.13V9.087c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.465.099 2.794.144v3.24h-1.918c-1.504 0-1.795.715-1.795 1.762V11.7h3.587l-.467 3.006h-3.12V24h6.116C23.407 24 24 23.408 24 22.675V1.324C24 .592 23.407 0 22.675 0z" />
                  </svg>
                </Link>
                <Link
                  href="https://vt.tiktok.com/ZSBSAWH6W/"
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="tiktok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                     <path fillRule="evenodd" clipRule="evenodd" d="M38.1,15.9c-2-0.1-3.8-1-5.2-2.3c-0.7-0.7-1.3-1.6-1.7-2.5c-0.4-1-0.6-2-0.6-3H25v20.8c0,3.5-2.1,5.6-4.7,5.6c-0.6,0-1.2-0.1-1.8-0.3c-0.6-0.2-1.1-0.6-1.6-1c-0.4-0.4-0.8-1-1-1.5c-0.2-0.6-0.4-1.2-0.4-1.8c0-0.6,0.1-1.2,0.4-1.8c0.2-0.6,0.6-1.1,1-1.5c0.4-0.4,1-0.8,1.6-1c0.6-0.2,1.2-0.3,1.8-0.3c0.5,0,1,0.1,1.5,0.3v-5.7c-0.5-0.1-1-0.2-1.5-0.2c-2,0-4,0.6-5.7,1.7c-1.7,1.1-3,2.7-3.8,4.6c-0.8,1.9-1,3.9-0.6,5.9c0.4,2,1.4,3.8,2.8,5.3c1.4,1.4,3.3,2.4,5.3,2.8c2,0.4,4.1,0.2,5.9-0.6c1.9-0.8,3.5-2.1,4.6-3.8c1.1-1.7,1.7-3.7,1.7-5.7V18.8c2.2,1.5,4.8,2.2,7.5,2.3V15.9z"/>
                     </svg>

                </Link>
                <Link
                  href=" fivestonespower@gmail.com "
                  className="text-gray-400 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="gmail"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
 
                </Link>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Blog Website. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  