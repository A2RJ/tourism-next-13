"use client";

import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button type="submit" variant="outline" onClick={() => router.back()}>
        Back
      </Button>
    </div>
  );
}
