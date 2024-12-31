'use client';
import Link from 'next/link';
import { EXPERIENCES } from '../content/experiences';

export default function Resume() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      {/* Título */}
      <h1 className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-12">
        TIMELINE
      </h1>

      {/* Linha do Tempo */}
      <div className="w-full max-w-5xl">
        {EXPERIENCES.map((item, index) => (
          <div key={index} className="flex flex-row items-center">
            {/* Ano */}
            <div className="w-1/4 text-yellow-500 text-lg sm:text-xl font-bold text-right pr-4">
              {item.year}
            </div>
            <div className="w-12 border-b border-yellow-500 h-2 -mt-2"></div>

            {/* Detalhes da Vaga */}
            <div className="w-3/4 pt-4 text-gray-300 border-l-8 border-yellow-500 border-b pl-4">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-500">
                {item.company}
              </h3>
              <p className="text-sm sm:text-base">{item.period}</p>
              <p className="mt-2 text-sm sm:text-base font-semibold">
                {item.role}
              </p>
              <p className="mt-2 mb-8 text-sm sm:text-base">
                {item.shortDescription}
              </p>

              {/* Centralizar texto e botão */}
              <div className="flex flex-col items-center mb-4">
                <Link
                  href={`/experience/${item.company.toLowerCase()}-${item.year.toLowerCase()}`}
                  className="inline-block text-yellow-500 border border-yellow-500 rounded-full px-4 py-2 text-sm sm:text-base hover:bg-yellow-500 hover:text-gray-900 transition"
                >
                  Know more
                </Link>
                <p className="text-sm sm:text-base mb-2 text-center"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
