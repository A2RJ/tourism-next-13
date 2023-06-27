import Footer from "@/components/ui/custom/footer";
import Navbar from "@/components/ui/custom/navbar";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import { Children } from "@/types/layout";

export default function Layout({ children }: Children) {
  return (
    <div className="container">
      <div className="border-t">
        <div className="bg-background">
          <div className="relative left-0 top-0">
            <Sidebar />
            <div className="lg:ml-64 ml-0 p-4 min-h-[calc(100vh-80px)]">
              <Navbar />
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
