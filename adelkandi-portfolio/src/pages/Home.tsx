// Import Sections
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Skills from "../sections/Skills";

export default function Home(){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
        </>
    )


}