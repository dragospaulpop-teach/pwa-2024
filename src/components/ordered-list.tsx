import { cn } from "@/lib/utils";

export default function OrderedList({
  children,
  inside,
}: {
  children: React.ReactNode;
  inside: boolean;
}) {
  return (
    <ol className={cn("list-decimal list-inside", inside ? "ml-6" : "")}>
      {children}
    </ol>
  );
}
