import React from "react";
import waveGif from "../assets/giphy.gif";

export const Card = ({ project }) => {
  return (
    <div className="flex justify-center">
      <div
        style={{ backgroundImage: `url('${waveGif}')` }}
        className="relative bg-cover bg-center 
                   bg-white/10 backdrop-blur-md
                   border border-white/20
                   p-6 flex flex-col
                   w-full max-w-sm
                   rounded-3xl shadow-2xl
                   hover:scale-105 hover:shadow-3xl
                   transition-all duration-300"
      >
        {/* Image */}
        <a href={project.live_link} target="_blank">
          <img
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
            src={project?.thumbnail || "https://via.placeholder.com/400"}
            alt={project?.name || "Project"}
          />
        </a>

        {/* Title */}
        <h3 className="mt-5 text-xl font-semibold text-[#fcbf49] capitalize">
          {project?.name || "Untitled Project"}
        </h3>

        {/* Tech Stack */}
        <p className="text-sm text-gray-300 mt-2">
          Tech Stack: {project?.tech?.join(", ") || "Node.js"}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          {/* <button className="px-4 py-2 bg-[#fcbf49] text-black rounded-xl font-medium hover:bg-yellow-400 transition">
            Read More
          </button> */}

          {project?.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#fcbf49] text-black rounded-xl font-medium hover:bg-yellow-200 transition"
            >
              GitHub
            </a>
          )}

          {project?.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              Live Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
