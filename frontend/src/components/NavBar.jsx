export const NavBar = () => {
  return (
    <nav
      className="flex justify-between items-center 
                    bg-[#669bbc]/30 backdrop-blur-md 
                    border border-white/20
                    px-6 py-4 rounded-2xl shadow-lg"
    >
      {/* Logo / Name */}
      <h2 className="text-xl font-bold tracking-wide text-white">
        sanjeekumar<span className="text-[#fcbf49]">.site</span>
      </h2>

      {/* Links */}

      <div className="flex gap-6 items-center">
        <a
          href="/Sanjeev_Kumar_Resume.pdf"
          download
          className="px-4 py-2 border border-white rounded-xl 
             hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>

        <a href="#" className="text-white hover:text-[#fcbf49] transition">
          Projects
        </a>

        <a
          href="https://github.com/SanjeevKumar3662"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#fcbf49] text-black rounded-xl 
                     font-medium hover:scale-105 
                     hover:bg-yellow-400 transition-all duration-300"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};
