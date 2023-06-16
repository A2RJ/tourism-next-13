"use client";

import * as React from "react";
import PopularDestinatipon from "@/components/Home/popularDestination";
import BasedLocation from "@/components/Home/basedLocation";
import Hero from "@/components/Home/hero";
import Navbar from "@/components/Home/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto container">
                <Hero />
                <PopularDestinatipon />
                <BasedLocation />
            </div>
        </div>
    );
}
