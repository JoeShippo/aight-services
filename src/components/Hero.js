import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Hero = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="hero" className="bg-primary text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="navbar bg-primary text-white px-6 py-6 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">aight.fun</div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute top-16 left-0 w-full bg-primary md:static md:flex md:gap-6 text-lg md:w-auto transition-all`}
          >
            <li className="border-b md:border-none">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="block px-6 py-4 md:p-0 hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us?
              </Link>
            </li>
            {/* <li className="border-b md:border-none">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="block px-6 py-4 md:p-0 hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li> */}
            <li className="border-b md:border-none">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block px-6 py-4 md:p-0 hover:underline cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="border-b md:border-none">
              <span
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
                className="block px-6 py-4 md:p-0 hover:underline cursor-pointer"
              >
                Get In Touch
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex justify-center items-center container mx-auto px-8 lg:px-32">
        {/* Left Column - Content */}
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Affordable Website Design for Small Businesses</h1>

          <p className="text-xl md:text-2xl font-bold mb-4 max-w-lg">
            aight.fun offers exceptional web development services to transform your ideas into extraordinary online experiences.
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-lg">
            Starting from just £50 a month, you can give your business the digital kickstart or refresh it needs without breaking the bank!
          </p>

          <div className="flex items-center gap-4 mb-8">
            <button onClick={openModal} className="btn btn-secondary btn-md md:btn-lg">Get Started Today</button>
          </div>
        </div>

        {/* Right Column - Image with object-fit styling */}
        <div className="hidden flex-1 md:flex justify-center mt-8 md:mt-0">
          <img 
            src="/assets/desk-image-hero.webp" 
            alt="Laptop on a desk - aight.fun website development" 
            className="rounded-lg shadow-lg w-full h-full object-cover max-w-[400px] xl:max-w-[400px] max-h-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;