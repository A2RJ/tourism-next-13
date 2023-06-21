"use client";

import CustomError from "@/components/ui/custom/error";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <CustomError error={error} reset={reset} />;
}
