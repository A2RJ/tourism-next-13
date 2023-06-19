import { Envs } from "@/config/config";
import { SignJWT, jwtVerify } from "jose";

export const signJWT = async (
    sub: string,
    exp: string
) => {
    try {
        const secret = new TextEncoder().encode(Envs.JWT_SECRET_KEY);
        const alg = "HS256";
        return new SignJWT({ sub })
            .setProtectedHeader({ alg })
            .setExpirationTime(exp ?? '1d')
            .setIssuedAt()
            .setSubject(sub)
            .sign(secret);
    } catch (error) {
        throw error;
    }
};
""
export const verifyJWT = async <T>(token: string): Promise<T> => {
    try {
        return (
            await jwtVerify(
                token,
                new TextEncoder().encode(Envs.JWT_SECRET_KEY)
            )
        ).payload as T;
    } catch (error) {
        console.log(error);
        throw new Error("Your token has expired.");
    }
};
