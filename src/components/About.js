import React from 'react';

const About = ({ openModal }) => {
  return (
    <section id="about" className="py-10 md:py-20 bg-primary text-white border-b-2 border-white">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-5 gap-8">
          {/* Left Column - 40% */}
          <div className="col-span-5 md:col-span-2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">So, who are we and what do we do?</h2>
            <p className="text-lg">
             Aight! I'm Joe, the founder of aight.fun! What started as a hobby turned into a service and I'm proud to say to be supporting small businesses realise that have a digital space online doesn't have to be expensive!
            </p>
          </div>

          {/* Right Column - 60% */}
          <div className="col-span-5 md:col-span-3 space-y-4">
          <p className="mb-6">
          Our expertise lies in crafting websites built on the WordPress CMS, ideal for small to medium projects. For larger or more complex needs, we offer custom solutions using a variety of advanced technologies. We’re committed to achieving impactful results, helping businesses across sectors—from eCommerce and non-profits to the automotive industry—reach their online goals.</p>

          <p>At aight.fun, we also provide a full suite of digital marketing services to enhance your website’s success, including SEO, PPC advertising, and social media marketing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;