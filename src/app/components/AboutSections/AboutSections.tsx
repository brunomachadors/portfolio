'use client';
import { useState } from 'react';

const sections = [
  {
    title: 'Personal Information',
    content: (
      <div>
        <p>
          <strong>Location:</strong> Porto, Portugal
        </p>
        <p>
          <strong>Nationality:</strong> Brazilian
        </p>
        <p>
          <strong>Year of Birth:</strong> 1986
        </p>
      </div>
    ),
  },
  {
    title: 'My Journey into QA',
    content:
      'I started working in QA by chance and quickly realized that I have a strong aptitude for it. With over 17 years of experience in testing, I have specialized in test automation since 2017.',
  },
  {
    title: 'Focus on Shift Left Practices',
    content:
      'I actively promote early involvement of QA in the development process, collaborating with developers to implement test frameworks and identify potential issues before they arise.',
  },
  {
    title: 'Collaboration and Mentoring',
    content:
      'I value building strong relationships with colleagues, fostering a collaborative work environment, and mentoring professionals in the testing field.',
  },
];

export default function AboutSections() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start gap-6">
      {/* Título */}
      <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 text-center sm:text-left mb-4">
        About Me
      </h1>

      {/* Descrição Inicial */}
      <p className="text-lg sm:text-xl text-gray-300 mb-4">
        I&apos;m Bruno Machado, a QA Engineer passionate about software
        development, test automation, accessibility, and Shift Left practices.
      </p>

      {/* Sessões Expansíveis */}
      {sections.map((section, index) => (
        <div
          key={index}
          onClick={() => toggleSection(index)}
          className="w-full pb-4 border-b border-yellow-500 cursor-pointer last:border-none px-0 mx-0"
          id={`section${index}`}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg sm:text-xl font-bold text-yellow-500">
              {section.title}
            </span>
            <span
              className={`transform transition-transform duration-300 ${
                openSection === index ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </div>
          {openSection === index && (
            <div className="mt-2 text-gray-300 text-base sm:text-lg">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
