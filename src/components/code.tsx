export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-xs bg-muted-foreground text-muted p-1 rounded-md px-2 py-0.5">
      {children}
    </code>
  );
}
