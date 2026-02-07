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
          Full Stack Developer | MERN Stack | Building Cool Stuff
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-16 ">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Self Made Projects
        </h2>
        <div className=" bg-[#0e6dc669] rounded-2xl flex justify-around p-3 flex-wrap gap-5">
          {projectData &&
            projectData.map((project) => {
              return <Card project={project} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default App;
