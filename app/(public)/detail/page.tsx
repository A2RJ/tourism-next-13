"use client";

import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const { data: session } = useSession();

  return (
    <>
      <p>Detail page {JSON.stringify(slug)} </p>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
}
