'use client'
import { useAuth } from '@clerk/nextjs'

export default function Home() {
    const { getToken } = useAuth()

    return (
        <>

        </>
    );
}
