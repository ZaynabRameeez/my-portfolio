// src/components/Projects.tsx

// A reusable component for the project cards
const ProjectCard = ({ title, description, liveLink, codeLink }: {
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      {/* Placeholder for project image */}
      <div className="bg-gray-300 h-48 w-full"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-start space-x-4">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Live Demo
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    // Section with id for navbar scrolling
    <section id="projects" className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        {/* Grid container for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <ProjectCard
            title="Project One Title"
            description="A brief description of the first project. What problem does it solve? What technologies were used?"
            liveLink="#" // Replace with your live demo link
            codeLink="#" // Replace with your GitHub link
          />
          
          {/* Project 2 */}
          <ProjectCard
            title="Project Two Title"
            description="A brief description of the second project. Highlight your role and the key features you implemented."
            liveLink="#"
            codeLink="#"
          />
          
          {/* Project 3 */}
          <ProjectCard
            title="Project Three Title"
            description="A brief description of the third project. Mention any challenges you faced and how you overcame them."
            liveLink="#"
            codeLink="#"
          />

        </div>
      </div>
    </section>
  );
};

export default Projects;

