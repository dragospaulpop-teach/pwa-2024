import { cn } from "@/lib/utils";

export default function UnorderedList({
  children,
  inside,
  className,
}: {
  children: React.ReactNode;
  inside: boolean;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "list-inside list-disc text-muted-foreground",
        inside ? "ml-6" : "",
        className,
      )}>
      {children}
    </ul>
  );
}
