'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { EXPERIENCES } from '@/app/content/experiences';
import LoadingSpinner from '@/app/components/Loading/Loading';
import { useState, useEffect } from 'react';

export default function ExperiencePage() {
  const params = useParams();
  const companyYear = params.companyYear;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay for demonstration
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const experience = EXPERIENCES.find(
    (exp) =>
      `${exp.company.toLowerCase()}-${exp.year.toLowerCase()}` === companyYear
  );

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        data-test-id="loading-state"
        role="status"
        aria-label="Loading experience details"
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (!experience) {
    return (
      <div
        className="text-center text-yellow-500"
        data-test-id="experience-not-found"
        role="alert"
        aria-live="polite"
      >
        Experience not found.
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center min-h-screen p-8"
      data-test-id="experience-page"
      aria-labelledby="experience-page-title"
    >
      {/* Título Principal */}
      <h1
        className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-8 text-center"
        id="experience-page-title"
        data-test-id="experience-title"
      >
        {experience.company}
      </h1>

      {/* Período e Localização */}
      <p
        className="text-base sm:text-lg text-gray-300 text-center mb-2"
        data-test-id="experience-period"
      >
        {experience.period}
      </p>
      <p
        className="text-sm sm:text-base text-gray-400 italic mb-12"
        data-test-id="experience-location"
      >
        Location: {experience.location}
      </p>

      {/* Projetos */}
      <div className="w-full max-w-5xl space-y-12" data-test-id="projects-list">
        {experience.fullDescription.map((project, index) => (
          <section
            key={index}
            data-test-id={`project-${index}`}
            aria-labelledby={`project-title-${index}`}
          >
            <h2
              className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-4"
              id={`project-title-${index}`}
              data-test-id={`project-title-${index}`}
            >
              {project.project}
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              <strong>Position:</strong> {project.position}
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              <strong>Start:</strong> {project.startDate}
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              <strong>End:</strong> {project.endDate}
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              {project.description}
            </p>

            {/* Galeria */}
            {project.gallery && project.gallery.length > 0 && (
              <div
                className="mt-6"
                data-test-id={`project-gallery-${index}`}
                aria-labelledby={`gallery-title-${index}`}
              >
                <h3
                  className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4"
                  id={`gallery-title-${index}`}
                  data-test-id={`gallery-title-${index}`}
                >
                  Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((url, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative w-full h-64 sm:h-80"
                      data-test-id={`gallery-image-${index}-${imgIndex}`}
                    >
                      <Image
                        src={url}
                        alt={`${experience.company} - ${
                          project.project
                        } image ${imgIndex + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        priority={imgIndex === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Botão para voltar ao final */}
      <Link
        href="/resume"
        className="mt-12 text-yellow-500 border border-yellow-500 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-yellow-500 hover:text-gray-900 transition"
        data-test-id="back-to-resume-bottom"
        aria-label="Back to Resume Timeline"
      >
        Back to Timeline
      </Link>
    </div>
  );
}
