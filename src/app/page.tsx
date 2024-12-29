import Image from 'next/image';

export default function Home() {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center"
      id="home"
    >
      {/* Texto */}
      <div className="flex flex-col justify-center items-center p-10 sm:items-start text-center sm:text-left gap-6 max-w-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Welcome to Bruno Machado&apos;s Portfolio
        </h1>
        <p className="text-base sm:text-lg text-foreground">
          Explore my skills, experience, and projects as a QA Engineer.
        </p>
        <button className="border border-yellow-500 text-yellow-500 rounded-full px-6 py-3 hover:scale-105 transition-transform">
          Start the Journey
        </button>
      </div>

      {/* Imagem */}
      <div className="relative w-full sm:w-[50%] h-[40vh] sm:h-[80vh] flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
        <Image
          src="https://res.cloudinary.com/dtglidvcw/image/upload/v1735425689/Portifolio/CAPAPB.png"
          alt="Bruno Machado"
          layout="fill"
          objectFit="cover"
          className="shadow-lg"
        />
      </div>
    </div>
  );
}
