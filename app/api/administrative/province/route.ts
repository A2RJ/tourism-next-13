import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    // const session = await getServerSession(authOptions);

    // return NextResponse.json({
    //     province: session,
    // });

    const url = process.env.API_URL
    return NextResponse.json({ url })
}

export async function HEAD(request: Request) { }

export async function POST(request: Request) { }

export async function PUT(request: Request) { }

export async function DELETE(request: Request) { }

export async function PATCH(request: Request) { }