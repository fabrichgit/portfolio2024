import { FaReact, FaRobot } from "react-icons/fa"
import { BiLogoTailwindCss } from 'react-icons/bi'
import { FaUserTie } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { RiOpenaiLine } from "react-icons/ri";
import { SiBackendless } from "react-icons/si";
import { SiTypescript } from "react-icons/si";

function Skill() {
    return (
        <div className="flex flex-col gap-12 w-full h-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-16 max-w-4xl md:auto-rows-[16rem]">
                <div className="row-span-1 rounded-xl bg-card/10 group/bento transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1 hover:bg-[#062031]/80 bg-[#062031]/40 hover:shadow-2xl">
                    <div className="w-full flex items-center justify-center p-2 border-2 border-[#0a283b] rounded-lg bg-[#062031]">
                        <FaReact className="w-[46%] h-auto spin" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FaReact />
                        <p className="text-lg font-semibold">React</p>
                        <p className="text-sm text-muted-foreground">
                            <span className="text-sm">I can create whatever you want with it.</span>
                        </p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1 hover:bg-[#062031]/80 bg-[#062031]/40 hover:shadow-2xl">
                    <div className="overflow-hidden w-full h-full rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <div className="flex flex-col gap-2">
                        <BiLogoTailwindCss className="text-xl" />
                        <p className="text-lg font-semibold">TailwindCSS</p>
                        <p className="text-sm text-muted-foreground">
                            <span className="text-sm">I think it's the best tool for CSS.</span>
                        </p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1 hover:bg-[#062031]/80 bg-[#062031]/40 hover:shadow-2xl">
                    <img src="/typescript-skills.png" className="w-full h-full object-cover" />
                    <div className="flex flex-col gap-2">
                        <SiTypescript/>
                        <p className="text-lg font-semibold">TypeScript is my 2nd language</p>
                        <p className="text-sm text-muted-foreground"></p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-2 hover:bg-[#062031]/80 bg-[#062031]/40 hover:shadow-2xl"><div>
                    <img src="/backend.png" className="w-full h-full object-cover rounded-lg border-2 border-[#0a283b]" />
                </div>
                    <div className="flex flex-col gap-2">
                        <SiBackendless/>
                        <p className="text-lg font-semibold">Backend with NodeJS and SaaS tools</p>
                        <p className="text-sm text-muted-foreground"><span className="text-sm">I have a knowledge of Node Js and some SaaS tools that enable me being fast.</span></p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] hover:bg-[#062031]/80 bg-[#062031]/40 hover:shadow-2xl">
                    <div className="flex flex-col gap-4">
                        <div className="group relative">
                            <p className="text-sm font-medium leading-none flex items-center gap-2">
                                <FaUserTie />
                                <span>user</span>
                            </p>
                            <p className="mt-3 font-mono text-xs">
                                <TypeAnimation
                                    sequence={[
                                        'Can you create a website ?',
                                        200,
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    repeat={Infinity}
                                />
                            </p>
                        </div>

                        <div className="group relative">
                            <p className="text-sm font-medium leading-none flex items-center gap-2">
                                <FaRobot />
                                <span>assistant</span>
                            </p>
                            <p className="mt-3 font-mono text-xs">
                                <TypeAnimation
                                    sequence={[
                                        'Yes, of course',
                                        2000,
                                        ' just contact me',
                                        2000
                                    ]}
                                    wrapper="span"
                                    speed={30}
                                    repeat={Infinity}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <RiOpenaiLine/>
                        <p className="text-lg font-semibold">Usage of AI and API</p>
                        <p className="text-sm text-muted-foreground"><span className="text-sm">I created applications using AI tools and also with Restfull api.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill