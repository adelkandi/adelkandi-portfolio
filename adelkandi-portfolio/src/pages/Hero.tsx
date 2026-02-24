import Navbar from "../components/Navbar"
import Pfp from "../assets/IMG_3050.jpg"

export default function Hero(){
    return(
        <>
            <Navbar />
            <section className="hero-section min-h-[calc(100vh-72px)] px-[8rem] py-[18rem] grid grid-cols-1 gap-15 items-center  bg-[radial-gradient(1200px_400px_at_10%_0%,rgba(90,209,178,0.12),transparent_60%),radial-gradient(900px_400px_at_90%_20%,rgba(246,180,82,0.16),transparent_55%)]">
                <div className="container max-w[620px]">
                    {/* Presentation */}
                    <div className="grid gap-2 mb-5">
                        <div className="presntation-container text-6xl">
                            <h1 className="text-[#5ad1b2] mb-7">HI,</h1><h2 className="mb-7"> I'm Adel</h2>
                        </div>
                    </div>
                    
                    <p className="mb-3">Full Stack Developer</p>
                    <p className="text-2xl mb-7">Web Developer focused on building clean, scalable web applications.</p>
                       {/* Buttons */}

                </div>
                <div className="">
                    <img src={Pfp} alt="Adel Kandi Picture" />
                </div>
                
            </section>
        </>
    )
}