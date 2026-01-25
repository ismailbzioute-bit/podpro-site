import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Trends from './components/Trends';
import Platforms from './components/Platforms';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { MockupItem } from './types';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Gallery onOpenModal={openModal} />
        <Trends />
        <Platforms />
        <Services />
        <CTA />
      </main>
      <Footer />
      
      {selectedImage && (
        <Modal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
