import React from 'react';
import Masonry from 'react-masonry-css';

const Services = ({ openModal }) => {
  // Reference for the Swiper instance
  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };

  return (
    <section id="services" className="py-10 md:py-20 bg-base-100 text-gray-800 relative">
      <div className="container mx-auto px-8 lg:px-32 flex flex-col md:flex-row gap-8">
        
        <div className="w-full md:w-3/3 flex flex-col justify-center items-start">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="services-grid"
            columnClassName="services-grid-column"
          >
            <div className="p-6 bg-gray-100 rounded-lg text-left service col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Custom Website Builds?</h2>
            <p className="text-lg mb-4 text-gray-600">
              Supporting small businesses elevate their online presence through modern and professional websites at affordable prices.
            </p>
            <button className="btn btn-primary" onClick={openModal}>Get in Touch</button>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg text-left service hover:bg-primary hover:text-white">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2"><span className="text-primary">01</span> Bespoke Design</h3>
              <p>Custom, tailored website designs that reflect your brand's unique identity and vision. Our designs are built to engage your audience and drive conversions</p>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg text-left service hover:bg-primary hover:text-white" >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2"><span className="text-primary">02</span> SEO Optimisation</h3>
            <p>We optimise your website for search engines to improve visibility and attract more organic traffic. Our SEO strategies are focused on ranking higher and driving targeted leads to your business.</p>
          </div>

          {/* Service Card 3 */}
          <div className="p-6 bg-gray-100 rounded-lg text-left service hover:bg-primary hover:text-white" >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2"><span className="text-primary">03</span> Cost Effective</h3>
            <p>From the initial design to the final development stage, your dedicated team of specialists.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg text-left service hover:bg-primary hover:text-white" >
            <h3 className="text-2xl md:text-3xl font-semibold mb-2"><span className="text-primary">04</span> Full Hosting</h3>
            <p>Full website hosting, ensuring your site is fast, secure, and always online. Our hosting solutions include regular updates, backups, and maintenance for worry-free performance.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg text-left service hover:bg-primary hover:text-white" >
          <h3 className="text-2xl md:text-3xl font-semibold mb-2"><span className="text-primary">05</span> Quality Guaranteed</h3>
            <p>We guarantee high-quality websites and marketing services that deliver real results. Our focus is on building solutions that are reliable, effective, and drive business growth.</p>
          </div>
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Services;
