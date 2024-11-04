export default function Table({
  headers,
  data,
  caption,
}: {
  headers: string[];
  data: string[][];
  caption?: string;
}) {
  return (
    <div className="my-2 overflow-x-auto">
      <table className="border-collapse text-left">
        {caption && (
          <caption className="caption-top text-xs italic">{caption}</caption>
        )}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="border border-foreground/20 p-2 pb-2 text-center text-sm font-semibold text-muted-foreground">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border border-foreground/20 odd:bg-accent even:bg-accent/50 hover:bg-background">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-foreground/20 p-2 pb-2 text-xs text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
