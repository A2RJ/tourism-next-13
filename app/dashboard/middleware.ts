import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

export default authMiddleware({
    afterAuth(auth, req, evt) {
        if (!auth.userId && !auth.isPublicRoute) {
            console.log("apapapa");
            return console.log("apapapa vvvvvv");

            return redirectToSignIn({ returnBackUrl: req.url });
        }
    }
});