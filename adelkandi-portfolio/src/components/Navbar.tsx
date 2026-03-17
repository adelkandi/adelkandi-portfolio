import Logo from './Logo.tsx';
import {Link} from 'react-scroll' 
import {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="w-full bg-[#5ad1] backdrop-blur-xl sticky top-0 left-0 z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0" onClick={() => {document.getElementById('/')?.scrollIntoView({behavior:'smooth'})}}>
                        <Logo />
                    </div>

                    {/* Links - centered / Desktop Menu */}
                    <div className="hidden lg:flex  items-center justify-center flex-1 space-x-8">
                        <Link  to="/" smooth={true} duration={500} className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors cursor-pointer">Home</Link>
                        <Link to="about" smooth={true} duration={500} className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors cursor-pointer"  >About</Link>
                        <Link to="skills" smooth={true} duration={500} className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors cursor-pointer">Skills</Link>
                        <Link to="projects" smooth={true} duration={500} className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors cursor-pointer">Projects</Link>
                        <Link to="contact" smooth={true} duration={500} className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors cursor-pointer">Contact Me</Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        type="button"
                        className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full text-[#F8F8FF] bg-[#0b1220]/35 border border-[#5ad1b2]/45 shadow-sm hover:bg-[#0b1220]/55 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                    

                </div>
            </div>
            {/* Mobile / Tablet Menu */}
            {menuOpen && (
                <div className="lg:hidden absolute top-full right-4 mt-2 w-[min(10rem,calc(100vw-2rem))] rounded-2xl border border-[#5ad1b2]/35 bg-[#0b1220]/95 backdrop-blur-xl shadow-xl z-50">
                    <div className="flex flex-col p-3">
                        <Link to="/" smooth={true} duration={500} className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="about" smooth={true} duration={500} className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link to="skills" smooth={true} duration={500} className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Skills</Link>
                        <Link to="projects" smooth={true} duration={500} className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link to="contact" smooth={true} duration={500} className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Contact Me</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

