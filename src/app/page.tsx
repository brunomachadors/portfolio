'use client';
import Image from 'next/image';
import LinkButton from './components/Button/LinkButton';

const TESTIMONIALS = [
  {
    image:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1729379516/BUGBUSTER/kkyesbujstwuciybdgsp.jpg',
    alt: 'Karina Yamashita - Engineer who transitioned into software testing.',
    title: 'A complete learning journey',
    quote:
      'Bruno is an exceptional mentor. Taking part in the mentorship has been a complete learning journey, where theory meets practice in a dynamic and inspiring way. Besides gaining new skills, I developed a stronger testing mindset. Highly recommended!',
    author:
      'Karina Yamashita - Engineer who transitioned into software testing',
  },
  {
    image:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1729446850/mypr5cj8jmyp2heemar5.jpg',
    alt: 'Raquel Gomes - Phone retail store manager who transitioned into software testing.',
    title: 'Essential for my QA perspective',
    quote:
      'With clear teaching and practical examples, Bruno simplified complex concepts and helped me apply good practices, which increased my confidence. He also tailored the mentorship to my needs, and that made all the difference in my learning.',
    author:
      'Raquel Gomes - Phone retail store manager who transitioned into software testing',
  },
  {
    image:
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1729337224/BUGBUSTER/nbgn3mztpbf1lwzdskld.jpg',
    alt: 'Luís Moreira - MSc in Electrical Engineering, autistic person with Asperger syndrome.',
    title: 'Great mentor, excellent friend',
    quote:
      'Since I started working with him, Bruno has not only been a great mentor, but also become an excellent friend. We have learned a lot from each other.',
    author:
      'Luís Moreira - MSc in Electrical Engineering, autistic person with Asperger syndrome',
  },
];

const EDUCATION_ITEMS = [
  {
    title: 'Warm Up Manual Testing',
    year: '2025',
    status: 'Completed',
    description:
      'Introductory course focused on manual testing foundations, core quality concepts, and practical testing mindset development.',
  },
  {
    title: 'Warm Up Automated Tests - Playwright',
    year: '2025',
    status: 'Completed',
    description:
      'Hands-on course covering automated testing with Playwright, helping students build confidence with modern browser automation.',
  },
  {
    title: 'Backend Testing - Postman + Playwright',
    year: 'April 13 - May 6, 2026',
    status: 'Current',
    description:
      'Course focused on backend testing practices using Postman and Playwright, combining API validation with practical automation workflows.',
  },
  {
    title: 'Non-Functional Tests',
    year: 'September 2026',
    status: 'In progress',
    description:
      'Ongoing course exploring non-functional testing topics such as performance, accessibility, and broader quality characteristics.',
  },
];

const educationStatusStyles: Record<string, string> = {
  Completed: 'border-green-500 text-green-400 bg-green-500/10',
  Current: 'border-yellow-500 text-yellow-400 bg-yellow-500/10',
  'In progress': 'border-red-500 text-red-400 bg-red-500/10',
};

export default function Home() {
  return (
    <main
      className="min-h-[85vh] px-6 sm:px-8"
      role="main"
      aria-labelledby="page-title"
    >
      <div className="max-w-6xl mx-auto" data-testid="home-container">
        <section className="flex min-h-screen items-center justify-center">
          <div className="text-center max-w-5xl">
            <h1
              id="page-title"
              className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-6"
              data-testid="home-title"
            >
              Welcome to my Portfolio
            </h1>
            <p
              className="text-lg sm:text-2xl mb-8"
              data-testid="home-description"
              aria-label="Introduction to portfolio content"
            >
              Explore my skills, experience, projects, and community work as a
              QA Engineer.
            </p>
            <LinkButton
              text="Start here"
              href="/about"
              data-testid="home-start-button"
              aria-label="Navigate to About page"
            />
          </div>
        </section>
      </div>

      <section
        className="-mx-6 flex min-h-screen items-center bg-gradient-to-b from-black via-[rgba(250,204,21,0.88)] to-black px-6 py-10 text-white sm:-mx-8 sm:px-8 sm:py-12"
        aria-labelledby="testimonials-title"
        data-testid="testimonials-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="testimonials-title"
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Testimonials
            </h2>
            <p className="text-sm sm:text-lg text-white/85 mt-3 max-w-3xl mx-auto">
              A few words from people I have supported through mentorship and
              learning journeys in software quality.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <article
                key={testimonial.author}
                className="rounded-2xl border-4 border-black bg-black p-6 sm:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
                data-testid={`testimonial-${testimonial.author
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-black">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {testimonial.title}
                  </h3>
                </div>

                <blockquote className="text-white/90 text-sm sm:text-base leading-7">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <p className="mt-5 text-sm text-yellow-400">{testimonial.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="-mx-6 flex min-h-screen items-center bg-black px-6 py-14 sm:-mx-8 sm:px-8"
        aria-labelledby="education-title"
        data-testid="education-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="education-title"
              className="text-3xl sm:text-4xl font-bold text-yellow-500"
            >
              Education
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 mt-3 max-w-3xl mx-auto">
              Courses delivered through Mindera Code Academy, focused on
              building practical software quality skills.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {EDUCATION_ITEMS.map((item) => (
              <article
                key={`${item.title}-${item.year}`}
                className="rounded-2xl border border-yellow-500/70 bg-neutral-950 p-6 sm:p-8"
                data-testid={`education-${item.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')}`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-400">
                      {item.year}
                    </p>
                  </div>
                  <span
                    className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs uppercase tracking-wide ${
                      educationStatusStyles[item.status] ??
                      'border-gray-500 text-gray-300 bg-gray-500/10'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-7 text-gray-200">
                  {item.description}
                </p>

                <a
                  href="https://minderacodeacademy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-xs sm:text-sm uppercase tracking-wide text-gray-400 underline underline-offset-4 hover:text-yellow-400"
                >
                  Mindera Code Academy
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
