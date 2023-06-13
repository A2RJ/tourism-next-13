import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    afterAuth(auth, req, evt) {
        console.log("After auth");
    },
    beforeAuth(req, evt) {
        console.log('Before auth');
    },
    publicRoutes: ["/", '/verify']
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};