import Image from 'next/image';
import AboutSections from '../components/AboutSections/AboutSections';
import LinkButton from '../components/Button/LinkButton';

export default function About() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-[85vh] p-8"
      data-test-id="about-page"
      aria-labelledby="about-page-title"
    >
      <div
        className="flex flex-col sm:flex-row items-stretch border border-yellow-500 rounded-xl shadow-lg overflow-hidden w-full max-w-7xl"
        data-test-id="about-container"
      >
        <div
          className="flex items-center justify-center bg-transparent w-full sm:w-1/2 p-4"
          data-test-id="about-photo"
        >
          <Image
            src="https://res.cloudinary.com/dtglidvcw/image/upload/v1735730755/Portifolio/capalinguacinza.png"
            alt="Bruno Machado"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover"
            aria-label="Photo of Bruno Machado"
          />
        </div>

        <div
          className="flex flex-col flex-1 p-8 rounded-lg"
          data-test-id="about-content"
        >
          <AboutSections />
        </div>
      </div>

      <div className="mt-8" data-test-id="resume-button-container">
        <LinkButton
          text="Go to Resume"
          href="/resume"
          data-test-id="resume-button"
          aria-label="Navigate to Resume page"
        />
      </div>
    </main>
  );
}
