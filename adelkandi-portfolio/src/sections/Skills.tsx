import SkillsCard from "../components/SkillsCards"
import { skillsData } from "../data/skills"
export default function Skills(){
    return (
        <>
        {/* Skills Section */}
            <section id="skills" className="skills-section px-[8rem]">
                <div className="">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-1 w-12 bg-[#f6b452]"></div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF]">Skills</h1>
                        </div>
                    </div>
                    {/* Skills Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {skillsData.map((category)=>(
                            <SkillsCard key={category.title} category={category}/>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}