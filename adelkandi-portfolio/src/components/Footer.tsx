import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export default function Footer(){
    return(
        <>
            <footer className="w-full bg-[#5ad1] bg-blur-xl z-50  mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-25">
                <p className="opacity-70 px-[8rem]">© {new Date().getFullYear()} Adel Kandi. All rights reserved.</p>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <a href="https://github.com/adelkandi" target="_blank" className="opacity-70 m-5 inline-flex items-center gap-2 hover:opacity-100"><FaGithub size={20} /> Github</a>
                    <a href="https://www.linkedin.com/in/adel-kandi-416bb925b/" target="_blank" className="opacity-70 m-5 inline-flex items-center gap-2 hover:opacity-100"><FaLinkedin size={20} /> LinkedIn</a>
                    <a href="https://x.com/adel_kandi" target="_blank" className="opacity-70 inline-flex items-center gap-2 hover:opacity-100"><FaXTwitter size={20} /> XTwitter</a>
                </div>
                

            </footer>
        </>
    )
}