import { cn } from "@/lib/utils";

export default function UnorderedList({
  children,
  inside,
}: {
  children: React.ReactNode;
  inside: boolean;
}) {
  return (
    <ul
      className={cn(
        "list-disc list-inside text-muted-foreground",
        inside ? "ml-6" : ""
      )}
    >
      {children}
    </ul>
  );
}
