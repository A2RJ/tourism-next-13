"use client";

import * as React from "react";
import PopularDestinatipon from "@/components/Home/popularDestination";
import BasedLocation from "@/components/Home/basedLocation";
import Footer from "@/components/Home/footer";
import Navbar from "@/components/Home/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <PopularDestinatipon />
            <BasedLocation />
            <Footer />
        </div>
    );
}
