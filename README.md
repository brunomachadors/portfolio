# Portfolio Website

Welcome to my personal portfolio website! 🚀  
This project showcases my skills, experience, and projects as a QA Engineer. Built with [Next.js](https://nextjs.org) and styled using [Tailwind CSS](https://tailwindcss.com), it demonstrates a modern, responsive design and a seamless user experience.

## About This Project
The idea behind this portfolio was to showcase not only my technical skills but also my personality, presenting my extensive experience in a more dynamic and engaging way than a traditional CV.

Inspired by my recent experience in a frontend bootcamp, I’ve developed a growing passion for web programming, which has made me a much more versatile QA Engineer. This project reflects that evolution, blending my expertise in testing with my newfound skills in web development.

This portfolio serves as a personal lab for implementing Shift Left Testing principles. Over the course of one week, I was solely responsible for designing, developing, and testing every aspect of the project. This included writing automated tests, addressing accessibility concerns, and ensuring adherence to best practices.

Today, the project runs automated tests in a CI/CD pipeline, triggered with every new merge request, ensuring a smooth and reliable development process. It’s a testament to my dedication to quality and my ability to deliver end-to-end solutions.

## 🌟 Features

- **Modern Design:** Fully responsive and optimized for performance.
- **Built with Next.js:** Leveraging the latest features like App Router and Server Components.
- **Styling with Tailwind CSS:** Fast and flexible CSS utility classes.
- **Deployment Ready:** Hosted on [Vercel](https://vercel.com) for fast and reliable access.

## 📁 Project Structure

```plaintext
portfolio/
├── public/          # Static assets
│   └── icons/       # Social media and other icons
├── src/
│   ├── app/         # Next.js app directory
│   │   ├── about/   # About page
│   │   ├── components/ # Reusable React components
│   │   ├── contacts/ # Contact page
│   │   ├── content/ # Static content like experiences and skills
│   │   ├── experience/ # Individual experience details
│   │   ├── posts/   # Blog posts or medium feed
│   │   ├── projects/ # Projects page
│   │   ├── resume/  # Resume page
│   │   ├── skills/  # Skills page
│   │   ├── styles/  # Styles specific to skills and components
│   │   ├── favicon/ # Favicon and other metadata
│   │   ├── globals.css # Global CSS styles
│   │   ├── layout.tsx  # Global layout configuration
│   │   └── page.tsx    # Home page entry point
├── tests/           # Playwright test files
├── .gitignore       # Git ignore configuration
├── next.config.js   # Next.js configuration
├── playwright.config.ts # Playwright configuration
├── README.md        # Project documentation
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json    # TypeScript configuration
```

## 🧪 Test Coverage

- **Home Page**: Validates title, subtitle, and start button.
- **About Page**: Verifies sections, content, and toggle functionality.
- **Resume Page**: Checks timeline items, skills button, and timeline navigation.
- **Projects Page**: Ensures project cards display correctly and filters work as expected.
- **Contact Page**: Validates form submission and social media links.

## 🌐 Accessibility

This portfolio adheres to accessibility standards (WCAG 2.1). Features include:

- Semantic HTML
- ARIA roles and labels
- Keyboard navigation support

## 📖 Learn More

Here are some resources to help you learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Explore the power of utility-first CSS.
- [Playwright Documentation](https://playwright.dev/docs/intro) - Master end-to-end testing.
- [Cloudinary Documentation](https://cloudinary.com/documentation) - Optimize your media assets.


## 🚀 Getting Started

Follow these instructions to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/brunomachadors/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the project running.

### 4. Build for Production

```bash
npm run build
npm run start
```


## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
