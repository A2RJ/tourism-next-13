'use client'
import { useRouter } from "next/navigation";
import { SignUpButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import axiosAPI from "@/lib/axiosAPI";
import { signJWT } from "@/lib/jwt";

export default function Home() {
    const router = useRouter()
    const { user } = useUser();

    const goToDashboard = async () => {
        try { 
            const token = await signJWT({
                sub: JSON.stringify({
                    fullName: user?.fullName,
                    email: user?.primaryEmailAddress,
                    phoneNumber: user?.primaryPhoneNumber,
                })
            }, { exp: '2h' })
            const { data } = await axiosAPI.post('/', { token })
            await user?.update({
                unsafeMetadata: data
            });
            router.push('/dashboard')
        } catch (error) {
            throw error
        }
    };

    return user
        ? <>
            <Link href={'/'}>Back to home</Link> <br />
            <button onClick={goToDashboard}>Click me to update your name</button>
            <p>user.firstName: {user?.firstName}</p>
            <p>user.lastName: {user?.lastName}</p>
        </>
        : <>
            <p>Unauthenticated</p>
            <SignUpButton afterSignUpUrl="/verify" />
        </>
} 