'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PROJECTS } from '../content/projects';
import { projectStyles } from '../styles/projectStyles';
import LinkButton from '../components/Button/LinkButton';

export default function ProjectsPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string, sectionIndex: number) => {
    const key = `${title}-${sectionIndex}`;
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-7xl">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className={`flex flex-col sm:flex-row items-stretch border-8 ${
              projectStyles[project.style]
            } rounded-lg p-3 sm:p-4`}
          >
            {/* Logo Section */}
            <div className="flex items-center justify-center w-full sm:w-1/3 p-2 sm:p-4">
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-4 sm:p-6">
              <h3 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
                {project.title}
              </h3>
              <p className="mb-3 sm:mb-4 text-base sm:text-lg">
                {project.description}
              </p>
              {project.sections.map((section, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className={`w-full pb-3 sm:pb-4 border-b last:border-none ${
                    projectStyles[project.style].split(' ')[0]
                  }`}
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection(project.title, index)}
                  >
                    <span className="text-lg sm:text-2xl font-bold mt-1 sm:mt-2">
                      {section.title}
                    </span>
                    <span
                      className={`transform transition-transform duration-300 ${
                        openSection === `${project.title}-${index}`
                          ? 'rotate-180'
                          : ''
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                  {openSection === `${project.title}-${index}` && (
                    <div className="mt-2 text-sm sm:text-lg">
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
      <div className="mt-8">
        <LinkButton text="Go to Posts" href="/posts" />
      </div>
    </div>
  );
}
