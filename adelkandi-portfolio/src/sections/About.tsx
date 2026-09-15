



export default function About(){
    return(
        <>
        {/* About Section */}
            <section id="about" className="px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-[8rem] lg:py-24">
                <div className="max-w-4xl">
                    {/* Section Title */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-1 w-12 bg-[#5ad1b2]"></div>
                            <h1 className="text-3xl font-bold text-[#F8F8FF] sm:text-4xl md:text-5xl">About Me</h1>
                        </div>
                    </div>

                    {/* Informations */}
                    <div className="space-y-6 text-base leading-relaxed text-[#E0E0E0] sm:text-lg">
                        <p className="border-l-4 border-[#5ad1b2] pb-4 pl-4 transition-transform duration-300 active:translate-x-1 hover:translate-x-2 hover:bg-[#5ad1b2]/10 sm:pl-6">
                            I'm a Full Stack Web Developer with a background in Telecommunications and hands-on experience building modern web applications.
                        </p>
                        <p className="border-l-4 border-[#5ad1b2] pb-4 pl-4 transition-transform duration-300 active:translate-x-1 hover:translate-x-2 hover:bg-[#5ad1b2]/10 sm:pl-6">
                            My journey into tech started with networking and optical fiber systems, where I developed a strong understanding of infrastructure and how systems connect behind the scenes. Today, I focus on building clean, scalable, and user-centered web applications using modern technologies.
                        </p>
                        <p className="border-l-4 border-[#5ad1b2] pb-4 pl-4 transition-transform duration-300 active:translate-x-1 hover:translate-x-2 hover:bg-[#5ad1b2]/10 sm:pl-6">
                            I enjoy turning ideas into functional digital products, whether it's a responsive frontend interface or structured backend logic. My goal is to continuously grow as a developer while delivering solutions that are efficient, maintainable, and impactful.
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}