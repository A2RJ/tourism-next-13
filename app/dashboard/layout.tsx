import { Metadata } from "next";
import { Children } from "@/types/layout";
import Head from "next/head";
import { Sidebar } from "@/components/ui/dashboard/sidebar";
import Footer from "@/components/ui/home/footer";

export const metadata: Metadata = {
  title: "Travel App",
  description: "Dashboard",
};
export default function Layout({ children }: Children) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      {/* <div className="container overflow-x-scroll scrollbar-none">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l p-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="border-t">
          <div className="bg-background">
            <div className="relative left-0 top-0">
              <div className="w-64 h-screen border-r fixed lg:block hidden">
                <Sidebar />
              </div>
              <div className="lg:ml-64 p-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
