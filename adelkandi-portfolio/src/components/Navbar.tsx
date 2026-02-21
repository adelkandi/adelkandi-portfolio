import Logo from './Logo.tsx';

function Navbar(){
    return(
        <nav className="bgw-full bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    {/* Links - centered */}
                    <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
                        <a href="/" className="text-[#F8F8FF] hover:text-[#5A8DEE] transition-colors">Home</a>
                        <a href="/about" className="text-[#F8F8FF] hover:text-[#5A8DEE] transition-colors">About</a>
                        <a href="/projects" className="text-[#F8F8FF] hover:text-[#5A8DEE] transition-colors">Projects</a>
                        <a href="/contact" className="text-[#F8F8FF] hover:text-[#5A8DEE] transition-colors">Contact Me</a>
                    </div>

                    {/* Right side - can add button here */}
                    <div className="flex-shrink-0 hidden md:flex items-center">
                        {/* Add a button or profile link here if needed */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar