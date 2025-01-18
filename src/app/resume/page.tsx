'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { EXPERIENCES } from '../content/experiences';
import LinkButton from '../components/Button/LinkButton';
import LoadingSpinner from '../components/Loading/Loading';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <main
        className="flex items-center justify-center min-h-screen"
        aria-label="Loading Resume"
      >
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main
      className="flex flex-col items-center min-h-screen p-8"
      data-testid="resume-page"
      role="main"
      aria-labelledby="resume-page-title"
    >
      <h1 className="sr-only" id="resume-page-title">
        Resume Page
      </h1>

      {/* Timeline */}
      <div className="w-full max-w-5xl" data-testid="resume-timeline">
        {EXPERIENCES.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center"
            data-testid={`resume-item-${index}`}
          >
            {/* Year */}
            <div
              className="text-yellow-500 text-lg sm:text-xl font-bold text-left"
              data-testid={`resume-item-year-${index}`}
            >
              {item.year}
            </div>
            <div
              className="w-12 border-b border-yellow-500 h-2 -mt-2"
              aria-hidden="true"
            ></div>

            {/* Job Details */}
            <div
              className="w-3/4 pt-4 text-gray-300 border-l-8 border-yellow-500 border-b pl-4"
              data-testid={`resume-item-details-${index}`}
            >
              <h3
                className="text-xl sm:text-2xl font-bold text-yellow-500"
                data-testid={`resume-item-company-${index}`}
              >
                {item.company}
              </h3>
              <p
                className="text-sm sm:text-base"
                data-testid={`resume-item-period-${index}`}
              >
                {item.period}
              </p>
              <p
                className="mt-2 text-sm sm:text-base font-semibold"
                data-testid={`resume-item-role-${index}`}
              >
                {item.role}
              </p>
              <p
                className="mt-2 mb-8 text-sm sm:text-base"
                data-testid={`resume-item-description-${index}`}
              >
                {item.shortDescription}
              </p>

              {/* Centralize button */}
              <div
                className="flex flex-col items-center mb-4"
                data-testid={`resume-item-link-container-${index}`}
              >
                <Link
                  href={`/experience/${item.company.toLowerCase()}-${item.year.toLowerCase()}`}
                  className="inline-block text-yellow-500 border border-yellow-500 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-yellow-500 hover:text-gray-900 transition"
                  data-testid={`resume-item-link-${index}`}
                  aria-label={`Learn more about ${item.role} at ${item.company} in ${item.year}`}
                >
                  Know more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to go to Skills */}
      <div className="mt-8" data-testid="skills-button-container">
        <LinkButton
          text="Go to Skills"
          href="/skills"
          data-testid="skills-button"
          aria-label="Navigate to Skills page"
        />
      </div>
    </main>
  );
}
