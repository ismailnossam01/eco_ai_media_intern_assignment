import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL, MongoDB"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, User Research"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Agile methodology, Git, Project Management"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30"></div>
              <img
                src="https://i.ibb.co/LDX6xfLB/Whats-App-Image-2025-04-26-at-13-20-09-8e839601.jpg"
                alt="Alex Thompson"
                className="relative z-10 w-80 h-80 object-cover rounded-full shadow-2xl ring-8 ring-white dark:ring-gray-800"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Passionate Developer with 5+ Years of Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a full-stack developer and UI/UX designer who loves crafting digital experiences 
              that are both beautiful and functional. My journey in tech started with a curiosity 
              about how things work, and it has evolved into a passion for creating solutions that 
              make people's lives easier.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with the latest technologies.
            </p>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;