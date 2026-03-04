



export default function About(){
    return(
        <>
            <section id="about" className="py-24 px-4 sm:px-8 lg:px-[8rem]">
                <div className="max-w-4xl">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-1 w-12 bg-[#5ad1b2]"></div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-[#F8F8FF]">About Me</h1>
                        </div>
                    </div>
                    
                    <div className="space-y-6 text-[#E0E0E0] text-lg leading-relaxed">
                        <p className="pb-4 border-l-4 border-[#5ad1b2] pl-6 hover:translate-x-2 transition-transform duration-300">
                            I'm a Full Stack Web Developer with a background in Telecommunications and hands-on experience building modern web applications.
                        </p>
                        <p className="pb-4 border-l-4 border-[#5ad1b2] pl-6 hover:translate-x-2 transition-transform duration-300">
                            My journey into tech started with networking and optical fiber systems, where I developed a strong understanding of infrastructure and how systems connect behind the scenes. Today, I focus on building clean, scalable, and user-centered web applications using modern technologies.
                        </p>
                        <p className="pb-4 border-l-4 border-[#5ad1b2] pl-6 hover:translate-x-2 transition-transform duration-300">
                            I enjoy turning ideas into functional digital products, whether it's a responsive frontend interface or structured backend logic. My goal is to continuously grow as a developer while delivering solutions that are efficient, maintainable, and impactful.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}