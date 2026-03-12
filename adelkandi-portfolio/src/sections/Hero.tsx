import Pfp from "../assets/IMG_3050.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom"
export default function Hero(){
    // const navigate = useNavigate()
    return(
        <>
            {/* Hero Section */}
            <section className="hero-section pt-24 pb-12 sm:px-13 sm:pt-28 md:px-16 md:py-24  lg:px-[8rem] lg:py-[8rem] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12  lg:gap-15 items-center text-center lg:text-left  bg-[radial-gradient(1200px_400px_at_10%_0%,rgba(90,209,178,0.12),transparent_60%),radial-gradient(900px_400px_at_90%_20%,rgba(246,180,82,0.16),transparent_55%)]" id="/">
                <div className="container max-w-[620px] mx-auto lg:mx-0 sm:order-1 md:order-1 lg:order-none">
                    {/* Presentation */}
                    <div className="grid gap-2 mb-5">
                        <div className="presntation-container text-4xl sm:text-5xl lg:text-6xl">
                            <h1 className="text-[#5ad1b2] mb-7">HI,</h1><h2 className="mb-7"> I’m Adel</h2>
                        </div>
                    </div>
                    
                    <p className="text-xl sm:text-2xl lg:text-3xl mb-3">Full Stack Developer</p>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-7">Web Developer focused on building clean, scalable web applications.</p>
                    {/* Buttons */}
                    <div className="flex gap-6 lg:gap-4  justify-center lg:justify-start">
                        <button  className="px-5 py-3  rounded-full font-semibold text-[#111] bg-[#f6b452] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(246,180,82,0.25)]" onClick={() => document.getElementById("projects")?.scrollIntoView({behavior:'smooth'})}>View Projects</button>
                        <a className="px-5 rounded-full border border-white/30 text-white px-6 py-3 font-semibold tracking-[0.02em] transition hover:-translate-y-0.5 transition hover:bg-[#5ad1]" href="/Adel_Kandi_CV.pdf" download  >Download CV</a>
                    </div>
                    {/* Links */}
                    <div className=" flex gap-6 justify-center lg:justify-start">
                        <a href="https://github.com/adelkandi" target="_blank">
                            <FaGithub   className="mt-6 w-10 h-10 text-gray-400 hover:text-[#f6b452] transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/adel-kandi-416bb925b/" target="_blank">
                            <FaLinkedin className="mt-6 w-10 h-10 text-gray-400 hover:text-[#f6b452] transition-colors"/>
                        </a>
                            
                        <a href="https://x.com/adel_kandi" target="_blank">
                            <FaXTwitter className="mt-6 w-10 h-10 text-gray-400 hover:text-[#f6b452] transition-colors"/>
                        </a>
                    </div>
                    

                </div>
                <div className="relative grid place-items-center">
                    <img src={Pfp} alt="Adel Kandi Picture" className="relative z-10 w-[200px]  lg:w-[min(380px,80vw)] aspect-[3/4] object-cover border-2 border-white/10 rounded-[25px]  shadow-[0_10px_60px_rgba(0,0,0,0.45)]" />
                </div> 
                
            </section>
        </>
    )
}