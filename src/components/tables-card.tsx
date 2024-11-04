export default function TablesCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-wrap justify-around gap-2 rounded-md border border-foreground/20 bg-secondary p-4 shadow-md">
      {children}
    </div>
  );
}
