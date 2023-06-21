import { Metadata } from "next";
import { Sidebar } from "@/components/ui/music/sidebar";
import { Children } from "@/types/layout";
import Head from "next/head";

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
      <div className="container overflow-x-scroll scrollbar-none">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
