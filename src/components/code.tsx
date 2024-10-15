export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-xs bg-muted-foreground text-muted p-1 rounded-md px-2">
      {children}
    </code>
  );
}
