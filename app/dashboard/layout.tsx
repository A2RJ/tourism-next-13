import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Children } from "../layout";

export default function Layout({ children }: Children) {
    // const { user } = auth()
    // if (!user) redirect('/')
    // if (!user.unsafeMetadata.token) redirect('/')
    return children;
}
