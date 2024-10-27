import { LoaderPinwheel } from "lucide-react";

export function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        <LoaderPinwheel className="h-24 w-24 animate-spin" strokeWidth={1} />
        Loading...
      </h1>
    </div>
  );
}
