
import type { SkillsProps } from "../types/skill";
import { FaServer, FaCode, FaDatabase, FaCloud, FaTools, FaAws } from "react-icons/fa";
import { SiSharp, SiPhp, SiNodedotjs, SiReact, SiTypescript, SiTailwindcss, SiMysql, SiOracle, SiDocker, SiGithubactions, SiFigma, SiGit, SiGithub, SiVercel, SiAdobeillustrator } from "react-icons/si";

export const skillsData: SkillsProps[]=[
    {
        title: "Backend",
        titleLogo: <FaServer className="inline mr-2" />,
        skillsLogo: <div className="flex gap-3 mb-2 text-2xl">{[SiSharp, SiPhp, SiNodedotjs].map((Icon, i) => <Icon key={i} />)}</div>,
        skills: [
            { name: "C# ASP.NET", icon: <SiSharp /> },
            { name: "PHP", icon: <SiPhp /> },
            { name: "NodeJS", icon: <SiNodedotjs /> },
            { name: "RESTful API", icon: <FaServer /> }
        ]
    },
    {
        title: "Frontend",
        titleLogo: <FaCode className="inline mr-2" />,
        skillsLogo: <div className="flex gap-3 mb-2 text-2xl">{[SiReact, SiSharp, SiTypescript, SiTailwindcss].map((Icon, i) => <Icon key={i} />)}</div>,
        skills:[
            { name: "ReactJS", icon: <SiReact /> },
            { name: "C# Blazor", icon: <SiSharp /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> }
        ]
    },
    {
        title:"Databases",
        titleLogo: <FaDatabase className="inline mr-2" />,
        skillsLogo: <div className="flex gap-3 mb-2 text-2xl">{[SiMysql, SiMysql, SiMysql, SiOracle].map((Icon, i) => <Icon key={i} />)}</div>,
        skills:[
            { name: "MySQL", icon: <SiMysql /> },
            { name: "MariaDB", icon: <SiMysql /> },
            { name: "SQLite", icon: <SiMysql /> },
            { name: "Oracle", icon: <SiOracle /> }
        ]
    },
    {
        title:"Cloud & DevOps",
        titleLogo: <FaCloud className="inline mr-2" />,
        skillsLogo: <div className="flex gap-3 mb-2 text-2xl">{[FaCloud, FaAws, SiDocker, SiGithubactions].map((Icon, i) => <Icon key={i} />)}</div>,
        skills:[
            { name: "Azure", icon: <FaCloud /> },
            { name: "AWS", icon: <FaAws /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "CI/CD", icon: <SiGithubactions /> },
            { name: "GitHub Actions", icon: <SiGithubactions /> }
        ]
    },
    {
        title:"Tools",
        titleLogo: <FaTools className="inline mr-2" />,
        skillsLogo: <div className="flex gap-3 mb-2 text-2xl">{[SiFigma, SiGit, SiGithub, SiVercel, SiAdobeillustrator].map((Icon, i) => <Icon key={i} />)}</div>,
        skills:[
            { name: "Figma", icon: <SiFigma /> },
            { name: "Git", icon: <SiGit /> },
            { name: "GitHub", icon: <SiGithub /> },
            { name: "Vercel", icon: <SiVercel /> },
            { name: "Adobe AI", icon: <SiAdobeillustrator /> }
        ]
        
    },
]

