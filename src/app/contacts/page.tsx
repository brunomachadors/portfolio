'use client';

import { useState } from 'react';
import LinkButton from '../components/Button/LinkButton';
import { FiMail } from 'react-icons/fi';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
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
    }
  };

  return (
    <div className="flex flex-col items-center justify-around min-h-screen p-6 bg-gradient-to-b">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-yellow-500 flex items-center gap-2">
          <FiMail />
          Contact Me
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-3/4 border border-white p-8 rounded-lg shadow-md"
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
            ></textarea>
          </div>
          <div className="flex flex-col items-center">
            <LinkButton text="Send Message" type="submit" />
            {isSubmitted && (
              <div className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="flex flex-col items-center mb-12">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Follow Me
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.instagram.com/brunomachadors/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="INSTAGRAM"
            className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          >
            <span className="material-icons text-3xl">instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/brunomrs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINKEDIN"
            className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          >
            <span className="material-icons text-3xl">linkedin</span>
          </a>
          <a
            href="https://github.com/brunomachadors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GITHUB"
            className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          >
            <span className="material-icons text-3xl">github</span>
          </a>
          <a
            href="https://medium.com/@brunomachadoricardosilva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="MEDIUM"
            className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          >
            <span className="material-icons text-3xl">medium</span>
          </a>
          <a
            href="mailto:brunomachadors@gmail.com"
            aria-label="EMAIL"
            className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          >
            <span className="material-icons text-3xl">email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
