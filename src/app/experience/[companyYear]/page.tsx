'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { EXPERIENCES } from '@/app/content/experiences';

export default function ExperiencePage() {
  const params = useParams();
  const companyYear = params.companyYear;

  const experience = EXPERIENCES.find(
    (exp) =>
      `${exp.company.toLowerCase()}-${exp.year.toLowerCase()}` === companyYear
  );

  if (!experience) {
    return (
      <div className="text-center text-yellow-500">Experience not found.</div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      {/* Botão para voltar */}

      {/* Título Principal */}
      <h1 className="text-4xl sm:text-5xl font-bold text-yellow-500 mb-8 text-center">
        {experience.company}
      </h1>

      {/* Período e Localização */}
      <p className="text-base sm:text-lg text-gray-300 text-center mb-2">
        {experience.period}
      </p>
      <p className="text-sm sm:text-base text-gray-400 italic mb-12">
        Location: {experience.location}
      </p>

      {/* Projetos */}
      <div className="w-full max-w-5xl space-y-12">
        {experience.fullDescription.map((project, index) => (
          <section key={index}>
            <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-4">
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
              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-500 mb-4">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((url, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative w-full h-64 sm:h-80"
                    >
                      <Image
                        src={url}
                        alt={`${experience.company} - ${
                          project.project
                        } image ${imgIndex + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        priority={imgIndex === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Botão para voltar ao final */}
      <Link
        href="/resume"
        className="mt-12 text-yellow-500 border border-yellow-500 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-yellow-500 hover:text-gray-900 transition"
      >
        Back to Timeline
      </Link>
    </div>
  );
}
