import Image from 'next/image';
import AboutSections from '../components/AboutSections/AboutSections';

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-[85vh] p-8">
      <div className="flex flex-col sm:flex-row items-stretch border border-yellow-500 rounded-xl shadow-lg overflow-hidden w-full max-w-7xl p-8">
        {/* Foto */}
        <div className="flex items-center justify-center bg-transparent w-full sm:w-1/2 p-4">
          <Image
            src="https://res.cloudinary.com/dtglidvcw/image/upload/v1735425689/Portifolio/CAPAPB.png"
            alt="Bruno Machado"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col flex-1 p-8 rounded-lg">
          <AboutSections />
        </div>
      </div>
    </div>
  );
}
