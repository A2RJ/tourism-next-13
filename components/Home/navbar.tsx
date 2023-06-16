import { ListPariwisata } from "@/components/Home/pariwisata";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export default function Navbar() {
    return (
        <>
            <div
                className="h-16 sticky top-0 z-50 flex justify-between backdrop-blur-sm border-b bg-white/30 text-sm"
                id="navbar"
            >
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
            <div className="my-4">
                <div className="w-full rounded-sm h-72 border bg-blue-50 flex flex-col justify-center items-center">
                    <h4 className="font-semibold">Travel with us</h4>
                    <h1 className="text-3xl font-bold">Uncovering beautiful places</h1>
                </div>
                <div className="flex items-center justify-center p-5 w-[80%] rounded-md bg-white drop-shadow-sm mx-auto -mt-12">
                    <form className="w-full relative">
                        <input className="block p-4 pl-10 w-full text-sm text-gray-900 focus:outline-0 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" type="text" autoComplete="off" autoFocus placeholder="Where are you going today?" required />
                        <button className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2" type="submit"><Search /></button>
                    </form>
                </div>
                <div className="flex gap-2 justify-center my-4 overflow-x-scroll scrollbar-none">
                    {ListPariwisata.slice(0, 10).map((pariwisata) => (
                        <p key={pariwisata.name} className="border py-1 px-4 cursor-pointer rounded-full hover:border-blue-300">
                            {pariwisata.name}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}