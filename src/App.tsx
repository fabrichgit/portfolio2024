import Header from "./component/Header"
import Hero from "./component/Hero"
import Skill from "./component/Skill"
import "./App.css"
import Project from "./component/Project"
import About from "./component/About"
import Line from "./component/Line"
import Footer from "./component/Footer"


function App() {
    return (
        <div className="flex justify-center w-full h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat overflow-y-auto overflow-x-hidden md:px-3">
            <Header />
            <div className="flex flex-col gap-14 w-[55rem] h-max pt-[7rem] text-neutral-300">
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