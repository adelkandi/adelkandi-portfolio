import type { SkillsProps } from "../types/skill"

interface SkillsCardProps{
    category: SkillsProps
}

const SkillsCard = ({category}: SkillsCardProps) =>{
    return(
        <div className="h-auto w-full md:w-[500px] md:h-[250px] lg:w-[500px] lg:h-[250px] flex flex-col  border border-[#f6b452] rounded-2xl shadow-lg p-6 bg-[#1E1E1E] transition duration-300 ease-in-out hover:scale-105 hover:shadow-[#f6b452] items-stretch">
            <h3 className="text-3xl text-[#f6b452] p-2">{category.titleLogo} {category.title}</h3>
            <ul className="p-2 space-y-2">
                {category.skills.map((skill, index) => (<li key={index} className="flex items-center gap-2"><span className="text-[#f6b452]">{skill.icon}</span>{skill.name}</li>))}
            </ul>
        </div>
    )
}

export default SkillsCard
