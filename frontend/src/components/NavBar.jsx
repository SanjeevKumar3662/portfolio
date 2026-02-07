import { useState } from "react";
import { Menu, X, Github, Download, Folder, Code2 } from "lucide-react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="relative bg-[#669bbc]/30 backdrop-blur-md 
                    border border-white/20
                    px-6 py-4 rounded-2xl shadow-lg"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="flex items-center gap-2 text-xl font-bold text-white">
          <Code2 className="text-[#fcbf49]" size={24} />
          sanjeekumar<span className="text-[#fcbf49]">.site</span>
        </h2>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="/Sanjeev_Kumar_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 
                       border border-white rounded-xl 
                       hover:bg-white hover:text-black transition"
          >
            <Download size={18} />
            Resume
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-white 
                       hover:text-[#fcbf49] transition"
          >
            <Folder size={18} />
            Projects
          </a>

          <a
            href="https://github.com/SanjeevKumar3662"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 
                       bg-[#fcbf49] text-black rounded-xl 
                       font-medium hover:scale-105 
                       hover:bg-yellow-400 transition-all duration-300"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden mt-4 flex flex-col gap-4 
                        bg-[#003049] p-4 rounded-xl"
        >
          <a
            href="/Sanjeev_Kumar_Resume.pdf"
            download
            className="flex items-center justify-center gap-2 
                       border border-white p-2 rounded-xl 
                       hover:bg-white hover:text-black transition"
          >
            <Download size={18} />
            Resume
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 
                       hover:text-[#fcbf49] transition"
          >
            <Folder size={18} />
            Projects
          </a>

          <a
            href="https://github.com/SanjeevKumar3662"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 
                       bg-[#fcbf49] text-black p-2 rounded-xl 
                       font-medium hover:bg-yellow-400 transition"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};
