"use server";

import CustomError from "@/components/ui/custom/error";

export default async function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <CustomError error={error} reset={reset} />;
      </body>
    </html>
  );
}
