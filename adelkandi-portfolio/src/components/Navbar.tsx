import Logo from './Logo.tsx';
import {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className="w-full bg-[#5ad1] backdrop-blur-xl sticky top-0 left-0 z-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Links - centered / Desktop Menu */}
                    <div className="hidden lg:flex  items-center justify-center flex-1 space-x-8">
                        <a href="#" className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors">Home</a>
                        <a href="#about" className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors">About</a>
                        <a href="#skills" className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors">Skills</a>
                        <a href="#projects" className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors">Projects</a>
                        <a href="#contact" className="text-[#F8F8FF] hover:text-[#5ad1b2] transition-colors">Contact Me</a>
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
                        <div className="lg:hidden absolute top-full right-4 mt-2 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-[#5ad1b2]/35 bg-[#0b1220]/95 backdrop-blur-xl shadow-xl z-50">
                            <div className="flex flex-col p-3">
                                <a href="#" className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Home</a>
                                <a href="#about" className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>About</a>
                                <a href="#skills" className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Skills</a>
                                <a href="#projects" className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Projects</a>
                                <a href="#contact" className="text-[#F8F8FF] text-base px-5 py-3 rounded-lg hover:bg-[#5ad1b2]/20 transition-colors text-left" onClick={() => setMenuOpen(false)}>Contact Me</a>
                            </div>
                        </div>
            )}
        </nav>
    )
}

