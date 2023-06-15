import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect, } from "next/navigation";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const { user } = auth()
    if (!user) redirect('/')
    if (!user.unsafeMetadata.token) redirectToSignIn({ returnBackUrl: '/dashboard' })
    return (
        <div>
            <p>Ini layout</p>
            {children}
        </div>
    )
}