import { CopyIcon } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";
import { useTheme } from "./theme-provider";

export default function Code({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const { lightOrDark } = useTheme();
  return (
    <div className="relative">
      <CopyIcon
        className="sticky top-6 ml-auto mr-2 w-4 h-4 cursor-pointer text-muted-foreground hover:text-foreground"
        onClick={() => {
          navigator.clipboard.writeText(code);
          toast.success("Copied to clipboard");
        }}
      />
      <SyntaxHighlighter
        wrapLines={true}
        wrapLongLines={true}
        style={
          lightOrDark === "dark"
            ? atelierSulphurpoolDark
            : atelierSulphurpoolLight
        }
        language={language}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
