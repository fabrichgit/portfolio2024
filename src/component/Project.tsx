import { BiLinkExternal } from "react-icons/bi"

export default function Project() {
    return (
        <div className="flex flex-col gap-12 w-full h-max">
            <Flow />
        </div>
    )
}

function Flow() {

    return (
        <div className="flex justify-center w-full h-max">
            <div className="flex flex-wrap w-full pb-14 pro">
                <div className="flex flex-col flex-grow gap-7 md:w-max w-full h-full">
                    <div className="w-full text-start text-shadow font-bold text-3xl">Projects</div>
                    <div className="flex flex-col gap-6 w-full md:w-[70%] h-max">
                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/juma-fabrichhttps://github.com/Juma-fabrich" target="_blank" className="flex items-center gap-2 font-mono text-xl w-max">
                                <span className="text-cyan-500">0.</span>
                                <span className="underline">Juma</span>
                                <span className="text-sm">🔗</span>
                            </a>
                            <p>
                                <span className="mr-2">📱</span>Social media, and chat app for family gathering.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/Ecommunity-fabrich" target="_blank" className="flex items-center gap-2 font-mono text-xl w-max">
                                <span className="text-cyan-500">1.</span>
                                <span className="underline">E-community</span>
                                <span className="text-sm">🔗</span>
                            </a>
                            <p>
                                <span className="mr-2">💼</span>Plateform for enterprise to find client for them product and client for project.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/Foodie-fabrich" target="_blank" className="flex items-center gap-2 font-mono text-xl w-max">
                                <span className="text-cyan-500">2.</span>
                                <span className="underline">Foodie</span>
                                <span className="text-sm">🔗</span>
                            </a>
                            <p>
                                <span className="mr-2">🥗</span>Nice food e-commerce web app.
                            </p>
                        </div>

                        <a href="https://github.com/fabrichgit" target="_blank" className="flex items-center gap-2 w-max mt-5 font-bold text-cyan-600 hover:underline">See more <BiLinkExternal /> </a>
                    </div>
                </div>

                <div className="relative md:block hidden w-48 h-48 translate-y-20 -translate-x-28  hover:scale-[85%] transition-all">
                    <div className="absolute -top-[50%] w-[90%] h-[90%] p-2 bg-[#062031] rounded opacity-65 transition duration-700 pro2 blob overflow-hidden">
                        <img src="/community.png" alt="" className="w-full h-full border-2 border-[#09334e] rounded blob" />
                    </div>
                    <div className="absolute top-[70%] left-[25%] w-[90%] h-[90%] p-2 bg-[#062031] rounded opacity-45 transition duration-700 pro3 blob overflow-hidden">
                        <img src="/buyLine.jpeg" alt="" className="w-full h-full border-2 border-[#09334e] rounded blob" />
                    </div>
                    <div className="absolute left-[70%] top-0 w-[90%] h-[90%] bg-[#062031] rounded transition duration-700 pro1 blob overflow-hidden" style={{ position: 'relative' }}>
                        <div className="bg-gradient-to-t from-pink-600 to-cyan-500 w-full h-full"></div>
                        <img src="/chatpp.jpeg" alt="" className="absolute top-1 left-1 w-[96%] h-[96%] border-2 border-[#09334e] rounded blob" />
                    </div>
                </div>
            </div>
        </div>
    )
}