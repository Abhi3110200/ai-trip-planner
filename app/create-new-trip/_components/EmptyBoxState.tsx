import { Globe2, Plane, Landmark } from "lucide-react"


const Suggestion = [
    {
        title: "Create New Trip",
        icon: <Globe2 className="w-5 h-5 text-blue-400 hover:text-white transition-all" />
    },
    {
        title: "Inspire me where to go",
        icon: <Plane className="w-5 h-5 text-green-400 hover:text-white transition-all" />
    },
    {
        title: "Discover Hidden gems",
        icon: <Landmark className="w-5 h-5 text-orange-400 hover:text-white transition-all" />
    },
    {
        title: "Adventure Destination",
        icon: <Globe2 className="w-5 h-5 text-yellow-400 hover:text-white transition-all" />
    },
]

function EmptyBoxState({onSelectOption}:any) {
    return (
        <div className="mt-7">
            <h2 className="text-3xl font-bold text-center">Start Planning new trip using AI</h2>
            <p className="text-center mt-2 text-gray-400">Tell me where you want and I'll handle the rest: Flight, Hotel, Trip Plan - all in seconds.</p>
            <div className="flex flex-col gap-5">
                    {Suggestion.map((item, index) => (
                        <div key={index} 
                        onClick={() => onSelectOption(item.title)}
                        className="flex items-center gap-2 border rounded-full p-5 cursor-pointer hover:border-primary hover:text-primary transition-all">
                            {item.icon}
                            <h2 className="text-lg">{item.title}</h2>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default EmptyBoxState
