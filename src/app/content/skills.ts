export interface SkillItem {
  name: string;
  items: { text: string; description: string }[];
}

export interface SkillCategory {
  category: string;
  subcategories: SkillItem[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Software Development',
    subcategories: [
      {
        name: 'Programming Languages',
        items: [
          {
            text: 'JavaScript',
            description:
              'JavaScript has been a core part of my professional journey since 2017. Widely used in my testing projects, I also deepened my expertise through a bootcamp in 2022. It remains one of my favorite languages for its versatility and ubiquity in web development.',
          },
          {
            text: 'TypeScript',
            description:
              'TypeScript is my primary choice for most frameworks and web projects. The added benefits of static typing and maintainability have made it a staple in my development work.',
          },
          {
            text: 'Python',
            description:
              'I am currently exploring Python and using it for one of my personal backend projects. Its simplicity and rich ecosystem make it an exciting choice for future endeavors.',
          },
          {
            text: 'C#',
            description:
              'C# was one of the first languages I used professionally, particularly in projects involving .NET and Azure. While not my main language now, I appreciate its robust features and integration with tools like Visual Studio.',
          },
          {
            text: 'Java',
            description:
              'I had a brief professional stint with Java and found it to be a powerful but verbose language. While not my preferred tool, I value its reliability for enterprise applications.',
          },
          {
            text: 'VBScript',
            description:
              'VBScript marked the beginning of my professional journey in 2010, primarily used for scripting with tools like QTP. Although I have not used it since, it laid the foundation for my career in testing.',
          },
        ],
      },
      {
        name: 'Frontend',
        items: [
          {
            text: 'HTML',
            description:
              'Currently, I teach HTML basics to my mentees as part of a mentorship program. I also offer a course available at https://brunomachadors.github.io/webclass/.',
          },
          {
            text: 'CSS',
            description:
              'CSS is the foundation of web styling. I enjoy creating visually appealing components and also teach CSS as part of my mentorship program, available at https://brunomachadors.github.io/webclass/.',
          },
          {
            text: 'Redux',
            description:
              'Learned during the Mindera bootcamp in 2023. Though not widely used in my current projects, I implemented Redux in my Pokedex project.',
          },
          {
            text: 'Tailwind',
            description:
              'Tailwind is one of my favorite tools for web development. This site and my automated testing playground were built using Tailwind.',
          },
          {
            text: 'Vercel',
            description:
              'An excellent hosting solution for personal projects with minimal cost. Ideal for starting new projects.',
          },
          {
            text: 'Next.js',
            description:
              'My favorite React framework for its dynamic routing and integration with tools like Vercel, Tailwind, and styled-components. This site was developed with Next.js.',
          },
          {
            text: 'React',
            description:
              'A popular JavaScript library that I frequently use to create dynamic user interfaces.',
          },
          {
            text: 'Vite',
            description:
              'A fast, lightweight build tool and development server, perfect for starting new projects.',
          },
        ],
      },
      {
        name: 'Version Control',
        items: [
          {
            text: 'Git',
            description:
              'A fundamental tool for all my projects. I often create versioning strategies to ensure smooth collaboration in team settings.',
          },
          {
            text: 'GitHub',
            description:
              'My preferred platform for hosting code. Most of my projects are on GitHub, with the exception of work-specific repositories.',
          },
          {
            text: 'Bitbucket',
            description:
              'Used at Mindera for a client project. Bitbucket integrates well with Jira and provides robust features for team collaboration.',
          },
          {
            text: 'GitLab',
            description:
              'Worked with GitLab across various companies. It is a reliable platform, and I’ve heard good things about its integration with tools like Copilot.',
          },
        ],
      },
    ],
  },
  {
    category: 'Testing',
    subcategories: [
      {
        name: 'Frameworks',
        items: [
          {
            text: 'Playwright',
            description:
              'My go-to testing framework for web applications. I recommend it to all my students due to its excellent documentation and support.',
          },
          {
            text: 'Selenium',
            description:
              'A robust, versatile tool for browser automation. I have used Selenium with C#, Java, and JavaScript since 2017.',
          },
          {
            text: 'Cypress',
            description:
              'A great tool for frontend testing with an impressive dashboard. While I don’t use it extensively due to high dashboard costs, I particularly like it for component testing.',
          },
        ],
      },
      {
        name: 'Tools',
        items: [
          {
            text: 'K6',
            description:
              'Implemented K6 in a client project to collect meaningful performance metrics, improving API response times.',
          },
          {
            text: 'Newman',
            description:
              'My favorite tool for running API tests. Easy integration with Postman collections makes it perfect for CI/CD pipelines.',
          },
          {
            text: 'Pa11y',
            description:
              'A straightforward accessibility testing tool, ensuring applications meet compliance standards.',
          },
          {
            text: 'Postman',
            description:
              'An easy-to-use tool for API testing. Postman allows for seamless collection sharing and chaining calls, though version control could be improved.',
          },
          {
            text: 'Jira',
            description:
              'The leading project management tool for ticket tracking and Agile workflows. I’ve used Jira extensively since 2017.',
          },
          {
            text: 'Zephyr',
            description:
              'A Jira plugin for managing test cases. It’s my go-to tool for test writing and reporting within Jira.',
          },
        ],
      },
      {
        name: 'Testing Practices',
        items: [
          {
            text: 'Manual',
            description:
              'Started with manual testing in 2010 and continue using it today, especially as part of exploratory testing phases.',
          },
          {
            text: 'Accessibility',
            description:
              'A strong advocate for accessibility practices. I have delivered multiple talks, including one for a diverse audience with disabilities.',
          },
          {
            text: 'Security',
            description:
              'Inspired by a software security incident, I deepened my knowledge in security testing and recently delivered a talk on this subject.',
          },
          {
            text: 'Performance',
            description:
              'Assessing performance has always been integral to my projects. I use tools like K6 for in-depth analysis.',
          },
          {
            text: 'Automation',
            description:
              'Began automating tests in 2009 with QTP. Automation has been my primary focus as a QAE.',
          },
          {
            text: 'Frontend',
            description:
              'Specializing in frontend validation, I ensure functionality, accessibility, and usability.',
          },
          {
            text: 'Backend',
            description:
              'Started testing backend systems with SOAP UI and later shifted focus to REST APIs. Now proficient with multiple tools.',
          },
          {
            text: 'Responsivity',
            description:
              'Ensuring seamless adaptation of applications to different screen sizes and devices is a core aspect of my web testing.',
          },
          {
            text: 'Portability',
            description:
              'Validating cross-platform compatibility using tools like Playwright.',
          },
          {
            text: 'Mobile',
            description:
              'Limited experience with mobile testing, but I am eager to expand my expertise in this area.',
          },
        ],
      },
    ],
  },
  {
    category: 'Certification',
    subcategories: [
      {
        name: 'Testing Certificates',
        items: [
          {
            text: 'CTFL',
            description:
              'Certified Tester Foundation Level - Essential concepts that laid the foundation for my expertise in software testing.',
          },
          {
            text: 'CTFL-AT',
            description:
              'Certified Tester Foundation Level - Agile Tester. Expanded my understanding of Agile testing methodologies.',
          },
        ],
      },
      {
        name: 'Agile Certificates',
        items: [
          {
            text: 'CSM',
            description:
              'Certified Scrum Master - Gained valuable insights into Agile practices, though I did not renew this certification.',
          },
        ],
      },
    ],
  },
  {
    category: 'Interpersonal',
    subcategories: [
      {
        name: 'Communication',
        items: [
          {
            text: 'Public Speaking',
            description:
              'Delivered presentations on accessibility and security testing to diverse audiences.',
          },
          {
            text: 'Didactic Explanations',
            description:
              'Experienced in teaching concepts through dynamic examples and patient repetition, currently teaching at Mindera Code Academy.',
          },
          {
            text: 'Talks',
            description:
              'Conducted talks on various topics, including security and accessibility testing for diverse audiences.',
          },
        ],
      },
      {
        name: 'Problem Solving',
        items: [
          {
            text: 'Commitment to Goals',
            description:
              'Adaptable and focused on achieving objectives, even under tight deadlines.',
          },
          {
            text: 'Critical Thinking',
            description:
              'Excels at analyzing and resolving complex challenges under pressure.',
          },
          {
            text: 'Creative Solutions',
            description:
              'Thrives on finding innovative ways to overcome obstacles.',
          },
        ],
      },
      {
        name: 'Mentoring',
        items: [
          {
            text: 'Career Transition',
            description:
              'Guided over five mentees in transitioning to testing careers, focusing on foundational knowledge.',
          },
          {
            text: 'Test Automation',
            description:
              'Designed resources and provide mentorship for automation testing practices.',
          },
        ],
      },
    ],
  },
  {
    category: 'Others',
    subcategories: [
      {
        name: 'Database',
        items: [
          {
            text: 'PostgreSQL',
            description:
              'Used extensively in my personal projects for its reliability and robustness.',
          },
          {
            text: 'DynamoDB',
            description:
              'Experience with DynamoDB during my time at Burberry. It’s a promising tool for scalable applications.',
          },
        ],
      },
      {
        name: 'Cloud',
        items: [
          {
            text: 'AWS',
            description:
              'Host for my personal projects, such as Petsauro. Experience with its diverse services in professional settings.',
          },
        ],
      },
      {
        name: 'Pipelines',
        items: [
          {
            text: 'GitHub Actions',
            description:
              'Frequently used for CI/CD in personal projects and teaching environments.',
          },
          {
            text: 'YAML',
            description:
              'A key tool for CI/CD pipelines and configuration, with growing expertise.',
          },
          {
            text: 'CI/CD',
            description:
              'Implemented pipelines to automate testing and streamline development workflows.',
          },
        ],
      },
    ],
  },
];
