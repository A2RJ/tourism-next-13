import "swiper/css";
import "swiper/css/pagination";

import { Children } from "@/types/layout";
import { Sidebar } from "@/components/ui/dashboard/sidebar";

export default function Layout({ children }: Children) {
  return (
    <div className="bg-background">
      <div className="relative left-0 top-0">
        <Sidebar />
        <div className="lg:ml-64 ml-0 p-4 min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
