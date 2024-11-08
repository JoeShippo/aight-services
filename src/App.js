import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
// import Portfolio from './components/Portfolio';
import FreePromo from './components/FreePromo';
import About from './components/About';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LogoSection from './components/LogoSection';

function App() {
  // Modal state and functions
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Pass openModal to components that need to trigger the modal */}
      <Hero openModal={openModal} />
      <Services openModal={openModal} />
      {/* <Portfolio openModal={openModal} /> */}
      <FreePromo openModal={openModal} />
      <FAQs openModal={openModal} />
      <About openModal={openModal} />
      <LogoSection openModal={openModal} />
      <Footer openModal={openModal} />

      {/* Render the ContactModal */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;