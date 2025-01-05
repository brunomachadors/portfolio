export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center justify-start gap-6 p-4 border-t border-white/20"
      data-test-id="footer-container"
    >
      <div
        className="flex flex-wrap justify-center gap-6"
        data-test-id="footer-links"
      >
        <a
          href="https://www.instagram.com/brunomachadors/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="INSTAGRAM"
          className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          data-test-id="footer-link-instagram"
        >
          <span className="material-icons text-sm sm:text-xl">instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/in/brunomrs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LINKEDIN"
          className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          data-test-id="footer-link-linkedin"
        >
          <span className="material-icons text-sm sm:text-xl">linkedin</span>
        </a>
        <a
          href="https://github.com/brunomachadors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GITHUB"
          className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          data-test-id="footer-link-github"
        >
          <span className="material-icons text-sm sm:text-xl">github</span>
        </a>
        <a
          href="https://medium.com/@brunomachadoricardosilva"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MEDIUM"
          className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          data-test-id="footer-link-medium"
        >
          <span className="material-icons text-sm sm:text-xl">Medium</span>
        </a>
        <a
          href="mailto:brunomachadors@gmail.com"
          aria-label="EMAIL"
          className="hover:text-yellow-500 transition transform hover:scale-110 uppercase"
          data-test-id="footer-link-email"
        >
          <span className="material-icons text-sm sm:text-xl">Email</span>
        </a>
      </div>

      <p
        className="text-sm uppercase text-center px-4"
        data-test-id="footer-copyright"
      >
        © 2024 Bruno Machado.
      </p>
    </footer>
  );
}
