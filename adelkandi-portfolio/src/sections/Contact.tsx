import ContactForm from "../components/ContactForm"




export default function Contact(){
    return(
        <>
        {/* Contact Section */}
            <section id="contact" className="contact-section px-4 sm:px-6 md:px-10 lg:px-[8rem]">
            <div className="">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-1 w-12 bg-[#5ad1b2]"></div>
                        <h1 className="text-3xl font-bold text-[#F8F8FF] sm:text-4xl md:text-5xl">Contact Me</h1>
                    </div>
                </div>
                <ContactForm />

            </div>
            </section>
        </>
    )
}