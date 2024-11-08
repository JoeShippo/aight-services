import React from 'react';

const FreePromo = ({ openModal }) => {
  return (
    <section 
      id="free-promo" 
      className="relative py-10 md:py-20 bg-cover bg-center text-white" 
      style={{ backgroundImage: "url('/assets/desk-image.webp')" }}
    >
      {/* Grey Overlay */}
      <div className="absolute inset-0 bg-gray-800 opacity-50 text-white"></div>
      
      <div className="relative container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-5 gap-8">
          
          {/* Left Column - 40% */}
          <div className="col-span-5 md:col-span-2 text-left">
            <h2 className="text-3xl font-bold mb-4">Ermm, Free Website?</h2>
            <h2 className="text-6xl font-bold">Yes Please!</h2>
          </div>

          {/* Right Column - 60% */}
          <div className="col-span-5 md:col-span-3 space-y-4">
            <p className="text-lg mb-2">
              Each month, we provide one of our new customers a free website, hosting, and support!<sup>*</sup> Could it be you this month?
            </p>
            <button className="btn btn-primary" onClick={openModal}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreePromo;