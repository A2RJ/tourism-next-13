'use client'
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { signJWT, verifyJWT } from "@/lib/jwt";
import { SignUpButton, useUser } from "@clerk/nextjs";

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
            const { data } = await axios.post('/', { token })
            // const session = {
            //     token: data.access_token,
            //     role: data.role
            // }
            await user?.update({
                unsafeMetadata: data
            });
            router.push('/dashboard')
            // redirect('/dashboard')
        } catch (error) {
            throw error
        }
    };

    return user
        ? <>
            <button onClick={goToDashboard}>Click me to update your name</button>
            <p>user.firstName: {user?.firstName}</p>
            <p>user.lastName: {user?.lastName}</p>
        </>
        : <>
            <p>Unauthenticated</p>
            <SignUpButton afterSignUpUrl="/verify" />
        </>
} 