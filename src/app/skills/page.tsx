'use client';

import { useState, useEffect } from 'react';
import SkillButton from '../components/Button/SkillButton';
import { SKILLS } from '../content/skills';
import LinkButton from '../components/Button/LinkButton';
import LoadingSpinner from '../components/Loading/Loading';

export default function SkillsPage() {
  const [selectedTab, setSelectedTab] = useState<string>('All'); // Default tab
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500); // Simulating data loading
    return () => clearTimeout(timeout);
  }, []);

  const categories =
    selectedTab === 'All'
      ? SKILLS.flatMap((category) => category.subcategories)
      : SKILLS.find((category) => category.category === selectedTab)
          ?.subcategories || [];

  const tabs = ['All', ...SKILLS.map((category) => category.category)];

  const handleSkillClick = (skill: string) => {
    setActiveSkill((prev) => (prev === skill ? null : skill));
  };

  if (isLoading) {
    return (
      <main
        className="flex items-center justify-center min-h-screen"
        aria-label="Loading Skills"
      >
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main
      className="flex flex-col items-center min-h-screen p-4 sm:p-8"
      data-test-id="skills-page"
      role="main"
      aria-labelledby="skills-page-title"
    >
      <h1 className="sr-only" id="skills-page-title">
        Skills Page
      </h1>

      {/* Tabs */}
      <div
        className="mb-8 w-full max-w-5xl px-4 sm:px-0"
        data-test-id="skills-tabs"
        role="tablist"
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`inline-block px-3 py-1 sm:px-4 sm:pt-2 text-sm sm:text-lg font-semibold border-b-2 text-center ${
                selectedTab === tab
                  ? 'text-yellow-500 border-yellow-500'
                  : 'text-gray-300 border-transparent'
              }`}
              onClick={() => setSelectedTab(tab)}
              data-test-id={`tab-${tab.toLowerCase()}`}
              role="tab"
              aria-selected={selectedTab === tab}
              aria-controls={`tab-panel-${tab.toLowerCase()}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="w-full max-w-5xl space-y-8" data-test-id="skills-content">
        {categories.map((subcategory, subIndex) => (
          <section
            key={subIndex}
            className="m-10 text-center"
            data-test-id={`subcategory-${subcategory.name.toLowerCase()}`}
            aria-labelledby={`subcategory-title-${subIndex}`}
          >
            <h3
              className="text-xl sm:text-4xl font-bold text-gray-300 mb-4"
              id={`subcategory-title-${subIndex}`}
              data-test-id={`subcategory-title-${subIndex}`}
            >
              {subcategory.name}
            </h3>
            <div
              className="flex flex-wrap gap-4 justify-center"
              data-test-id={`subcategory-items-${subIndex}`}
            >
              {subcategory.items.map(({ text, description }, itemIndex) => (
                <SkillButton
                  key={itemIndex}
                  text={text}
                  description={description}
                  isActive={activeSkill === text}
                  onClick={() => handleSkillClick(text)}
                  testId={`skill-button-${text.toLowerCase()}`}
                  aria-pressed={activeSkill === text}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Divider */}
      <div
        className="w-1/4 border-t border-gray-500 opacity-50 mt-12 mb-8"
        aria-hidden="true"
        data-test-id="skills-divider"
      />

      {/* Go to Projects Button */}
      <div
        data-test-id="projects-button-container"
        aria-label="Navigate to Projects section"
      >
        <LinkButton
          text="Go to Projects"
          href="/projects"
          data-test-id="projects-button"
          aria-label="Navigate to Projects page"
        />
      </div>
    </main>
  );
}
