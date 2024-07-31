import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa"
import JS from "./JS"
import { TypeAnimation } from 'react-type-animation';

function Hero() {
    return (
        <div className="flex items-center justify-between w-full h-max p-4">
            <div className="flex flex-col gap-6 w-[53%]">
                <div className="flex gap-5">
                    <div className="w-max h-max inset-0 backdrop-blur-sm bg-[#082f499a] shadow-xl rounded-full overflow-hidden">
                        <img src="/brich.png" alt="" className="w-16 h-auto" />
                    </div>
                    <div className="text-2xl font-bold">Fabrich <br /> Vohanson</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="italic text-lg">
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                2000,
                                'and Programmer',
                                2000
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />

                    </div>
                    <p className="mt-2 text-[1.05rem]">
                        I love extends my knowledges on
                        <a className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-1 hover:bg-primary/20 transition-colors hover:underline" href="#">
                            javascript<JS />
                        </a><br />
                        I can create what you want with this.
                        <a className="relative rounded bg-muted ml-3 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-2 bg-primary/20 transition-colors underline" href="#">Get CV</a>
                    </p>
                    <div className="flex gap-3 mt-2">
                        <a href="https://github.com/fabrichgit" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#ffffff1c]">
                            <FaGithub className="w-full h-full" />
                        </a>
                        <a href="https://github.com/fabrichgit" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#2d57e041]">
                            <FaFacebook className="w-full h-full text-[#2d57e0]" />
                        </a>
                        <a href="https://github.com/fabrichgit" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#e0392d41]">
                            <FaInstagram className="w-full h-full text-[#e02d2d]" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-end w-[40%] h-max border-2 border-cyan-500 p-1 overflow-hidden blob shadow-lg shadow-[#1371b493]">
                <div className="w-full h-max bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden blob">
                    <img src="/brich.png" alt="" className="w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default Hero