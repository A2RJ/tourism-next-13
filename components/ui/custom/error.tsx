import { Button } from "../button";

export default function CustomError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col space-y-3">
      <h2 className="text-red-500">Ops!</h2>
      <p>{error.message}</p>
      <Button onClick={reset} variant={"outline"}>
        Try again
      </Button>
    </div>
  );
}
