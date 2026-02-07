export const Card = ({ project }) => {
  return (
    <div className="w-full max-w-sm">
      <div
        className="bg-white/5 backdrop-blur-lg border border-white/10 
                      rounded-3xl shadow-xl overflow-hidden 
                      transition-transform duration-300 hover:-translate-y-2"
      >
        {/* Image */}
        <a href={project?.live_link} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-52 object-cover"
            src={project?.thumbnail || "https://via.placeholder.com/400"}
            alt={project?.name || "Project"}
          />
        </a>

        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold text-[#fcbf49]">
            {project?.name || "Untitled Project"}
          </h3>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-3">
            {project?.tech?.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-white/10 px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-md text-gray-200 mt-3 leading-relaxed">
            {project?.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-6 flex-wrap">
            {project?.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#fcbf49] text-black rounded-lg font-medium 
                           hover:opacity-90 transition"
              >
                GitHub
              </a>
            )}

            {project?.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/30 rounded-lg 
                           hover:bg-white hover:text-black transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
