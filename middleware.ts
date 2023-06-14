import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
    async afterAuth(auth, req, evt) {
        console.log(auth.userId);

        // if (!auth.userId && !auth.isPublicRoute) {
        //     return redirectToSignIn({ returnBackUrl: req.url });
        // }
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