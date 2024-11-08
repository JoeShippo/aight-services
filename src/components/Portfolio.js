import React from 'react';
import Masonry from 'react-masonry-css';

const Portfolio = () => {
  // Define breakpoint columns for responsive masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="flex justify-start w-full mb-12">
          <div className="w-2/3 text-left">
            <h2 className="text-4xl font-bold mb-6">Highlighting Unique Features of Our Web Development</h2>
            <p className="text-lg">
              Experience unmatched creativity and functionality with our tailored solutions, transforming your web presence into something spectacular.
            </p>
          </div>
        </div>
        
        {/* Masonry Layout */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {/* Portfolio Items */}
          <img src="https://placehold.co/600x400" alt="Project 1" className="rounded-lg" />
          <img src="https://placehold.co/300x400" alt="Project 2" className="rounded-lg" />
          <img src="https://placehold.co/600x400" alt="Project 3" className="rounded-lg" />
          <img src="https://placehold.co/500x200" alt="Project 4" className="rounded-lg" />
          <img src="https://placehold.co/300x400" alt="Project 6" className="rounded-lg" />
          <img src="https://placehold.co/600x400" alt="Project 5" className="rounded-lg" />
          <img src="https://placehold.co/600x400" alt="Project 7" className="rounded-lg" />
          <img src="https://placehold.co/500x200" alt="Project 8" className="rounded-lg" />
        </Masonry>
      </div>
    </section>
  );
};

export default Portfolio;