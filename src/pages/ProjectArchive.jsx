import React from 'react';
import '../styling/ProjectArchive.css';

const ProjectArchive = () => {
  const projects = [
    {
      year: "2025",
      project: "CoolPeople",
      madeAt: "CoolPeople",
      builtWith: ["Node.js", "React", "CSS", "Python", "Javascript", "OpenAiAPI", "PostgreSQL", "Express", "Tailwind"],
      link: "https://coolpeoplenyc.netlify.app/"
    },
    {
      year: "2025",
      project: "Shenanigram",
      madeAt: "Fullstack Academy",
      builtWith: ["Node.js", "React", "CSS", "PostgreSQL", "Express", "Tailwind"],
      link: "https://shenanigram.netlify.app/"
    },
    {
      year: "2025",
      project: "BookBuddy",
      madeAt: "Fullstack Academy",
      builtWith: ["React", "JWT+bcrypt", "CSS", "Tailwind"],
      link: "https://github.com/lzo-macias/CareerSimulationBookBuddy.git"
    },
  ];

  return (
    <div className='project-archive'>
      <h2>All Projects</h2>
      <div className="project-list">
        <div className="project-header">
          <span>Year</span>
          <span>Project</span>
          <span>Made at</span>
          <span>Built with</span>
          <span>Link</span>
        </div>

        {projects.map((proj, index) => (
          <div className='project-row' key={index}>
            <span>{proj.year}</span>
            <span>{proj.project}</span>
            <span>{proj.madeAt}</span>
            <div className='tags'>
              {proj.builtWith.map((tech, i) => (
                <span key={i} className='tech-tag'>{tech}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              {proj.link.replace(/^https?:\/\//, '')} ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectArchive;
