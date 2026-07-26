import { JSX } from 'react/jsx-runtime';
import { ProjectStyle } from '../styles/projectStyles';

export interface Project {
  title: string;
  description: string;
  style: ProjectStyle;
  logo: string;
  logoClassName?: string;
  sections: {
    title: string;
    content: string | JSX.Element;
  }[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Adventurers Guild',
    description:
      'A fantasy-themed API portal inspired by Dungeons & Dragons, designed as an interactive codex with guides, documentation, and immersive UI for exploring RPG resources and character systems.',
    style: 'AdventurersGuild',
    logo: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1776961236/adventurers/ChatGPT_Image_26_de_mar._de_2026_10_47_27_v6yuq8.png',
    logoClassName: 'scale-150 sm:scale-[1.85]',
    sections: [
      {
        title: 'Overview',
        content:
          'Adventurers Guild is an API portal with an immersive frontend inspired by tabletop RPGs and Dungeons & Dragons, presenting technical resources through a worldbuilding-oriented experience.',
      },
      {
        title: 'Experience Direction',
        content:
          'The documentation is treated like an illustrated codex, guiding users through attributes, skills, classes, species, spells, equipment, and character systems in a more exploratory way.',
      },
      {
        title: 'Visual Style',
        content:
          'The interface leans into a fantasy codex and medieval grimoire aesthetic, using parchment surfaces, leather tones, ornamental framing, and warm contrast to reinforce the setting.',
      },
      {
        title: 'Current Status',
        content:
          'More details, links, and final visual assets will be added later as the project evolves.',
      },
      {
        title: 'Visit the Project',
        content: (
          <a
            href="https://adventurers-guild-api.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Adventurers Guild Website
          </a>
        ),
      },
    ],
  },
  {
    title: 'DungeonTrack',
    description:
      'A web application for tabletop RPG groups to organize their campaigns, record session history, and keep characters and players documented in one place, so that a story told over months does not end up scattered across notebooks and chat threads.',
    style: 'DungeonTrack',
    logo: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1784282505/DungeonTrack/logo_aarofz.png',
    sections: [
      {
        title: 'The Problem',
        content:
          'Long RPG campaigns lose their own history. Session notes end up spread across notebooks, chat messages, and spreadsheets, and by the time a group returns to the table nobody remembers what happened three sessions ago. DungeonTrack gives that history a single home.',
      },
      {
        title: 'Features',
        content:
          'Campaign organization, session history, adventure logs, character sheets and progression, player management, and search across everything a group has recorded.',
      },
      {
        title: 'Technologies Used',
        content:
          'Built with Next.js, React, and TypeScript, styled with Tailwind CSS, using Clerk for authentication and Neon Postgres for data persistence.',
      },
      {
        title: 'Design and Documentation',
        content:
          'The project has its own design system built around a parchment, burgundy, and gold palette, plus architecture decision records and written handoffs for each feature. AI agents work from that documentation, following specialized profiles for architecture, frontend, API, and database work.',
      },
      {
        title: 'Collaboration',
        content:
          'Developed together with Guilherme Savaget, and currently the project where I spend most of my personal development time.',
      },
      {
        title: 'Visit the Project',
        content: (
          <a
            href="https://dungeontrack.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            DungeonTrack Website
          </a>
        ),
      },
    ],
  },
  {
    title: 'Petsauro',
    description:
      'A pet management platform designed to make life easier for pet owners.',
    style: 'Petsauro',
    logo: 'https://res.cloudinary.com/dnaznxyav/image/upload/v1734008722/banner/jyv2fuo1bbvgetvlcb2g.png',
    sections: [
      {
        title: 'Features',
        content: (
          <ul className="list-disc pl-4">
            <li>Pet registration</li>
            <li>Data control</li>
            <li>Weight tracking</li>
            <li>Appointment notifications (e.g., vaccinations)</li>
          </ul>
        ),
      },
      {
        title: 'Future Features',
        content: (
          <ul className="list-disc pl-4">
            <li>Pet photo uploads</li>
            <li>Chip and document information registration</li>
            <li>Pet-friendly location services</li>
          </ul>
        ),
      },
      {
        title: 'Technologies Used',
        content:
          'Developed with Next.js, styled-components, React, and TypeScript for the frontend, and Python with Flask for the backend.',
      },
      {
        title: 'Visit the Project',
        content: (
          <a
            href="https://petsauro.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Petsauro Website
          </a>
        ),
      },
    ],
  },
  {
    title: 'Playground',
    description:
      'A platform with various challenges to practice test automation in real-world scenarios.',
    style: 'Playground',
    logo: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1735759182/Portifolio/projects/logo/playground.png',
    sections: [
      {
        title: 'Challenges',
        content: (
          <ul className="list-disc pl-4">
            <li>Login automation</li>
            <li>Form submission</li>
            <li>Validation of dynamic tables with API data</li>
            <li>To-do list interactions</li>
          </ul>
        ),
      },
      {
        title: 'Technologies Used',
        content:
          'The platform is built with Tailwind CSS, TypeScript, and Next.js to ensure a modern and responsive experience.',
      },
      {
        title: 'Visit the Project',
        content: (
          <a
            href="https://playground-drab-six.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 underline"
          >
            Playground Website
          </a>
        ),
      },
    ],
  },
  {
    title: 'Food Hunter',
    description:
      "A creative project inspired by culinary shows like Chef's Table and No Reservations, aiming to explore gastronomy and cultural aspects through restaurant visits.",
    style: 'FoodHunter',
    logo: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1735762712/Portifolio/projects/logo/logofoodhunter.png',
    sections: [
      {
        title: 'Overview',
        content:
          'Food Hunter was a personal project showcasing diverse cuisines and interviewing chefs to highlight cultural and gastronomic aspects.',
      },
      {
        title: 'My Role',
        content:
          'Managed all aspects of the project, including scheduling, recording, sound capturing, lighting, presenting, editing, launching, and promoting on both the website and Instagram.',
      },
      {
        title: 'Achievements',
        content:
          'The project gained a dedicated audience by combining gastronomy with cultural exploration, delivering engaging visuals and storytelling. The channel has over 1.7K subscribers, 305.1K total views, and 11K watch hours across 51 published videos.',
      },
      {
        title: 'Platform',
        content: (
          <a
            href="https://www.youtube.com/@TheFoodHunter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            Visit Food Hunter on YouTube
          </a>
        ),
      },
    ],
  },
];
