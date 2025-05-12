import SectionTitle from "../Components/SectionTitle";
import ProjectCards from "../Components/ProjectCards";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-12 py-10 flex justify-start">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-full xl:w-[70%] h-full flex justify-center">
            <ProjectCards />
          </div>
          {/* <div className="absolute w-full h-full top-[100%] right-[-75%] sm:right-[-50%]">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;