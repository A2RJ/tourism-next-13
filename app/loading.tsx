import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton className="w-3/12 h-32 rounded-xl" />
      <Skeleton className="w-3/12 h-32 rounded-xl" />
      <Skeleton className="w-3/12 h-32 rounded-xl" />
    </>
  );
}
