import { FaDownload, FaFacebook, FaGithub } from "react-icons/fa"
import JS from "./JS"
import { TypeAnimation } from 'react-type-animation';
import { SiGmail } from "react-icons/si";

function Hero() {
    return (
        <div className="flex flex-wrap items-center justify-between w-full h-max p-4">
            <div className="flex flex-col gap-6 w-full md:w-[53%]">
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
                        <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-1 hover:bg-primary/20 hover:underline transition-all hover:translate-x-2 hover:-translate-y-1 cursor-default">
                            javascript<JS />
                        </div><br />
                        I can create what you want with this.
                        <a className="relative rounded bg-muted ml-3 px-[0.4rem] pt-[0.3rem] pb-[0.2rem] font-mono text-[0.87rem] font-semibold inline-flex items-center gap-2 bg-primary/20 transition-colors" href="/fabrich.pdf" download>Get CV <FaDownload className="text-xs text-cyan-500 -translate-y-[0.1rem] animate-bounce"/></a>
                    </p>
                    <div className="flex gap-3 mt-4">
                        <a href="https://github.com/fabrichgit" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#ffffff1c]">
                            <FaGithub className="w-full h-full" />
                        </a>
                        <a href="https://github.com/fabrichgit" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#2d57e041]">
                            <FaFacebook className="w-full h-full text-[#2d57e0]" />
                        </a>
                        <a onClick={() => alert('hei.fabrich.@gmail.com')} title="hei.fabrich.2@gmail.com" target="_blank" className="w-7 h-7 rounded-lg shadow-lg shadow-[#e0392d41] cursor-pointer">
                            <SiGmail className="w-full h-full text-[#e02d2d]" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-end w-full md:w-[43%] h-max border-2 border-cyan-500 p-1 overflow-hidden blob shadow-lg shadow-[#1371b493]">
                <div className="w-full h-max pt-7 bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden blob">
                    <img src="/brich.png" alt="" className="w-full h-auto"/>
                </div>
            </div>
        </div>
    )
}

export default Hero