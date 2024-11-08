import React from 'react';

const LogoGallery = () => {
  return (
    <div className="container mx-auto py-8">      
      <div className="flex flex-wrap justify-center items-center gap-8">
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener">
          <img src="/assets/logos/Bootstrap_logo.svg" alt="Bootstrap logo for responsive web design framework" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener">
          <img src="/assets/logos/CSS3_logo.svg" alt="CSS3 logo for web styling standards" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://elementor.com/" target="_blank" rel="noopener">
          <img src="/assets/logos/Elementor-Logo-Full-Blue.svg" alt="Elementor logo for WordPress page building" className="w-28 h-16 object-contain" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener">
          <img src="/assets/logos/HTML5_logo_and_wordmark.svg" alt="HTML5 logo for modern web markup language" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://lesscss.org/" target="_blank" rel="noopener">
          <img src="/assets/logos/LESS_Logo.svg" alt="LESS logo for CSS preprocessor" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener">
          <img src="/assets/logos/React-icon.svg" alt="React logo for frontend JavaScript library" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://sass-lang.com/" target="_blank" rel="noopener">
          <img src="/assets/logos/Sass_Logo_Color.svg" alt="Sass logo for CSS preprocessor" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://www.shopify.com/" target="_blank" rel="noopener">
          <img src="/assets/logos/Shopify_logo_2018.svg" alt="Shopify logo for eCommerce platform" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener">
          <img src="/assets/logos/Tailwind_CSS_logo.svg" alt="Tailwind CSS logo for utility-first web styling" className="w-28 h-16 object-contain" />
        </a>
        <a href="https://woocommerce.com/" target="_blank" rel="noopener">
          <img src="/assets/logos/WooCommerce_logo.svg" alt="WooCommerce logo for eCommerce solutions on WordPress" className="w-20 h-16 object-contain" />
        </a>
        <a href="https://wordpress.org/" target="_blank" rel="noopener">
          <img src="/assets/logos/WordPress_blue_logo.svg" alt="WordPress logo for content management system" className="w-20 h-16 object-contain" />
        </a>
      </div>
    </div>
  );
};

export default LogoGallery;