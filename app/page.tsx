import { Button } from "@/components/ui/button";
import LandingPage from "@/components/ui/custom/LandingPage";
import BasedLocation from "@/components/package/basedLocation";
import { Navigation } from "lucide-react";

export default function Page() {
  return (
    <div className="mb-10">
      <ol
        className="flex items-center whitespace-nowrap min-w-0 mt-5"
        aria-label="Breadcrumb"
      >
        <li className="text-sm">
          <a
            className="flex items-center text-gray-500 hover:text-blue-600"
            href="#"
          >
            Home
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </a>
        </li>
        <li className="text-sm">
          <a
            className="flex items-center text-gray-500 hover:text-blue-600"
            href="#"
          >
            Discover
            <svg
              className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </a>
        </li>
        <li
          className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
          aria-current="page"
        >
          Popular
        </li>
      </ol>

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
