import Header from "./component/Header"
import Hero from "./component/Hero"
import Skill from "./component/Skill"
import "./App.css"
import Project from "./component/Project"
import About from "./component/About"
import Line from "./component/Line"
import Footer from "./component/Footer"
import {Toaster} from "react-hot-toast"
import AnimatedCursor from "react-animated-cursor"

function App() {

    return (
        <div className="flex justify-center w-full h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat overflow-y-auto overflow-x-hidden md:px-3">
                <Toaster/>
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    innerStyle={{
                        backgroundColor: '#3f83f8'
                    }}
                    outerStyle={{
                        border: '3px solid #3f83f8'
                    }}
                    />
                {/* <!-- Backgroun1d decorative elements --> */}
                <div className="fixed inset-0 pattern-dots opacity-30 pointer-events-none"></div>
                <div className="fixed inset-0 pattern-grid opacity-20 pointer-events-none"></div>
                {/* <!-- Animated circles --> */}
                <div className="fixed -left-48 -top-48 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="fixed -right-48 -bottom-48 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div> 
                <Header />
                <div className="flex flex-col gap-14 w-[57rem] h-max pt-[7rem] px-3 text-neutral-300">
                    <Hero />
                    <Line/>
                    <Skill />
                    <Project />
                    <Line/>
                    <About/>
                    <Footer/>
                </div>
        </div>
    )
}

export default App