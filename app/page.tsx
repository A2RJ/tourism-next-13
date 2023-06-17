import LandingPage from "@/components/ui/Home/LandingPage";
import Navbar from "@/components/ui/Home/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="mx-auto container">
                <LandingPage />
            </div>
        </>
    )
}