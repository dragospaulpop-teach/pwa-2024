import { cn } from "@/lib/utils";

export default function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("my-4 text-lg text-foreground", className)}>
      {children}
    </div>
  );
}
