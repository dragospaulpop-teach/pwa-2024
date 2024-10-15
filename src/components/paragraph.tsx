export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-muted-foreground my-4">{children}</p>;
}
