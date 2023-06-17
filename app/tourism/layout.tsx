import { Children } from "@/app/layout";
import Navbar from "../../components/ui/Home/navbar";
import Footer from "../../components/ui/Home/footer";

export default function Layout({ children }: Children) {
    return (
        <>
            <Navbar />
            <div className="mx-auto container">
                {children}
            </div>
            <Footer />
        </>
    )
}