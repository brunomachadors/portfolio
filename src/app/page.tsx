'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import LinkButton from './components/Button/LinkButton';

type CourseGalleryImage = {
  src: string;
  alt: string;
};

type EducationItem = {
  title: string;
  year: string;
  status: string;
  description: string;
  gallery?: CourseGalleryImage[];
};

type SelectedCourseImage = {
  courseSlug: string;
  imageIndex: number;
};

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

const API_COURSE_GALLERY: CourseGalleryImage[] = [
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781007213/Portifolio/Code%20Academy%20API/Screenshot_2026-06-09_at_12.15.29_dzu7rz.png',
    alt: 'Anton presents his comic book character story while Bruno watches the slides, created through orchestration of APIs during the Backend Testing course.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781007213/Portifolio/Code%20Academy%20API/Screenshot_2026-06-09_at_12.18.39_uuk4co.png',
    alt: 'Sofia presents her character in a cute image during the Backend Testing course final presentations.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781007213/Portifolio/Code%20Academy%20API/Screenshot_2026-06-09_at_12.17.20_keohks.png',
    alt: 'Daniela Teixeira presents her Playwright test code during the Backend Testing course final presentations.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781007213/Portifolio/Code%20Academy%20API/Screenshot_2026-06-09_at_12.15.57_t6xyec.png',
    alt: 'Anton presents the code he created for his character in the API tests during the Backend Testing course.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781007213/Portifolio/Code%20Academy%20API/Screenshot_2026-06-09_at_12.16.19_gpe2jl.png',
    alt: 'Diogo presents his approach choices and shows the story of his character during the Backend Testing course.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781007213/Portifolio/Code%20Academy%20API/Screenshot_2026-06-09_at_12.18.09_tlqhpx.png',
    alt: 'Filipa presents her tests and recites the story of her character during the Backend Testing course.',
  },
];

const MANUAL_TESTING_GALLERY: CourseGalleryImage[] = [
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1741173239/Portifolio/Mindera/warmup1.jpg',
    alt: 'Students present their final manual testing projects in a hybrid class with remote and in-person participants.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1741173240/Portifolio/Mindera/warmup3.jpg',
    alt: 'Group of students presenting their final manual testing project.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1741173240/Portifolio/Mindera/warmup2.jpg',
    alt: 'Group of students presenting their final manual testing project during the course wrap-up.',
  },
];

const FRONTEND_AUTOMATION_GALLERY: CourseGalleryImage[] = [
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781008726/Portifolio/Mindera/Screenshot_2026-06-09_at_13.36.26_z8gicx.png',
    alt: 'Bruno watches the students present their final frontend automation projects.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781008725/Portifolio/Mindera/Screenshot_2026-06-09_at_13.37.38_cebvrb.png',
    alt: 'Gustavo presents the code from his final frontend automation project.',
  },
  {
    src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1781008725/Portifolio/Mindera/Screenshot_2026-06-09_at_13.37.13_mjfbea.png',
    alt: 'Diana presents her final frontend automation project.',
  },
];

const EDUCATION_ITEMS: EducationItem[] = [
  {
    title: 'Warm Up Manual Testing',
    year: '2025',
    status: 'Completed',
    description:
      'Introductory course focused on manual testing foundations, core quality concepts, and practical testing mindset development.',
    gallery: MANUAL_TESTING_GALLERY,
  },
  {
    title: 'Warm Up Automated Tests - Playwright',
    year: '2025',
    status: 'Completed',
    description:
      'Hands-on course covering automated testing with Playwright, helping students build confidence with modern browser automation.',
    gallery: FRONTEND_AUTOMATION_GALLERY,
  },
  {
    title: 'Backend Testing - Postman + Playwright',
    year: 'April 13 - May 6, 2026',
    status: 'Completed',
    description:
      'Course focused on backend testing practices using Postman and Playwright, combining API validation with practical automation workflows.',
    gallery: API_COURSE_GALLERY,
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

const COURSE_GALLERY_PREVIEW_COUNT = 2;

const getEducationItemSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export default function Home() {
  const [selectedCourseImage, setSelectedCourseImage] =
    useState<SelectedCourseImage | null>(null);
  const [expandedCourseGalleries, setExpandedCourseGalleries] = useState<
    Record<string, boolean>
  >({});
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const previousBodyOverflowRef = useRef<string>('');

  const selectedCourse =
    selectedCourseImage !== null
      ? EDUCATION_ITEMS.find(
          (item) => getEducationItemSlug(item.title) === selectedCourseImage.courseSlug
        )
      : null;
  const selectedGallery = selectedCourse?.gallery ?? [];
  const selectedGalleryImage =
    selectedCourseImage !== null
      ? selectedGallery[selectedCourseImage.imageIndex]
      : null;

  const showPreviousCourseImage = () => {
    if (!selectedCourseImage || selectedGallery.length === 0) {
      return;
    }

    const previousIndex =
      (selectedCourseImage.imageIndex - 1 + selectedGallery.length) %
      selectedGallery.length;

    setSelectedCourseImage({
      courseSlug: selectedCourseImage.courseSlug,
      imageIndex: previousIndex,
    });
  };

  const showNextCourseImage = () => {
    if (!selectedCourseImage || selectedGallery.length === 0) {
      return;
    }

    const nextIndex =
      (selectedCourseImage.imageIndex + 1) % selectedGallery.length;

    setSelectedCourseImage({
      courseSlug: selectedCourseImage.courseSlug,
      imageIndex: nextIndex,
    });
  };

  useEffect(() => {
    if (!selectedCourseImage) {
      return;
    }

    previousFocusedElementRef.current =
      document.activeElement as HTMLElement | null;
    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalCloseButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCourseImage(null);
        return;
      }

      if (event.key === 'ArrowLeft') {
        if (selectedGallery.length === 0) {
          return;
        }

        const previousIndex =
          (selectedCourseImage.imageIndex - 1 + selectedGallery.length) %
          selectedGallery.length;

        setSelectedCourseImage({
          courseSlug: selectedCourseImage.courseSlug,
          imageIndex: previousIndex,
        });
      }

      if (event.key === 'ArrowRight') {
        if (selectedGallery.length === 0) {
          return;
        }

        const nextIndex =
          (selectedCourseImage.imageIndex + 1) % selectedGallery.length;

        setSelectedCourseImage({
          courseSlug: selectedCourseImage.courseSlug,
          imageIndex: nextIndex,
        });
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = [
          modalCloseButtonRef.current,
          document.querySelector<HTMLButtonElement>(
            '[data-testid="education-image-modal-prev"]'
          ),
          document.querySelector<HTMLButtonElement>(
            '[data-testid="education-image-modal-next"]'
          ),
        ].filter((element): element is HTMLButtonElement => element !== null);

        if (focusableElements.length === 0) {
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;

        if (event.shiftKey && activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousBodyOverflowRef.current;
      previousFocusedElementRef.current?.focus();
    };
  }, [selectedCourseImage, selectedGallery]);

  return (
    <>
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

                  <p className="mt-5 text-sm text-yellow-400">
                    {testimonial.author}
                  </p>
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
              {EDUCATION_ITEMS.map((item) => {
                const itemSlug = getEducationItemSlug(item.title);
                const isGalleryExpanded = expandedCourseGalleries[itemSlug];

                return (
                  <article
                    key={`${item.title}-${item.year}`}
                    className="rounded-2xl border border-yellow-500/70 bg-neutral-950 p-6 sm:p-8"
                    data-testid={`education-${itemSlug}`}
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

                    {item.gallery && item.gallery.length > 0 && (
                      <div
                        className="mt-6"
                        data-testid={`education-gallery-${itemSlug}`}
                      >
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {(isGalleryExpanded
                            ? item.gallery
                            : item.gallery.slice(0, COURSE_GALLERY_PREVIEW_COUNT)
                          ).map((image, imageIndex) => (
                            <button
                              key={image.src}
                              type="button"
                              className="group relative block h-44 w-full cursor-zoom-in overflow-hidden rounded-lg border border-yellow-500/50 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black sm:h-52"
                              onClick={() =>
                                setSelectedCourseImage({
                                  courseSlug: itemSlug,
                                  imageIndex,
                                })
                              }
                              aria-label={`Open course image: ${image.alt}`}
                              data-testid={`education-gallery-button-${itemSlug}-${imageIndex}`}
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            </button>
                          ))}
                        </div>

                        {item.gallery.length > COURSE_GALLERY_PREVIEW_COUNT && (
                          <button
                            type="button"
                            className="mt-4 rounded-full border border-yellow-500 px-4 py-2 text-xs uppercase tracking-wide text-yellow-400 transition hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                            onClick={() =>
                              setExpandedCourseGalleries((currentState) => ({
                                ...currentState,
                                [itemSlug]: !currentState[itemSlug],
                              }))
                            }
                            aria-expanded={Boolean(isGalleryExpanded)}
                            data-testid={`education-gallery-toggle-${itemSlug}`}
                          >
                            {isGalleryExpanded
                              ? 'Show fewer photos'
                              : 'Show all photos'}
                          </button>
                        )}
                      </div>
                    )}

                    <a
                      href="https://minderacodeacademy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block text-xs sm:text-sm uppercase tracking-wide text-gray-400 underline underline-offset-4 hover:text-yellow-400"
                    >
                      Mindera Code Academy
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded course image"
          data-testid="education-image-modal"
          onClick={() => setSelectedCourseImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 text-3xl leading-none text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onClick={() => setSelectedCourseImage(null)}
              aria-label="Close expanded image"
              data-testid="education-image-modal-close"
              ref={modalCloseButtonRef}
            >
              ×
            </button>

            <button
              type="button"
              className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-500 bg-black/80 text-2xl text-yellow-400 backdrop-blur-sm transition-transform hover:scale-105 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:h-14 sm:w-14 lg:-left-20"
              onClick={showPreviousCourseImage}
              aria-label="Show previous image"
              data-testid="education-image-modal-prev"
            >
              ←
            </button>

            <button
              type="button"
              className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-yellow-500 bg-black/80 text-2xl text-yellow-400 backdrop-blur-sm transition-transform hover:scale-105 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 sm:h-14 sm:w-14 lg:-right-20"
              onClick={showNextCourseImage}
              aria-label="Show next image"
              data-testid="education-image-modal-next"
            >
              →
            </button>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-lg bg-black">
              <Image
                src={selectedGalleryImage.src}
                alt={selectedGalleryImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <p className="mt-4 text-center text-sm leading-6 text-gray-200 sm:text-base">
              {selectedGalleryImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
