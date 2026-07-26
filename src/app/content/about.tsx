const QA_CAREER_START = new Date(2007, 7, 1); // August 2007 - first testing role

const getYearsOfExperience = (from: Date = QA_CAREER_START): number => {
  const now = new Date();
  let years = now.getFullYear() - from.getFullYear();

  const hasNotReachedAnniversary =
    now.getMonth() < from.getMonth() ||
    (now.getMonth() === from.getMonth() && now.getDate() < from.getDate());

  if (hasNotReachedAnniversary) {
    years -= 1;
  }

  return years;
};

export const sections = [
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
    content: `I started working in QA by chance and quickly realized that I have a strong aptitude for it. With over ${getYearsOfExperience()} years of experience in testing, starting as an intern in August 2007, I have specialized in test automation since 2017.`,
  },
  {
    title: 'Collaboration and Mentoring',
    content:
      'I value building strong relationships with colleagues, fostering a collaborative work environment, and mentoring professionals in the testing field.',
  },
  {
    title: 'Teaching Experience',
    content: `
      Teacher at Mindera Code Academy from January 2025 to July 2026. I introduced students to software quality, covering functional and non-functional testing, automated testing with Playwright, and backend testing with Postman.

      As a final project, students tested the Petsauro project, applying test design and execution skills.
    `,
  },
  {
    title: 'Educational Background - Technology',
    content: (
      <div className="flex flex-col gap-4">
        <p className="pt-2">
          <strong>University:</strong> União Educacional de Brasília (UNEB)
        </p>
        <p className="pt-2">
          <strong>Course:</strong> Technologist in Information Technology
        </p>
        <p className="pt-2">
          <strong>Period:</strong> 2008 - 2010
        </p>
        <p className="pt-2">
          <strong>Description:</strong> Emphasis on Data Processing and
          Programming.
        </p>
      </div>
    ),
  },
  {
    title: 'Educational Background - Game Development',
    content: (
      <div className="flex flex-col gap-4">
        <p className="pt-2">
          <strong>University:</strong> Pontifícia Universidade Católica do Rio
          Grande do Sul (PUCRS)
        </p>
        <p className="pt-2">
          <strong>Course:</strong> Postgraduate in Game Development
        </p>
        <p className="pt-2">
          <strong>Period:</strong> 2011 - 2012
        </p>
        <p className="pt-2">
          Focused on Game Design, Programming, and 3D Modeling.
        </p>
      </div>
    ),
  },
];
