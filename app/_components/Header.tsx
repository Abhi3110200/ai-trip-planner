"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SignInButton, SignOutButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
const menu = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Pricing",
        href: "/pricing"
    },
    {
        name: "Contact us",
        href: "/contact-us"
    }
]
function Header() {

    const { user } = useUser();
    const router = useRouter();
    return (
        <div className="flex justify-between items-center px-4 py-3">
            <div>
                <h2 className="text-2xl font-bold">AI Trip Planner</h2>
            </div>
            <div className="flex gap-8 items-center">
                {menu.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">{item.name}</h2>
                    </Link>
                ))}
            </div>
            {!user ? <SignInButton mode="modal">
                {
                    <Button>Get Started</Button>

                }
            </SignInButton> : <Link href="/create-trip">
                <Button>Create New Trip</Button>
            </Link>}
        </div>
    )
}

export default Header
