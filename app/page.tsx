import { SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
            <UserButton />
            <SignInButton
                redirectUrl="/verify"
                afterSignInUrl="/verify"
                afterSignUpUrl="/verify" />
        </div>
    )
}