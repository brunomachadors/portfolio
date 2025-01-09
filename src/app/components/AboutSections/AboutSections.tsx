'use client';
import { sections } from '@/app/content/about';
import React, { useState } from 'react';

export default function AboutSections() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div
      className="flex flex-col items-start gap-6"
      data-test-id="about-sections"
    >
      <h1
        className="text-4xl sm:text-5xl font-bold text-yellow-500 text-center sm:text-left mb-4"
        data-test-id="about-title"
      >
        About Me
      </h1>

      <p
        className="text-lg sm:text-xl text-gray-300 mb-4"
        data-test-id="about-description"
      >
        I&apos;m Bruno Machado, a QA Engineer passionate about software
        development.
      </p>

      {sections.map((section, index) => (
        <section
          key={index}
          className="w-full pb-4 border-b border-yellow-500 cursor-pointer last:border-none px-0 mx-0"
          data-test-id={`section-${index}`}
          onClick={() => toggleSection(index)}
        >
          <header
            className="flex justify-between items-center"
            role="button"
            tabIndex={0}
            aria-expanded={openSection === index}
            aria-controls={`section-content-${index}`}
            data-test-id={`section-toggle-${index}`}
          >
            <h2
              className="text-lg sm:text-xl font-bold text-yellow-500"
              data-test-id={`section-title-${index}`}
              id={`section-title-${index}`}
            >
              {section.title}
            </h2>
            <span
              className={`transform transition-transform duration-300 ${
                openSection === index ? 'rotate-180' : ''
              }`}
              data-test-id={`toggle-icon-${index}`}
            >
              ▼
            </span>
          </header>
          {openSection === index && (
            <div
              className="mt-2 text-gray-300 text-base sm:text-lg"
              data-test-id={`section-content-${index}`}
              id={`section-content-${index}`}
            >
              {typeof section.content === 'string' ? (
                <p data-test-id={`section-text-${index}`}>{section.content}</p>
              ) : (
                <div data-test-id={`section-content-wrapper-${index}`}>
                  {React.Children.map(
                    section.content.props.children,
                    (child, childIndex) => (
                      <div
                        key={childIndex}
                        data-test-id={`section-content-${index}-line-${childIndex}`}
                      >
                        {child}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
