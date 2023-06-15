import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextRequest } from "next/server";
import { Envs } from "./app/config/config";

async function middleware(request: NextRequest) { }

export default authMiddleware({
    afterAuth(auth, req, evt) {
        return middleware(req)
    },
    beforeAuth(req, evt) {
    },
    publicRoutes: ["/", '/verify']
});

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/",
        "/(api|trpc)(.*)",
    ],
};