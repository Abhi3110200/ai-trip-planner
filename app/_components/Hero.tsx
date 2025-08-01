"use client"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDown, Globe2, Landmark, Plane, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { PopularCityList } from "./PopularCityList"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

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

function Hero() {
    const { user } = useUser(); 
    const router = useRouter();
    const onSend = () => {
        if (!user) {
            router.push("/sign-in");
            return;
        }
    }
    return (
        <div className="mt-24 flex justify-center w-full">
            <div className="max-w-3xl text-center w-full space-y-6">
                <h1 className="text-xl md:text-5xl font-bold">Hey, I'm your personal <span className="text-primary">Trip Planner</span></h1>
                <p className="text-lg text-gray-500 font-light">Tell me where you want and I'll handle the rest: Flight, Hotel, Trip Plan - all in seconds.</p>
                <div>
                    <div className='border rounded-2xl p-3 relative'>
                        <Textarea placeholder="Create Your trip Paris to New York" className="w-full
                        h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"/>
                        <Button size={'icon'} className="absolute bottom-4 right-4" onClick={() => onSend()}><Send className="w-4 h-4" /></Button>
                    </div>
                </div>
                <div className="flex gap-5">
                    {Suggestion.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white transition-all">
                            {item.icon}
                            <h2 className="text-sm">{item.title}</h2>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center flex-col">

                    <h2 className='my-7 mt-14 flex gap-2 text-center items-center'>Not Sure where to start? <strong>See how it works</strong> <ArrowDown className="w-6 h-6 animate-bounce" /></h2>
                    <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/watch?v=KJQcHfP0Q2c"
                        thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
                        thumbnailAlt="Dummy Video Thumbnail"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
