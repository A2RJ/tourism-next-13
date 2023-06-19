import PopularDestinatipon from "@/components/ui/Home/popularDestination";
import BasedLocation from "@/components/ui/Home/basedLocation";
import Hero from "@/components/ui/Home/hero";
import Footer from "./footer";

export default function LandingPage() {
    return (
        <>
            <Hero />
            <PopularDestinatipon />
            <BasedLocation />
            <Footer />
        </>
    );
}
