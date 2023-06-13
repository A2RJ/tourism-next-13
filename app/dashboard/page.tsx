'use client'
import { useAuth, UserButton } from '@clerk/nextjs';

export default function Page() {
    const { getToken, userId, } = useAuth();
    return <b onClick={async () => {
        const token = await getToken()
        console.log({ token, userId });
    }}>Coba user_2R8VxDbDzmMnF0RD2Gsok0KDmGB
        <UserButton /></b>
}