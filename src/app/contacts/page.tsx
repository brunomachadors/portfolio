'use client';

import { useState } from 'react';
import Image from 'next/image';
import LinkButton from '../components/Button/LinkButton';
import LoadingSpinner from '../components/Loading/Loading'; // Importa o componente de loading
import { FiMail } from 'react-icons/fi';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para loading

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      setIsLoading(true);
      const formData = new FormData(form);

      const response = await fetch('https://formspree.io/f/mpwwowyg', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        alert('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      className="flex flex-col items-center justify-around min-h-screen p-6 bg-gradient-to-b"
      role="main"
      aria-labelledby="contact-page-title"
      data-test-id="contact-page"
    >
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h1
          className="text-4xl font-bold mb-6 text-yellow-500 flex items-center gap-2"
          id="contact-page-title"
          data-test-id="contact-title"
        >
          <FiMail />
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full sm:w-3/4 border border-white p-8 rounded-lg shadow-md"
          data-test-id="contact-form"
          aria-labelledby="contact-page-title"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              data-test-id="contact-name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              data-test-id="contact-email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-bold text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-white bg-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
              data-test-id="contact-message"
            ></textarea>
          </div>
          <div className="flex flex-col items-center">
            {isLoading ? (
              <LoadingSpinner /> // Mostra o spinner enquanto está carregando
            ) : (
              <LinkButton text="Send Message" type="submit" />
            )}
            {isSubmitted && (
              <div
                className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg"
                data-test-id="success-message"
              >
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </div>
        </form>
      </div>

      <div
        className="flex flex-col items-center mb-12"
        data-test-id="follow-me-section"
        aria-labelledby="follow-me-title"
      >
        <h2
          className="text-2xl font-semibold text-yellow-500 mt-8 mb-4"
          id="follow-me-title"
        >
          Follow Me
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.instagram.com/brunomachadors/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            data-test-id="social-instagram"
            className="hover:scale-110 transition transform"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={80}
              height={80}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/brunomrs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-test-id="social-linkedin"
            className="hover:scale-110 transition transform"
          >
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={80}
              height={80}
            />
          </a>
          <a
            href="https://github.com/brunomachadors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            data-test-id="social-github"
            className="hover:scale-110 transition transform"
          >
            <Image
              src="/icons/github.png"
              alt="GitHub"
              width={80}
              height={80}
            />
          </a>
          <a
            href="https://medium.com/@brunomachadoricardosilva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            data-test-id="social-medium"
            className="hover:scale-110 transition transform"
          >
            <Image
              src="/icons/medium.png"
              alt="Medium"
              width={80}
              height={80}
            />
          </a>
          <a
            href="mailto:brunomachadors@gmail.com"
            aria-label="Email"
            data-test-id="social-email"
            className="hover:scale-110 transition transform"
          >
            <Image src="/icons/email.png" alt="Email" width={80} height={80} />
          </a>
        </div>
      </div>
    </main>
  );
}
