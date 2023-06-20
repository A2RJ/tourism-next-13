import LandingPage from "@/components/ui/home/LandingPage";
import Navbar from "@/components/ui/home/navbar";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto container">
        <LandingPage />
      </div>
    </>
  );
}
