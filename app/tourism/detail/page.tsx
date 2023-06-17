'use client'

import { useSearchParams } from "next/navigation"

export default function Page() {
    const searchParams = useSearchParams()
    const slug = searchParams.get('slug')

    return <p>Detail page {JSON.stringify(slug)}</p>
}