import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container">
      <Skeleton className="w-full h-full rounded-xl" />
    </div>
  );
}
