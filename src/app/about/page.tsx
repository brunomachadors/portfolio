'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AboutSections from '../components/AboutSections/AboutSections';
import LinkButton from '../components/Button/LinkButton';
import LoadingSpinner from '../components/Loading/Loading';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a loading time, adjust as needed
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main
      className="flex flex-col items-center justify-center min-h-[85vh] p-8"
      data-testid="about-page"
      aria-labelledby="about-page-title"
    >
      <div
        className="flex flex-col sm:flex-row items-stretch border border-yellow-500 rounded-xl shadow-lg overflow-hidden w-full max-w-7xl"
        data-testid="about-container"
      >
        <div
          className="flex items-center justify-center bg-transparent w-full sm:w-1/2 p-4"
          data-testid="about-photo"
        >
          <Image
            src="https://res.cloudinary.com/dtglidvcw/image/upload/v1735730755/Portifolio/capalinguacinza.png"
            alt="Bruno Machado"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover"
            aria-label="Photo of Bruno Machado"
            priority
          />
        </div>

        <div
          className="flex flex-col flex-1 p-8 rounded-lg"
          data-testid="about-content"
        >
          <AboutSections />
        </div>
      </div>

      <div className="mt-8" data-testid="resume-button-container">
        <LinkButton
          text="Go to Resume"
          href="/resume"
          data-testid="resume-button"
          aria-label="Navigate to Resume page"
        />
      </div>
    </main>
  );
}
