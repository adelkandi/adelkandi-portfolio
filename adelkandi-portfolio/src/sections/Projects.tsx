
import ProjectCard from "../components/ProjectCard";
import {projectsData} from "../data/projects";

export default function Projects(){

    return(
        <>
            <section id="projects" className="skills-section mb-10 px-8 sm:px-6 lg:px-[8rem]">
            <div className="">
                    <div className="mb-12">
                        <div className="mb-8 flex items-center gap-4">
                        <div className="h-1 w-12 bg-[#f6b452]"></div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF]">Projects</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.title} project={project}/>
                    ))}
                </div>
            </div>
            </section>
        </>
    )
}