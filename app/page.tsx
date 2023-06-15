"use client";

import * as React from "react"
import { Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
    return (
        <div className="mx-auto max-w-7xl">
            <div id="navbar" className="h-16 flex justify-between border-blue-100 border-b-[1px]">
                <div className="my-auto">
                    <h4 className="font-extrabold">Tourism</h4>
                </div>
                {/* <div className="flex gap-5 my-auto">
                    <Input placeholder="Search" />
                </div> */}
                <div className="my-auto flex gap-2">
                    <Button variant={'outline'} className="border-blue-100">Masuk</Button>
                    <Button>Login</Button>
                </div>
            </div>
            <div className="mt-6">
                <Skeleton className="w-full h-60 bg-blue-200" />
            </div>
            <div className="my-4">
                <h4 className="font-extrabold pb-2">Browse</h4>
                <div className="grid gap-4 grid-cols-6">
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                    <Skeleton className="bg-blue-200 h-[300px] w-full" />
                </div>
            </div>
            <div className="my-4">
                <h4 className="font-extrabold pb-2">Based on your location</h4>
                <div className="h-60 border border-blue-300 rounded-lg flex justify-center items-center">
                    <Button>
                        <Navigation className="mr-2" />
                        Turn on your location
                    </Button>
                </div>
            </div>
            <div className="mt-4">
                <Skeleton className="bg-blue-200 h-[300px] w-full rounded-b-none" />
            </div>
        </div>
    );
}  