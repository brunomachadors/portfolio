import { JSX } from 'react/jsx-runtime';
import { ProjectStyle } from '../styles/projectStyles';

export interface Project {
  title: string;
  description: string;
  style: ProjectStyle;
  logo: string;
  sections: {
    title: string;
    content: string | JSX.Element;
  }[];
}

export const PROJECTS: Project[] = [
  {
    title: 'BugBuster',
    description:
      'BugBuster is a mentorship platform designed for software testing professionals or those transitioning into the field. The platform provides tailored guidance to help individuals enhance their skills and excel in the software testing domain.',
    style: 'BugBuster',
    logo: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1735765437/Portifolio/projects/logo/logobugbuster.png',
    sections: [
      {
        title: 'Career Transition',
        content:
          'BugBuster offers a structured program for individuals moving into the software testing field. With personalized plans combining theory and practice, participants are equipped with the skills needed to stand out as proficient testers.',
      },
      {
        title: 'Test Automation Specialization',
        content:
          'For those already in the field, BugBuster provides focused mentorship on test automation. Participants learn advanced techniques and best practices to become specialists in automation testing.',
      },
      {
        title: 'Professional Advancement',
        content:
          'BugBuster helps experienced professionals elevate their careers through advanced specialization programs. The mentorship focuses on developing a strong foundation in testing methodologies and leadership in the field.',
      },
      {
        title: 'Visit the Project',
        content: (
          <a
            href="https://brunomachadors.github.io/bugbuster/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            BugBuster Website
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
    title: 'Pokedex',
    description:
      'A Pokedex application inspired by the Pokémon anime and games, created as the final project during the Mindera Code Academy bootcamp.',
    style: 'Pokedex',
    logo: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1735765283/Portifolio/projects/logo/pokelogo.png',
    sections: [
      {
        title: 'Features',
        content: (
          <ul className="list-disc pl-4">
            <li>
              Pokémon List: Displays all available Pokémon with detailed
              information styled according to their type.
            </li>
            <li>
              Pokémon Types: Lists all types with details like strengths,
              weaknesses, and immunities.
            </li>
            <li>
              Items: Provides information such as item images, descriptions, and
              properties.
            </li>
            <li>
              Regions: Includes maps and details about each region, its
              generation, and related game versions.
            </li>
            <li>
              Fossils: A special section dedicated to Pokémon fossils, created
              as a request by my friend Luís Moreira.
            </li>
          </ul>
        ),
      },
      {
        title: 'Technologies Used',
        content:
          'The project was developed using React, Vite, and styled-components. It utilizes Redux for efficient state management and is hosted on GitHub Pages.',
      },
      {
        title: 'Visit the Project',
        content: (
          <a
            href="https://brunomachadors.github.io/pokedex/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Pokedex Website
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
