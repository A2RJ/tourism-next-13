import Breadcrumb, { BreadcrumbItem } from "@/components/ui/breadcumb";
import { Button } from "@/components/ui/button";
import LandingPage from "@/components/ui/custom/LandingPage";
import { Navigation } from "lucide-react";

export default function Page() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", url: "#" },
    { label: "Discover", url: "#" },
    { label: "Popular" },
  ];

  return (
    <div className="mb-10">
      <Breadcrumb items={breadcrumbItems} />

      <LandingPage />

      <div className="h-60 border rounded-lg gap-4 flex flex-col justify-center items-center mt-10 border-blue-300">
        <h1 className="max-w-lg text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          aspernatur corporis numquam ipsam odio optio placeat. Sed cum commodi
          provident!
        </h1>
        <Button className="bg-blue-300 text-black">
          <Navigation className="mr-2 w-4" />
          Turn on your location
        </Button>
      </div>
    </div>
  );
}
