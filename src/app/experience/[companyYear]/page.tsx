'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { EXPERIENCES } from '@/app/content/experiences';
import LoadingSpinner from '@/app/components/Loading/Loading';
import { useState, useEffect } from 'react';

export default function ExperiencePage() {
  const params = useParams();
  const companyYear = params.companyYear;

  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{
    projectIndex: number;
    imageIndex: number;
  } | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    // Simulating a loading delay for demonstration
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const experience = EXPERIENCES.find(
    (exp) =>
      `${exp.company.toLowerCase()}-${exp.year.toLowerCase()}` === companyYear
  );

  const selectedProject =
    experience && selectedImage
      ? experience.fullDescription[selectedImage.projectIndex]
      : null;
  const selectedGalleryImage =
    selectedProject && selectedImage
      ? selectedProject.gallery[selectedImage.imageIndex]
      : null;

  const showPreviousImage = () => {
    if (!experience || !selectedImage) {
      return;
    }

    const gallery = experience.fullDescription[selectedImage.projectIndex].gallery;
    const previousIndex =
      (selectedImage.imageIndex - 1 + gallery.length) % gallery.length;

    setSelectedImage({
      projectIndex: selectedImage.projectIndex,
      imageIndex: previousIndex,
    });
  };

  const showNextImage = () => {
    if (!experience || !selectedImage) {
      return;
    }

    const gallery = experience.fullDescription[selectedImage.projectIndex].gallery;
    const nextIndex = (selectedImage.imageIndex + 1) % gallery.length;

    setSelectedImage({
      projectIndex: selectedImage.projectIndex,
      imageIndex: nextIndex,
    });
  };

  useEffect(() => {
    if (!experience || !selectedImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }

      if (event.key === 'ArrowLeft') {
        const gallery =
          experience.fullDescription[selectedImage.projectIndex].gallery;
        const previousIndex =
          (selectedImage.imageIndex - 1 + gallery.length) % gallery.length;

        setSelectedImage({
          projectIndex: selectedImage.projectIndex,
          imageIndex: previousIndex,
        });
      }

      if (event.key === 'ArrowRight') {
        const gallery =
          experience.fullDescription[selectedImage.projectIndex].gallery;
        const nextIndex = (selectedImage.imageIndex + 1) % gallery.length;

        setSelectedImage({
          projectIndex: selectedImage.projectIndex,
          imageIndex: nextIndex,
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [experience, selectedImage]);

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        data-testid="loading-state"
        role="status"
        aria-label="Loading experience details"
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (!experience) {
    return (
      <div
        className="text-center text-yellow-500"
        data-testid="experience-not-found"
        role="alert"
        aria-live="polite"
      >
        Experience not found.
      </div>
    );
  }

  return (
    <>
      <div
        className="flex flex-col items-center min-h-screen p-8"
        data-testid="experience-page"
        aria-labelledby="experience-page-title"
      >
        {/* Título Principal */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-8 text-center"
          id="experience-page-title"
          data-testid="experience-title"
        >
          {experience.company}
        </h1>

        {/* Período e Localização */}
        <p
          className="text-base sm:text-lg text-gray-300 text-center mb-2"
          data-testid="experience-period"
        >
          {experience.period}
        </p>
        <p
          className="text-sm sm:text-base text-gray-400 italic mb-12"
          data-testid="experience-location"
        >
          Location: {experience.location}
        </p>

        {/* Projetos */}
        <div className="w-full max-w-5xl space-y-12" data-testid="projects-list">
          {experience.fullDescription.map((project, index) => (
            <section
              key={index}
              data-testid={`project-${index}`}
              aria-labelledby={`project-title-${index}`}
            >
              <h2
                className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-4"
                id={`project-title-${index}`}
                data-testid={`project-title-${index}`}
              >
                {project.project}
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                <strong>Position:</strong> {project.position}
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                <strong>Start:</strong> {project.startDate}
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                <strong>End:</strong> {project.endDate}
              </p>
              <p className="mt-4 text-base sm:text-lg text-gray-300">
                {project.description}
              </p>

              {/* Galeria */}
              {project.gallery && project.gallery.length > 0 && (
                <div
                  className="mt-6"
                  data-testid={`project-gallery-${index}`}
                  aria-labelledby={`gallery-title-${index}`}
                >
                  <h3
                    className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4"
                    id={`gallery-title-${index}`}
                    data-testid={`gallery-title-${index}`}
                  >
                    Gallery
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {(expandedProjects[index]
                      ? project.gallery
                      : project.gallery.slice(0, 3)
                    ).map((url, imgIndex) => (
                      <button
                        key={imgIndex}
                        type="button"
                        className="relative w-full h-52 sm:h-64 cursor-zoom-in"
                        data-testid={`gallery-image-${index}-${imgIndex}`}
                        onClick={() =>
                          setSelectedImage({
                            projectIndex: index,
                            imageIndex: expandedProjects[index]
                              ? imgIndex
                              : project.gallery.findIndex(
                                  (galleryUrl) => galleryUrl === url
                                ),
                          })
                        }
                        aria-label={`Open ${experience.company} ${project.project} image ${
                          imgIndex + 1
                        }`}
                      >
                        <Image
                          src={url}
                          alt={`${experience.company} - ${
                            project.project
                          } image ${imgIndex + 1}`}
                          fill
                          className="object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02]"
                          priority={imgIndex === 0}
                        />
                      </button>
                    ))}
                  </div>

                  {project.gallery.length > 3 && (
                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className="rounded-full border border-yellow-500 px-5 py-2 text-sm text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                        onClick={() =>
                          setExpandedProjects((currentState) => ({
                            ...currentState,
                            [index]: !currentState[index],
                          }))
                        }
                        data-testid={`gallery-toggle-${index}`}
                      >
                        {expandedProjects[index]
                          ? 'Show fewer photos'
                          : 'Show more photos'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Botão para voltar ao final */}
        <Link
          href="/resume"
          className="mt-12 text-yellow-500 border border-yellow-500 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-yellow-500 hover:text-gray-900 transition"
          data-testid="back-to-resume-bottom"
          aria-label="Back to Resume Timeline"
        >
          Back to Timeline
        </Link>
      </div>

      {selectedGalleryImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded experience image"
          data-testid="experience-image-modal"
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
              data-testid="experience-image-modal-close"
            >
              ×
            </button>

            <button
              type="button"
              className="absolute -left-20 top-1/2 z-10 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-[#2F190F]/80 text-yellow-400 text-2xl backdrop-blur-sm transition-transform hover:scale-105 hover:bg-[#4A2A1A]/85"
              onClick={showPreviousImage}
              aria-label="Show previous image"
              data-testid="experience-image-modal-prev"
            >
              ←
            </button>

            <button
              type="button"
              className="absolute -right-20 top-1/2 z-10 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-[#2F190F]/80 text-yellow-400 text-2xl backdrop-blur-sm transition-transform hover:scale-105 hover:bg-[#4A2A1A]/85"
              onClick={showNextImage}
              aria-label="Show next image"
              data-testid="experience-image-modal-next"
            >
              →
            </button>

            <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-black">
              <Image
                src={selectedGalleryImage}
                alt={`${experience.company} - ${selectedProject?.project} enlarged image`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <p className="mt-4 text-sm sm:text-base text-gray-200 text-center">
              {experience.company} - {selectedProject?.project}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
