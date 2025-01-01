'use client';

import { useState } from 'react';
import SkillButton from '../components/Button/SkillButton';
import { SKILLS } from '../content/skills';
import LinkButton from '../components/Button/LinkButton';

export default function SkillsPage() {
  const [selectedTab, setSelectedTab] = useState<string>('All'); // Aba "All" selecionada por padrão
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const categories =
    selectedTab === 'All'
      ? SKILLS.flatMap((category) => category.subcategories)
      : SKILLS.find((category) => category.category === selectedTab)
          ?.subcategories || [];

  const tabs = ['All', ...SKILLS.map((category) => category.category)];

  const handleSkillClick = (skill: string) => {
    setActiveSkill((prev) => (prev === skill ? null : skill));
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 sm:p-8">
      {/* Tabs */}
      <div className="mb-8 w-full max-w-5xl px-4 sm:px-0">
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
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="w-full max-w-5xl space-y-8">
        {categories.map((subcategory, subIndex) => (
          <div key={subIndex} className="m-10 text-center">
            <h3 className="text-xl sm:text-4xl font-bold text-gray-300 mb-4">
              {subcategory.name}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {subcategory.items.map(({ text, description }, itemIndex) => (
                <SkillButton
                  key={itemIndex}
                  text={text}
                  description={description}
                  isActive={activeSkill === text}
                  onClick={() => handleSkillClick(text)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divisória - Final das Skills */}
      <div className="w-1/4 border-t border-gray-500 opacity-50 mt-12 mb-8" />

      {/* Go to Projects Button */}
      <div>
        <LinkButton text="Go to Projects" href="/projects" />
      </div>
    </div>
  );
}
