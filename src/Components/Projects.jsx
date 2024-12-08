import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      number: 1,
      skills: [
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Javascript.svg",
        "img/stack/React.png",
        "img/stack/NodeJs.svg",
        "img/stack/Express.png",
        "img/stack/MongoDB.svg",
        "img/stack/Tailwind.png",
        "img/stack/Vercel.svg",
      ],
      title: "LearnSphere",
      description:
        "An ed-tech platform enabling seamless online learning with interactive courses and assessments.",
      githubLink: "https://github.com/Ankurx7/learnsphere",
      liveLink: "https://learnsphere-weld.vercel.app",
      backgroundImage: "img/projects/edtech.jpg",
    },
    {
      number: 2,
      skills: [
        "img/stack/react.png",
        "img/stack/Tailwind.png",
        "img/stack/Redux.svg",
        "img/stack/HTML.png",
        "img/stack/CSS.png",
        "img/stack/Javascript.svg",
        "img/stack/Vercel.svg",
      ],
      title: "CineVerse",
      description:
        "A movie-centric application for browsing trending films, user reviews, and seamless search functionality.",
      githubLink: "https://github.com/Ankurx7/cineverse",
      liveLink: "https://cine-verse-ten.vercel.app/?search=",
      backgroundImage: "img/projects/blog.png"
    },
    {
      number: 3,
      skills: [
        "img/stack/c++.svg",
      ],
      title: "QuantumFileX",
      description:
        "A Tree-based file management system leveraging cutting-edge algorithms for efficient storage and retrieval.",
      githubLink: "https://github.com/Ankurx7/Quantum_FileX",
      liveLink: "https://quantumfilex.com",
      backgroundImage: "img/projects/files.png",
    },
  ];
  

  return (
    <div className="py-10 bg-gray-900 scroll-mt-9 text-white" id="projects">
      <h2 className="text-center text-4xl font-bold mb-8">Projects</h2>
      <div className="flex flex-wrap justify-around p-7 gap-5 items-center w-full">
        {projectData.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
