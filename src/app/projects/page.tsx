'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { PROJECTS } from '../content/projects';
import { projectStyles } from '../styles/projectStyles';
import LinkButton from '../components/Button/LinkButton';
import LoadingSpinner from '../components/Loading/Loading';

export default function ProjectsPage() {
  const [isClient, setIsClient] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSection = (title: string, sectionIndex: number) => {
    const key = `${title}-${sectionIndex}`;
    setOpenSection(openSection === key ? null : key);
  };

  if (!isClient) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8"
      data-testid="projects-page"
      role="main"
      aria-labelledby="projects-page-title"
    >
      <h1
        id="projects-page-title"
        className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-6"
        data-testid="projects-title"
      >
        Projects
      </h1>

      <div
        className="flex flex-col gap-6 sm:gap-8 w-full max-w-7xl"
        data-testid="projects-container"
      >
        {PROJECTS.map((project, projectIndex) => (
          <div
            key={project.title}
            className={`flex flex-col sm:flex-row items-stretch border-8 ${
              projectStyles[project.style]
            } rounded-lg p-3 sm:p-4`}
            data-testid={`project-${projectIndex}`}
          >
            {/* Logo Section */}
            <div
              className="flex items-center justify-center w-full sm:w-1/3 p-2 sm:p-4"
              data-testid={`project-logo-${projectIndex}`}
            >
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={300}
                height={300}
                className="rounded-lg"
                aria-labelledby={`project-title-${projectIndex}`}
              />
            </div>

            {/* Content Section */}
            <div
              className="flex flex-col flex-1 p-4 sm:p-6"
              data-testid={`project-content-${projectIndex}`}
            >
              <h3
                id={`project-title-${projectIndex}`}
                className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4"
                data-testid={`project-title-${projectIndex}`}
              >
                {project.title}
              </h3>
              <p
                className="mb-3 sm:mb-4 text-base sm:text-lg"
                data-testid={`project-description-${projectIndex}`}
              >
                {project.description}
              </p>
              {project.sections.map((section, sectionIndex) => (
                <div
                  key={`${project.title}-${sectionIndex}`}
                  className={`w-full pb-3 sm:pb-4 border-b last:border-none ${
                    projectStyles[project.style].split(' ')[0]
                  }`}
                  data-testid={`project-section-${projectIndex}-${sectionIndex}`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection(project.title, sectionIndex)}
                    aria-expanded={
                      openSection === `${project.title}-${sectionIndex}`
                    }
                    aria-controls={`section-content-${projectIndex}-${sectionIndex}`}
                    data-testid={`section-toggle-${projectIndex}-${sectionIndex}`}
                  >
                    <span className="text-lg sm:text-2xl font-bold mt-1 sm:mt-2">
                      {section.title}
                    </span>
                    <span
                      className={`transform transition-transform duration-300 ${
                        openSection === `${project.title}-${sectionIndex}`
                          ? 'rotate-180'
                          : ''
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                  {openSection === `${project.title}-${sectionIndex}` && (
                    <div
                      id={`section-content-${projectIndex}-${sectionIndex}`}
                      className="mt-2 text-sm sm:text-lg"
                      data-testid={`section-content-${projectIndex}-${sectionIndex}`}
                    >
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Go to Posts Button */}
      <div
        className="mt-8"
        data-testid="posts-button-container"
        aria-label="Navigate to Posts Page"
      >
        <LinkButton
          text="Go to Posts"
          href="/posts"
          data-testid="posts-button"
          aria-label="Go to Posts page"
        />
      </div>
    </main>
  );
}
