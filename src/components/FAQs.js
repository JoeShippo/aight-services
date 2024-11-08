import React from 'react';

const FAQs = ({ openModal }) => {
  return (
    <section id="faqs" className="py-10 md:py-20 bg-base-100 text-gray-800">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-5 gap-8">
          {/* Left Column - 40% */}
          <div className="col-span-5 md:col-span-2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Check out our Frequently Asked Questions</h2>
            <p className="text-lg mb-6">
              Not finding the answer you need?
            </p>
            <button className="btn btn-primary" onClick={openModal}>Get in Touch</button>
          </div>

          {/* Right Column - 60% */}
          <div className="col-span-5 md:col-span-3 space-y-4">
            {/* FAQ List */}
            <div className="collapse collapse-arrow border border-base-300 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold">
                You say £50 a month, tell me more?
              </div>
              <div className="collapse-content">
                <p className='mb-3'>Our £50/month website service includes a completely custom website designed to attract and convert visitors into clients. This service covers everything from design to implementation, ensuring your online presence is professional and effective without breaking the bank.</p>
                <p>Providing you with a website a maximum of 5 pages, it's fully managed by us and then at the end of 12 months you have access to all the code and design to either take away and manage yourself or you can opt to continue working with us.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow border border-base-300 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold">
                What services do you offer?
              </div>
              <div className="collapse-content">
                <p>Our bread and butter is cost effective website development and design. But perhaps you're looking for something more? </p>
                <p>We can support your business with any project in the digital marketing realm: email marketing? Google Ads? Social Media Management? You name it, we're sure we can look after you!</p>
              </div>
            </div>

            <div className="collapse collapse-arrow border border-base-300 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold">
                What kind of businesses do you work with?
              </div>
              <div className="collapse-content">
                <p>We work with a variety of businesses across different industries, from small startups to larger enterprises. Our solutions are particularly effective for business owners looking to increase leads, streamline processes, and improve their digital presence.</p>
              </div>
            </div>

            <div className="collapse collapse-arrow border border-base-300 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title text-lg font-semibold">
              What support do you offer after working together?
              </div>
              <div className="collapse-content">
                <p>We provide ongoing support to ensure our solutions continue to meet your business needs, including regular check-ins, performance reviews, and updates as necessary.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;