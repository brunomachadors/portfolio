'use client';
import { useState, useEffect } from 'react';
import LinkButton from './components/Button/LinkButton';
import LoadingSpinner from './components/Loading/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        data-test-id="loading-state"
        role="status"
        aria-label="Loading home page content"
      >
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main
      className="flex items-center justify-center min-h-[85vh] p-8"
      role="main"
      aria-labelledby="page-title"
    >
      <div
        className="text-center sm:text-center max-w-5xl mx-auto"
        data-test-id="home-container"
      >
        <h1
          id="page-title"
          className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-6"
          data-test-id="home-title"
        >
          Welcome to my Portfolio
        </h1>
        <p
          className="text-lg sm:text-2xl mb-8"
          data-test-id="home-description"
          aria-label="Introduction to portfolio content"
        >
          Explore my skills, experience, and projects as a QA Engineer.
        </p>
        <LinkButton
          text="Start here"
          href="/about"
          data-test-id="home-start-button"
          aria-label="Navigate to About page"
        />
      </div>
    </main>
  );
}
