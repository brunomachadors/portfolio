'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import LinkButton from '../components/Button/LinkButton';

interface TalkImage {
  src: string;
  alt: string;
}

interface Talk {
  title: string;
  event: string;
  date: string;
  location?: string;
  description: string;
  tags: string[];
  gallery: TalkImage[];
}

const TALKS: Talk[] = [
  {
    title: 'The Death of the Test Analyst',
    event: 'BrowserStack QA Meetup - Lisbon',
    date: 'February 11, 2026',
    location:
      'Simplifae - R. Gen. Firmino Miguel 6 Floor -2, Escritório B, 1600-300 Lisbon',
    description:
      'A playful investigative talk about the evolution of QA, using the idea of discovering the suspects and cause of death of the Test Analyst to explore how the role has moved beyond a traditional model into a more strategic, technical, and collaborative position.',
    tags: ['Quality', 'Career', 'Community'],
    gallery: [
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029257/Portifolio/eventos/Browser%20Stack/1770987240733_xmuydp.jpg',
        alt: 'Bruno dressed as an investigator during The Death of the Test Analyst talk at the BrowserStack QA Meetup in Lisbon.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029260/Portifolio/eventos/Browser%20Stack/1770987238196_lktvkz.jpg',
        alt: 'Bruno looking at the audience with a slide in the background saying tester not found during The Death of the Test Analyst talk.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029260/Portifolio/eventos/Browser%20Stack/1770987243430_sgq2z7.jpg',
        alt: 'Bruno speaking about older testing tools such as QTP and Selenium during The Death of the Test Analyst talk.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029259/Portifolio/eventos/Browser%20Stack/1770987243084_glwlvr.jpg',
        alt: 'Bruno standing in front of slides for The Death of the Test Analyst talk.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029258/Portifolio/eventos/Browser%20Stack/1770987242906_ryvvm4.jpg',
        alt: 'Bruno standing in front of slides about tester powers during The Death of the Test Analyst talk.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029258/Portifolio/eventos/Browser%20Stack/1770987233918_nb0s2d.jpg',
        alt: 'Slide showing a timeline from the early era of software testing to 2007, when Bruno entered the field.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029258/Portifolio/eventos/Browser%20Stack/1770987236230_ahnx25.jpg',
        alt: 'Slide showing how many different roles currently exist in the software testing field.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029258/Portifolio/eventos/Browser%20Stack/1770987242879_njawqv.jpg',
        alt: 'Slide showing the phrase test is dead attributed to the former Chief Technology Officer of Google.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777029257/Portifolio/eventos/Browser%20Stack/1770987241230_zualn4.jpg',
        alt: 'Mindera gifts prepared to be distributed to participants at the BrowserStack QA Meetup in Lisbon.',
      },
    ],
  },
  {
    title: 'The Journey of Software Quality',
    event: 'Tugágil',
    date: 'November 6, 2025',
    location: 'Sonae Tech Hub',
    description:
      'A talk about the evolution of software quality from its early stages to the present day, sharing my perspective on how quality has changed over time and the lessons I have taken from that journey.',
    tags: ['Quality', 'Career', 'Community'],
    gallery: [
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777027731/Portifolio/eventos/Tug%C3%A1gil/C148E8D6-884E-489B-A3FA-2366964F3299_zupzpq.jpg',
        alt: 'Group photo of the participants seated together at the back after The Journey of Software Quality talk at Tugágil.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777027732/Portifolio/eventos/Tug%C3%A1gil/E11CC28A-945E-47A7-98FB-B53069B48CC7_vierjt.jpg',
        alt: 'Audience seated and watching The Journey of Software Quality talk at Tugágil.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777027732/Portifolio/eventos/Tug%C3%A1gil/C9AEFA58-33BC-4F33-93E4-D9537B3F0077_zyli6x.jpg',
        alt: 'Slide from The Journey of Software Quality talk showing the message It is impossible to automate chaos.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777027731/Portifolio/eventos/Tug%C3%A1gil/D87F0DB4-8C53-487D-AD94-0F57FAE44354_mwhrrh.jpg',
        alt: 'Slide from The Journey of Software Quality talk showing the former Poatek team.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1777027731/Portifolio/eventos/Tug%C3%A1gil/D4DC7C53-EBEF-41F9-BB64-ACBD3C79DB56_zxjt2g.jpg',
        alt: 'Slide from The Journey of Software Quality talk highlighting that people are more important than tools.',
      },
    ],
  },
  {
    title: 'Accessibility Testing',
    event: 'Mindera Talks',
    date: 'October 17, 2024',
    location: 'Mindera',
    description:
      'A Mindera Talks session focused on accessibility testing, covering inclusive design considerations, contrast rules, and practical examples supported by participants and the community.',
    tags: ['Accessibility', 'Quality', 'Community'],
    gallery: [
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467114/BUGBUSTER/Mindera%20Talk/ivmkykxffo0v9b1yetvm.jpg',
        alt: 'Presentation slide about different types of limitations during the Accessibility Testing talk at Mindera.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467384/BUGBUSTER/Mindera%20Talk/o2gjtwyxiymdeupcbz7h.jpg',
        alt: 'People gathering in the kitchen area before the Accessibility Testing talk at Mindera.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467386/BUGBUSTER/Mindera%20Talk/bn8qiqmbq6hmybccpich.jpg',
        alt: 'Mindera event space prepared for the Accessibility Testing talk.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467384/BUGBUSTER/Mindera%20Talk/ri8nncsbwiruxqnju8tx.jpg',
        alt: 'Two blind participants contributing to the Accessibility Testing event at Mindera.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467212/BUGBUSTER/Mindera%20Talk/iopm9a7wsj1qdzjxqiff.jpg',
        alt: 'Pantufa watching the Accessibility Testing talk attentively.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467125/BUGBUSTER/Mindera%20Talk/sqhysqmceg7nuyp5hp4t.jpg',
        alt: 'Pantufa being showered with kisses during the Accessibility Testing event.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467803/BUGBUSTER/Mindera%20Talk/totblztyalok2a2lbf1j.jpg',
        alt: 'Presentation slide explaining contrast rules during the Accessibility Testing talk.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729467803/BUGBUSTER/Mindera%20Talk/rikaso5jgbkjazdckobo.jpg',
        alt: 'Presentation slide showing examples of bad and good buttons during the Accessibility Testing talk.',
      },
    ],
  },
  {
    title: 'Software accessibility to everyone',
    event: '3rd Test Tribe Porto - Infraspeak',
    date: 'June 12, 2024',
    description:
      'A talk focused on making software accessibility more approachable and practical for everyone involved in building digital products.',
    tags: ['Accessibility', 'Quality', 'Community'],
    gallery: [
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1718573164/BUGBUSTER/Screenshot_2024-05-27_at_13.30.38_frkmsf.png',
        alt: 'Promotional image for the Test Tribe talk Software accessibility to everyone, presented in June 2024.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1718577316/BUGBUSTER/WhatsApp_Image_2024-06-12_at_23.14.06_1_xvwdsb.jpg',
        alt: 'Bruno speaking during the Software accessibility to everyone talk while looking at the presentation screen.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1719503923/BUGBUSTER/pozhytyoxx1odetqgzrm.webp',
        alt: 'View from the back of the auditorium showing an audience of around 50 people during the Software accessibility to everyone talk.',
      },
    ],
  },
  {
    title: 'Security Testing',
    event: "Tester's Day",
    date: 'September 9, 2024',
    location: 'Mindera',
    description:
      'A talk about security testing shared during Dia do Testador, followed by QA community moments at Mindera.',
    tags: ['Security', 'Quality', 'Community'],
    gallery: [
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729466684/BUGBUSTER/testes_de_seguran%C3%A7a/securitytests.jpg',
        alt: 'Photo from Dia do Testador at Mindera during the Security Testing talk.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729466692/BUGBUSTER/testes_de_seguran%C3%A7a/almo%C3%A7o.jpg',
        alt: 'QA Gatherings lunch during Dia do Testador at Mindera.',
      },
      {
        src: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1729466683/BUGBUSTER/testes_de_seguran%C3%A7a/cdhtmdckccu2b1o6q3wu.jpg',
        alt: 'Pantufa at the QA Gatherings lunch during Dia do Testador at Mindera.',
      },
    ],
  },
];

const SORTED_TALKS = [...TALKS].sort(
  (firstTalk, secondTalk) =>
    new Date(secondTalk.date).getTime() - new Date(firstTalk.date).getTime()
);

export default function TalksPage() {
  const [selectedImage, setSelectedImage] = useState<{
    talkIndex: number;
    imageIndex: number;
  } | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [expandedTalks, setExpandedTalks] = useState<Record<number, boolean>>(
    {}
  );
  const modalCloseButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusedElementRef = useRef<HTMLElement | null>(null);
  const previousBodyOverflowRef = useRef<string>('');

  const allTags = Array.from(
    new Set(SORTED_TALKS.flatMap((talk) => talk.tags))
  ).sort((firstTag, secondTag) => firstTag.localeCompare(secondTag));
  const tags = ['All', ...allTags];
  const filteredTalks =
    selectedTag === 'All'
      ? SORTED_TALKS
      : SORTED_TALKS.filter((talk) => talk.tags.includes(selectedTag));

  const selectedTalk =
    selectedImage !== null ? filteredTalks[selectedImage.talkIndex] : null;
  const selectedGalleryImage =
    selectedTalk && selectedImage !== null
      ? selectedTalk.gallery[selectedImage.imageIndex]
      : null;

  const showPreviousImage = () => {
    if (!selectedImage) {
      return;
    }

    const gallery = filteredTalks[selectedImage.talkIndex].gallery;
    const previousIndex =
      (selectedImage.imageIndex - 1 + gallery.length) % gallery.length;

    setSelectedImage({
      talkIndex: selectedImage.talkIndex,
      imageIndex: previousIndex,
    });
  };

  const showNextImage = () => {
    if (!selectedImage) {
      return;
    }

    const gallery = filteredTalks[selectedImage.talkIndex].gallery;
    const nextIndex = (selectedImage.imageIndex + 1) % gallery.length;

    setSelectedImage({
      talkIndex: selectedImage.talkIndex,
      imageIndex: nextIndex,
    });
  };

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    previousFocusedElementRef.current = document.activeElement as HTMLElement | null;
    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    modalCloseButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
        return;
      }

      if (event.key === 'ArrowLeft') {
        const gallery = filteredTalks[selectedImage.talkIndex].gallery;
        const previousIndex =
          (selectedImage.imageIndex - 1 + gallery.length) % gallery.length;

        setSelectedImage({
          talkIndex: selectedImage.talkIndex,
          imageIndex: previousIndex,
        });
      }

      if (event.key === 'ArrowRight') {
        const gallery = filteredTalks[selectedImage.talkIndex].gallery;
        const nextIndex = (selectedImage.imageIndex + 1) % gallery.length;

        setSelectedImage({
          talkIndex: selectedImage.talkIndex,
          imageIndex: nextIndex,
        });
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = [
          modalCloseButtonRef.current,
          document.querySelector<HTMLButtonElement>(
            '[data-testid="talk-image-modal-prev"]'
          ),
          document.querySelector<HTMLButtonElement>(
            '[data-testid="talk-image-modal-next"]'
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
  }, [filteredTalks, selectedImage]);

  useEffect(() => {
    setSelectedImage(null);
  }, [selectedTag]);

  return (
    <>
      <main
        className="flex flex-col items-center min-h-screen p-4 sm:p-8"
        data-testid="talks-page"
        role="main"
        aria-labelledby="talks-page-title"
      >
        <div className="w-full max-w-6xl">
          <h1
            id="talks-page-title"
            className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-8 text-center"
            data-testid="talks-title"
          >
            Talks
          </h1>

          <div
            className="mb-6 w-full max-w-5xl px-4"
            data-testid="talks-filter-tags-container"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 justify-center">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className={`inline-block px-3 py-1 sm:px-4 sm:pt-2 text-sm sm:text-lg font-semibold border-b-2 text-center ${
                    selectedTag === tag
                      ? 'text-yellow-500 border-yellow-500'
                      : 'text-gray-300 border-transparent'
                  }`}
                  onClick={() => setSelectedTag(tag)}
                  data-testid={`talk-filter-tag-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  aria-pressed={selectedTag === tag}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8" data-testid="talks-list">
            {filteredTalks.map((talk, talkIndex) => (
              <article
                key={talk.title}
                className="border border-yellow-500 rounded-lg p-6 sm:p-8"
                data-testid={`talk-card-${talkIndex}`}
              >
                <div className="mb-6">
                <p className="text-yellow-500 text-sm sm:text-base font-semibold uppercase tracking-wide">
                  {talk.event}
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mt-2"
                    data-testid={`talk-title-${talkIndex}`}
                  >
                    {talk.title}
                  </h2>
                <p
                  className="text-gray-400 text-sm sm:text-base mt-2"
                  data-testid={`talk-date-${talkIndex}`}
                >
                  {talk.date}
                </p>
                {talk.location && (
                  <p className="text-gray-400 text-sm sm:text-base mt-1">
                    {talk.location}
                  </p>
                )}
                <p className="text-white text-base sm:text-lg mt-4 max-w-4xl">
                  {talk.description}
                </p>
                <div
                  className="flex flex-wrap gap-2 mt-4"
                  data-testid={`talk-tags-${talkIndex}`}
                >
                  {talk.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-yellow-500 text-black text-sm px-3 py-1 rounded"
                      data-testid={`talk-tag-${talkIndex}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
                  data-testid={`talk-gallery-${talkIndex}`}
                >
                  {(expandedTalks[talkIndex]
                    ? talk.gallery
                    : talk.gallery.slice(0, 3)
                  ).map((image, imageIndex) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-lg bg-neutral-950"
                      data-testid={`talk-gallery-item-${talkIndex}-${imageIndex}`}
                    >
                      <button
                        type="button"
                        className="block relative w-full h-52 sm:h-60 cursor-zoom-in"
                        onClick={() =>
                          setSelectedImage({
                            talkIndex,
                            imageIndex: expandedTalks[talkIndex]
                              ? imageIndex
                              : talk.gallery.findIndex(
                                  (galleryImage) => galleryImage.src === image.src
                                ),
                          })
                        }
                        aria-label={`Open image: ${image.alt}`}
                        data-testid={`talk-gallery-button-${talkIndex}-${imageIndex}`}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </button>
                    </div>
                  ))}
                </div>

                {talk.gallery.length > 3 && (
                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="rounded-full border border-yellow-500 px-5 py-2 text-sm text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                      onClick={() =>
                        setExpandedTalks((currentState) => ({
                          ...currentState,
                          [talkIndex]: !currentState[talkIndex],
                        }))
                      }
                      data-testid={`talk-gallery-toggle-${talkIndex}`}
                    >
                      {expandedTalks[talkIndex] ? 'Show fewer photos' : 'Show more photos'}
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        <div
          className="w-1/4 border-t border-gray-500 opacity-50 mt-12 mb-8"
          aria-hidden="true"
          data-testid="talks-divider"
        />

        <div
          data-testid="posts-button-container"
          aria-label="Navigate to Posts page"
        >
          <LinkButton
            text="Go to Posts"
            href="/posts"
            data-testid="posts-button"
            aria-label="Go to Posts page"
          />
        </div>
      </main>

      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded talk image"
          data-testid="talk-image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 text-white text-3xl leading-none"
              onClick={() => setSelectedImage(null)}
              aria-label="Close expanded image"
              data-testid="talk-image-modal-close"
              ref={modalCloseButtonRef}
            >
              ×
            </button>

            <button
              type="button"
              className="absolute -left-20 top-1/2 z-10 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-[#2F190F]/80 text-yellow-400 text-2xl backdrop-blur-sm transition-transform hover:scale-105 hover:bg-[#4A2A1A]/85"
              onClick={showPreviousImage}
              aria-label="Show previous image"
              data-testid="talk-image-modal-prev"
            >
              ←
            </button>

            <button
              type="button"
              className="absolute -right-20 top-1/2 z-10 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-[#2F190F]/80 text-yellow-400 text-2xl backdrop-blur-sm transition-transform hover:scale-105 hover:bg-[#4A2A1A]/85"
              onClick={showNextImage}
              aria-label="Show next image"
              data-testid="talk-image-modal-next"
            >
              →
            </button>

            <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-black">
              <Image
                src={selectedGalleryImage.src}
                alt={selectedGalleryImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <p className="mt-4 text-sm sm:text-base text-gray-200 text-center">
              {selectedGalleryImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
