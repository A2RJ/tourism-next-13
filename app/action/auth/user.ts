"use server";
import { signJWT } from "@/lib/jwt";
import { setCookie, getCookie } from "cookies-next";

type VerifyToken = {
    fullName: string;
    email: any;
    phoneNumber: any;
};
export const verifyToken = async ({
    fullName,
    email,
    phoneNumber,
}: VerifyToken) => {
    try {
        let token = await signJWT(
            {
                sub: JSON.stringify({ fullName, email, phoneNumber }),
            },
            { exp: "2h" }
        );
        const result = await fetch("http://127.0.0.1:3333", {
            method: "POST",
            body: JSON.stringify({ token }),
        });
        token = await result.json();
        return { token }
    } catch (error) {
        throw error;
    }
};
