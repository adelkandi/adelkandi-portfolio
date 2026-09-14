import type {Project} from "../types/project";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({project}: ProjectCardProps){
    const projectLink = project.demo ?? project.repoUrl;
    const linkLabel = project.demo ? "Live demo" : "GitHub";

    return(
        <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#1E1E1E] p-6 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-[#f6b452] hover:shadow-[0_12px_32px_rgba(246,180,82,0.16)]">
            <div className="mb-5">
                <h2 className="text-2xl font-semibold leading-tight text-[#F8F8FF]">
                    {project.titleLogo}{project.title}
                </h2>
                <p className="mt-2 text-sm font-medium leading-6 text-[#f6b452]">{project.tagline}</p>
            </div>

            <p className="text-sm leading-7 text-white/70">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
                {project.technology.map((technology, index) => (
                    <li key={`${project.title}-${index}`} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75">
                        {technology}
                    </li>
                ))}
            </ul>

            <div className="mt-auto pt-7">
                {projectLink ? (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#f6b452] px-4 py-2 text-sm font-semibold text-[#f6b452] transition hover:bg-[#f6b452] hover:text-[#111]"
                    >
                        {linkLabel}<span aria-hidden="true">-&gt;</span>
                    </a>
                ) : (
                    <span className="inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm text-white/40">
                        {project.status === "private" ? "Private project" : "Hackathon project"}
                    </span>
                )}
            </div>
        </article>
    )
}