import { FaFacebook, FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import ContactUs from "./ContactUs"

function Footer() {
    return (
        <div className="flex flex-col gap-6 items-center w-full py-8">
            <div className="flex flex-col items-center w-full">
                <h1 className="italic text-3xl w-full text-center text-shadow">Contact me</h1>
                <ContactUs />
            </div>
            <div className="flex gap-7">
                <a href="https://github.com/fabrichgit" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#ffffff1c]">
                    <FaGithub className="w-full h-full" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100069735850632" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#2d57e041]">
                    <FaFacebook className="w-full h-full text-[#2d57e0]" />
                </a>
                <a onClick={() => alert('hei.fabrich.@gmail.com')} title="hei.fabrich.2@gmail.com" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#e0392d41] cursor-pointer">
                    <SiGmail className="w-full h-full text-[#e02d2d]" />
                </a>
            </div>
            <strong>Copyright 2024 ©️ by fabrich</strong>
        </div>
    )
}

export default Footer
