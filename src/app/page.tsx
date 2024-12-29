import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[85vh] p-8">
      <div className="text-center sm:text-center max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-6">
          Welcome to my Portfolio
        </h1>
        <p className="text-lg sm:text-2xl mb-8">
          Explore my skills, experience, and projects as a QA Engineer.
        </p>
        <Link href="/about">
          <button className="border border-yellow-500 text-yellow-500 rounded-full px-8 py-4 text-lg hover:scale-110 transition-transform">
            Start here
          </button>
        </Link>
      </div>
    </div>
  );
}
