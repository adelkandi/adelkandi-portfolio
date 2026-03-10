// Import Sections
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
            {/* Navbar */}
            <Navbar />

            {/* Sections */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            
            {/* Footer */}
            <Footer />


        </>
    )


}