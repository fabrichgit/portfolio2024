import { FaFacebook, FaGithub } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

function Header() {
  return (
    <div className="absolute top-2 left-[50%] -translate-x-[50%] inset-0 backdrop-blur-sm bg-[#082f493b] flex items-center gap-10 w-max h-max px-5 py-3 rounded-2xl shadow-lg">
      <div className="font-mono font-bold translate-y-[0.1rem]">brich</div>
      <div className="flex gap-4">
        <a href="https://github.com/fabrichgit" target="_blank" className="w-5 h-5 rounded-lg shadow-lg shadow-[#ffffff1c]">
          <FaGithub className="w-full h-full" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100069735850632" target="_blank" className="w-5 h-5 rounded-lg shadow-lg shadow-[#2d57e041]">
          <FaFacebook className="w-full h-full text-[#2d57e0]" />
        </a>
        <a onClick={() => alert('hei.fabrich.@gmail.com')} title="hei.fabrich.2@gmail.com" target="_blank" className="w-5 h-5 rounded-lg shadow-lg shadow-[#e0392d41] cursor-pointer">
          <SiGmail className="w-full h-full text-[#e02d2d]" />
        </a>
      </div>
    </div>
  )
}

export default Header