import { Children } from "@/types/layout";
import Head from "next/head";

export default function Layout({ children }: Children) {
  return (
    <>
      <Head>
        <script
          defer
          src="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js"
        ></script>
        {/* <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
          rel="stylesheet"
        /> */}
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen absolute top-0 w-full">{children}</div>
    </>
  );
}
