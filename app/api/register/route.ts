import { baseAPIURL } from "@/lib/fecthAPI";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, password } = (await req.json()) as {
            name: string;
            email: string;
            password: string;
        };
        const result = await fetch(`${baseAPIURL}/auth/register`, {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
        });
        const json = await result.json();
        if (!result.ok) {
            throw json;
        }
        return NextResponse.json({
            user: {
                name,
                email,
            },
        });
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error,
            }),
            { status: error.status }
        );
    }
}
