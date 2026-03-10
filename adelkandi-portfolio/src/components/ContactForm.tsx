import React, { useState } from "react"
import MailLogo from "../assets/email.png"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isSending, setIsSending] = useState(false)
    const [statusMessage, setStatusMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSending(true)
        setStatusMessage("")

        const serviceId = "service_0zmndlc";
        const templateId = "template_y9u1ttl";
        const publicKey = "g8iSK51lgoB41m8Ts";

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Adel Kandi",
            subject,
            message,
        }

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setStatusMessage("Message sent successfully.");
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } catch {
            setStatusMessage("Failed to send message. Please try again.");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <>
            {/* Contact Form */}
            <div className="mb-20 flex items-center justify-center">
                <form
                    className="grid grid-cols-2 border border-[#5ad1b2] rounded-xl w-[50rem] h-[30rem] bg-[#1E1E1E] p-5"
                    onSubmit={handleSubmit}
                >
                    {/* Mail Logo */}
                    <div className="mt-3">
                        <img src={MailLogo} alt="Mail Logo" className="h-[15rem] w-[15rem]" />
                    </div>

                    <div className="grid grid-rows-5 gap-2 mt-3">
                        <input
                            className="border-b-2 border-[#5ad1b2] h-10 outline-none transition"
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            className="border-b-2 border-[#5ad1b2] h-10 outline-none"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            className="border-b-2 border-[#5ad1b2] h-10 outline-none"
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                        <textarea
                            className="border-b-2 border-[#5ad1b2] outline-none mb-2"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />

                        {/* Submit Button */}
                        <button
                            className="w-[8rem] h-[3rem] bg-[#5ad1b2] rounded-2xl transition duration-300 hover:bg-[#3fbfa0] disabled:opacity-70"
                            type="submit"
                            disabled={isSending}
                        >
                            {isSending ? "Sending..." : "Send Message"}
                        </button>
                        {statusMessage && <p className="text-sm text-grey-300">{statusMessage}</p>}
                    </div>
                </form>
            </div>
        </>
    );
}