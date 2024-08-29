import { FaDownload } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

function About() {

    return (
        <div className="flex flex-col gap-5 w-full h-max">
            <div className="italic text-3xl w-full text-center text-shadow">
                <TypeAnimation
                    sequence={[
                        'Hire me now',
                        2000,
                        "I promise you my best",
                        5000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={Infinity}
                />
            </div>
            <p className="text-center transition-all">
                <span className="underline">Certified</span> professionally on
                <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold inline-flex items-center gap-1 hover:bg-primary/20 hover:underline transition-all hover:translate-x-2 hover:-translate-y-1 cursor-default">
                    react and node.
                </div>Skillfull combined with my natures bellow, ain't that enough ?
                <a className="relative rounded bg-muted ml-2 px-[0.4rem] pt-[0.3rem] pb-[0.2rem] font-mono text-[0.87rem] font-semibold inline-flex items-center gap-2 bg-primary/20 transition-colors" href="/fabrich.pdf" download>Resume <FaDownload className="text-xs text-cyan-500 -translate-y-[0.1rem] animate-bounce" /></a>
            </p>
            <div className="flex flex-wrap justify-center gap-5 w-full">
                <div className="relative flex items-center gap-3 bg-indigo-950 py-2 px-3 rounded overflow-hidden cursor-default">
                    💪🏽 <span>highly motivated</span>
                    <div className="absolute bottom-0 left-0 h-[0.2rem] w-full bg-gradient-to-r to-indigo-600 from-cyan-500"></div>
                </div>
                <div className="relative flex items-center gap-3 bg-indigo-950 py-2 px-3 rounded overflow-hidden cursor-default">
                    🪶 <span>self-educated</span>
                    <div className="absolute bottom-0 left-0 h-[0.2rem] w-[80%] bg-gradient-to-r to-indigo-600 from-cyan-500"></div>
                </div>
                <div className="relative flex items-center gap-3 bg-indigo-950 py-2 px-3 rounded overflow-hidden cursor-default">
                    👌🏽 <span>adaptable</span>
                    <div className="absolute bottom-0 left-0 h-[0.2rem] w-[60%] bg-gradient-to-r to-indigo-600 from-cyan-500"></div>
                </div>
                <div className="relative flex items-center gap-3 bg-indigo-950 py-2 px-4 rounded overflow-hidden cursor-default">
                    🇫🇷 <span>FRS</span>
                    <div className="absolute bottom-0 left-0 h-[0.2rem] w-[50%] bg-gradient-to-r to-indigo-600 from-cyan-500"></div>
                </div>
                <div className="relative flex items-center gap-3 bg-indigo-950 py-2 px-3 rounded overflow-hidden cursor-default">
                    🇺🇲 <span>ENG</span> <span className="text-xs font-bold">70%</span>
                    <div className="absolute bottom-0 left-0 h-[0.2rem] w-[70%] bg-gradient-to-r to-indigo-600 from-cyan-500"></div>
                </div>
            </div>
        </div>
    )
}

export default About
