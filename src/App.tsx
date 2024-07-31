import Header from "./component/Header"
import Hero from "./component/Hero"
import Skill from "./component/Skill"
import "./App.css"

type Props = {}

function App({ }: Props) {
    return (
        <div className="flex justify-center w-full h-full bg-[#020e16] overflow-y-auto">
            <Header />
            <div className="flex flex-col gap-14 w-[55rem] h-max pt-[7rem]">
                <Hero />
                <Skill/>
            </div>
        </div>
    )
}

export default App