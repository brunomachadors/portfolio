// Bruno's first testing role started in August 2007. The About page renders the
// years of experience dynamically, so the expected value is derived here from
// the same reference date instead of being hardcoded.
const QA_CAREER_START_YEAR = 2007;
const QA_CAREER_START_MONTH = 7; // August (0-indexed)
const QA_CAREER_START_DAY = 1;

const getExpectedYearsOfExperience = (): number => {
  const now = new Date();
  const hasNotReachedAnniversary =
    now.getMonth() < QA_CAREER_START_MONTH ||
    (now.getMonth() === QA_CAREER_START_MONTH &&
      now.getDate() < QA_CAREER_START_DAY);

  return (
    now.getFullYear() - QA_CAREER_START_YEAR - (hasNotReachedAnniversary ? 1 : 0)
  );
};

// Home Page Data
export const HOME_DATA = {
  title: 'Welcome to my Portfolio',
  subtitle:
    'Explore my skills, experience, projects, and community work as a QA Engineer.',
  startButtonText: 'Start here',
  testimonialsTitle: 'Testimonials',
  educationTitle: 'Education',
  testimonialTitles: [
    'A complete learning journey',
    'Essential for my QA perspective',
    'Great mentor, excellent friend',
  ],
  educationTitles: [
    'Warm Up Manual Testing',
    'Warm Up Automated Tests - Playwright',
    'Backend Testing - Postman + Playwright',
    'Non-Functional Tests',
  ],
  apiCourseImageAlt:
    'Anton presents his comic book character story while Bruno watches the slides, created through orchestration of APIs during the Backend Testing course.',
  apiCourseSecondImageAlt:
    'Sofia presents her character in a cute image during the Backend Testing course final presentations.',
  apiCourseGalleryImageCount: 6,
  manualTestingGalleryImageCount: 3,
  frontendAutomationGalleryImageCount: 3,
  apiCourseGalleryPreviewCount: 2,
};

// Footer Data
export const FOOTER_DATA = {
  links: ['instagram', 'linkedin', 'github', 'medium', 'email'],
};

// Header Data
export const HEADER_DATA = {
  menuOptions: [
    'home',
    'about',
    'resume',
    'skills',
    'projects',
    'talks',
    'posts',
    'contacts',
  ],
};

// About Page Data
export const ABOUT_DATA = {
  aboutTitle: 'About Me',
  aboutDescription:
    "I'm Bruno Machado, a QA Engineer passionate about software development.",
  sections: [
    {
      title: 'Personal Information',
      content: [
        'Location: Porto, Portugal',
        'Nationality: Brazilian',
        'Year of Birth: 1986',
      ],
    },
    {
      title: 'My Journey into QA',
      content: `I started working in QA by chance and quickly realized that I have a strong aptitude for it. With over ${getExpectedYearsOfExperience()} years of experience in testing, starting as an intern in August 2007, I have specialized in test automation since 2017.`,
    },
    {
      title: 'Collaboration and Mentoring',
      content:
        'I value building strong relationships with colleagues, fostering a collaborative work environment, and mentoring professionals in the testing field.',
    },
    {
      title: 'Teaching Experience',
      content:
        'Teacher at Mindera Code Academy from January 2025 to July 2026. I introduced students to software quality, covering functional and non-functional testing, automated testing with Playwright, and backend testing with Postman. As a final project, students tested the Petsauro project, applying test design and execution skills.',
    },
    {
      title: 'Educational Background - Technology',
      content: [
        'University: União Educacional de Brasília (UNEB)',
        'Course: Technologist in Information Technology',
        'Period: 2008 - 2010',
        'Description: Emphasis on Data Processing and Programming.',
      ],
    },
    {
      title: 'Educational Background - Game Development',
      content: [
        'University: Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)',
        'Course: Postgraduate in Game Development',
        'Period: 2011 - 2012',
        'Focused on Game Design, Programming, and 3D Modeling.',
      ],
    },
  ],
};
