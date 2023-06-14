'use client'
import { useAuth, UserButton } from '@clerk/nextjs';

export default function Page() {
    const { getToken, userId, } = useAuth();
    return (
        <>
            <b>Coba</b>
            <UserButton />
        </>
    )
}