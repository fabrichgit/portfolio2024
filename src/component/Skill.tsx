import { FaReact, FaStickerMule, FaUser, FaWind } from "react-icons/fa"

function Skill() {
    return (
        <div className="flex flex-col gap-12 w-full h-max">
            <div className="flex flex-col gap-1">
                <div className="text-3xl italic">How can I help you?</div>
                <p>I can create perfect experiences for you, make all the applications from scratch.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mb-16 max-w-4xl md:auto-rows-[16rem]">
                <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1 bg-[#062031]">
                    <div className="w-full flex items-center justify-center">
                        <FaReact className="w-[46%] h-auto spin" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <FaReact />
                        <p className="text-lg font-semibold">React</p>
                        <p className="text-sm text-muted-foreground">
                            <span className="text-sm">I know React libarary and I can create whatever you want with this.</span>
                        </p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1 bg-[#062031]">
                    <div className="overflow-hidden w-full h-full rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                    <div className="flex flex-col gap-2">
                        <FaWind />
                        <p className="text-lg font-semibold">TailwindCSS</p>
                        <p className="text-sm text-muted-foreground">
                            <span className="text-sm">Since 2023, I start using TailwindCSS and I think it's the best tool for CSS.</span>
                        </p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-1 bg-[#062031]">
                    <img src="/typescript-skills.png" className="w-full h-full object-cover" />
                    <div className="flex flex-col gap-2">
                        {/** */}
                        <p className="text-lg font-semibold">TypeScript is my 2n language</p>
                        <p className="text-sm text-muted-foreground"></p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] md:col-span-2 bg-[#062031]"><div>
                    <img src="/images/nocode-journey.png" className="w-full h-full object-cover" />
                </div>
                    <div className="flex flex-col gap-2">
                        {/** */}
                        <p className="text-lg font-semibold">Backend with NodeJS and SaaS tools</p>
                        <p className="text-sm text-muted-foreground"><span className="text-sm">I have a knowledge of Node Js and many SaaS tools that enable you to create whatever you want.</span></p>
                    </div>
                </div>
                <div className="row-span-1 rounded-xl bg-card/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 justify-between flex flex-col space-y-4 [&amp;>p:text-lg] bg-[#062031]">
                    <div className="flex flex-col gap-4">
                        <div className="group relative">
                            <p className="text-sm font-medium leading-none flex items-center gap-2">
                                {/* <FaStickerMule/> */}
                                🤵🏻‍♂️
                                <span>user</span>
                            </p>
                            <p>Can you create a website ?</p>
                        </div>

                        <div className="group relative">
                            <p className="text-sm font-medium leading-none flex items-center gap-2">
                                🙋🏼‍♂️
                                <span>me</span>
                            </p>
                            <p>Can you create a website ?</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        {/** */}
                        <p className="text-lg font-semibold">Perfect usage of AI</p>
                        <p className="text-sm text-muted-foreground"><span className="text-sm">I have created several applications using AI tools.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill