# Alex Thompson - Professional Portfolio

This is a modern, responsive single-page portfolio website designed to showcase my skills as a Full Stack Developer and UI/UX Designer. It features a clean, interactive, and visually appealing interface with a focus on user experience and modern web development practices.

**Published Link**: https://ecoaimediaportfolio.netlify.app/

## Features

*   **Responsive Design**: Optimized for seamless viewing across various devices, from mobile phones to large desktop screens.
*   **Dynamic Hero Section**: Features an engaging introduction with an interactive 3D model and animated background elements.
*   **About Section**: A concise introduction, profile picture, and a clear display of key skills.
*   **Projects Section**: Showcases 2-3 sample projects with titles, descriptions, preview images, and links to live demos and GitHub repositories.
*   **Contact Section**: A simple contact form with client-side validation for name, email, and message fields, ensuring a smooth user experience.
*   **Interactive 3D Model**: Integrated using Three.js in the Hero section, featuring a dynamic dodecahedron with orbiting elements, interactive rotation on mouse hover, and a subtle floating animation.
*   **Light and Dark Theme**: A toggleable theme switch that allows users to choose between light and dark modes, with attractive and professional color schemes.
*   **Smooth Scrolling**: Enhanced navigation with smooth scrolling to different sections of the page.
*   **Custom Scrollbar**: A custom-styled scrollbar for a polished look.

## Technologies Used

*   **Frontend**:
    *   [React](https://react.dev/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [Three.js](https://threejs.org/) (for 3D model integration)
    *   [Lucide React](https://lucide.dev/icons/) (for icons)
    *   [React Hook Form](https://react-hook-form.com/) (for form management and validation)
*   **Build Tool**:
    *   [Vite](https://vitejs.dev/)

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm (or yarn) installed on your machine.

*   Node.js (v18 or higher recommended)
*   npm (v8 or higher) or yarn (v1.22 or higher)

### Steps

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/modern-portfolio-website.git
    cd modern-portfolio-website
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production**:
    ```bash
    npm run build
    # or
    yarn build
    ```
    This will create a `dist` folder with the production-ready build.

## Usage

*   **Navigation**: Use the header navigation links or the "Back to Top" button in the footer to smoothly scroll to different sections.
*   **Theme Toggle**: Click the moon/sun icon in the header to switch between light and dark themes. Your preference will be saved in local storage.
*   **3D Model Interaction**: In the Hero section, hover your mouse over the 3D model to interactively rotate it.

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── ThreeScene.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

*   `src/components`: Contains all the reusable React components for different sections of the portfolio.
*   `src/contexts`: Manages global state, such as the theme context.
*   `src/index.css`: Global styles, including Tailwind CSS imports and custom animations/utilities.
*   `public`: Static assets.

