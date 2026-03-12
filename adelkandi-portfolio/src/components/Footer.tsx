import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export default function Footer(){
    return(
        <>
            <footer className="w-full bg-[#5ad1] bg-blur-xl z-50  mx-auto  px-4 sm:px-6 lg:px-40 flex flex-col items-center text-center gap-3 sm:flex-row sm:justify-between sm:text-left gap-4 lg:h-24">
                <p className="opacity-70 mt-2 sm:mt-0 text-sm sm:text-base">© {new Date().getFullYear()} Adel Kandi. All rights reserved.</p>
                <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 flex items-center justify-center sm:justify-between">
                    <a href="https://github.com/adelkandi" target="_blank" className="opacity-70 m-5 inline-flex items-center gap-2 hover:opacity-100"><FaGithub size={20} /> Github</a>
                    <a href="https://www.linkedin.com/in/adel-kandi-416bb925b/" target="_blank" className="opacity-70 m-5 inline-flex items-center gap-2 hover:opacity-100"><FaLinkedin size={20} /> LinkedIn</a>
                    <a href="https://x.com/adel_kandi" target="_blank" className="opacity-70 inline-flex items-center gap-2 hover:opacity-100"><FaXTwitter size={20} /> XTwitter</a>
                </div>
                

            </footer>
        </>
    )
}