import { useEffect, useState } from "react"

function JS() {

    const [step, set] = useState<number>(1)

    useEffect(() => {
        const timer = setInterval(() => {
            set(prev => prev === 4 ? 1 : prev+1)
        }, 2000)

        return () => timer as unknown as void
    }, [])

    switch (step) {
        case 1:
            return <img src="/js.png" alt="" className="w-auto h-5"/>
        case 2:
            return <img src="/react.png" alt="" className="w-auto h-5"/>
        case 3:
            return <img src="/node.png" alt="" className="w-auto h-5"/>
        case 4:
            return <img src="/nest.png" alt="" className="w-auto h-5"/>
        default:
            break;
    }
}

export default JS