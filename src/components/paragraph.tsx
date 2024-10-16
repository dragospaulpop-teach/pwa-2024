import { cn } from "@/lib/utils";

export default function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-lg text-muted-foreground my-4", className)}>
      {children}
    </div>
  );
}
