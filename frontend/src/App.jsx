import { Card } from "./components/Card";
import { NavBar } from "./components/NavBar";
import { projectData } from "./data/project.js";

function App() {
  return (
    <div className="min-h-screen bg-[#003049] text-white px-6 py-8">
      <NavBar />

      {/* Hero Section */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold tracking-wide">
          Hi, I'm <span className="text-[#fcbf49]">Sanjeev Kumar</span>
        </h1>
        <p className="mt-3 text-gray-300">
          Full Stack Developer | Open To Work | MERN Stack | Building Cool Stuff
        </p>
      </section>

      {/* About Me Section */}
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-8">About Me</h2>

        <div className="bg-[#0e6dc669] rounded-2xl p-8 shadow-xl">
          <p className="text-gray-200 leading-relaxed text-lg">
            I'm a Full Stack Developer based in New Delhi, currently pursuing a
            BCA from Indira Gandhi National Open University. I specialize in
            building scalable and production ready web applications using the
            MERN stack.
          </p>

          <p className="mt-4 text-gray-200 leading-relaxed">
            I enjoy designing clean user interfaces and building secure backend
            systems with JWT authentication, REST APIs, and real time features
            using Socket.io. My focus is on writing clean, maintainable code
            using MVC architecture and modern best practices.
          </p>

          <p className="mt-4 text-gray-200 leading-relaxed">
            I have built full stack applications including a movie database app
            with authentication, watchlists, and dynamic routing, as well as a
            real time chat application with private messaging and media sharing.
          </p>

          {/* Skills Tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              "Zustand - Redux Alternative",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "TypeScript",
              "Socket.io",
              "JWT Auth",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#fcbf49] text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-20 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-12">
          Projects I've Built
        </h2>

        <div className="bg-[#0e6dc669] rounded-2xl p-8 shadow-xl">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectData?.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* skills */}
      <section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Zustand - Redux Alternative",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "TypeScript",
            "Socket.io",
            "JWT",
            "Tailwind CSS",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Resume</h2>

        <a
          href="/Sanjeev_Kumar_Resume.pdf"
          download
          className="inline-block mb-6 bg-[#fcbf49] text-black px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Download Resume
        </a>

        <div className="w-full max-w-4xl h-[80vh] mx-auto rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="/Sanjeev_Kumar_Resume.pdf"
            title="Resume"
            className="w-full h-full"
          />
        </div>
      </section>
      {/* Contact Section */}
      {/* Contact Section */}
      <section className="mt-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Work Together</h2>

        <p className="text-gray-300 mb-8 leading-relaxed">
          I’m currently open to internship and junior developer opportunities
          where I can contribute to real world products, grow as a full stack
          engineer, and work with experienced teams.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:sanjeevkumar3662work@gmail.com"
            className="px-6 py-3 bg-[#fcbf49] text-black rounded-xl font-medium hover:opacity-90 transition"
          >
            Email Me
          </a>

          <a
            href="https://github.com/SanjeevKumar3662"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sanjeevkumar3662/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
