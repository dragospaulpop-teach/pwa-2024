import { cn } from "@/lib/utils";

export default function OrderedList({
  children,
  inside,
  className,
}: {
  children: React.ReactNode;
  inside: boolean;
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "list-inside list-decimal rounded-md p-4",
        inside ? "ml-6" : "",
        className,
      )}>
      {children}
    </ol>
  );
}
