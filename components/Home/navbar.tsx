import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <div
            className="h-16 sticky top-0 z-50 backdrop-blur-sm border-b bg-white/30 text-sm py-3"
            id="navbar"
        >
            <div className="container flex justify-between">
                <div className="my-auto">
                    <h4 className="font-extrabold text-2xl">Travelin</h4>
                </div>
                <div className="my-auto grid grid-cols-4 gap-3">
                    <a href="#">Home</a>
                    <a href="#">Browse</a>
                    <a href="#">Wish list</a>
                    <a href="#">About us</a>
                </div>
                <div className="my-auto grid grid-cols-2 gap-2">
                    <Button variant={"outline"} className="border-blue-800">
                        Sign up
                    </Button>
                    <Button className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Sign in</Button>
                </div>
            </div>
        </div>
    )
}