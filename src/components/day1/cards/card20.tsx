import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import { useTheme } from "@/components/theme-provider";
import Title from "@/components/title";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import SyntaxHighlighter from "react-syntax-highlighter";

import {
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Card20() {
  const { lightOrDark } = useTheme();

  const code = `<style>
  .book-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .book {
    border: 1px solid #ddd;
    padding: 10px;
    width: 200px;
  }
  .book img {
    width: 100%;
    height: auto;
  }
</style>`;
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 10: Styling the Book List (Optional)</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          For clarity in the browser, let’s add some simple inline CSS to format
          the book list.
        </Paragraph>

        <ScrollArea className="h-[300px]">
          <SyntaxHighlighter
            language="css"
            wrapLines={true}
            showLineNumbers={true}
            style={
              lightOrDark === "dark"
                ? atelierSulphurpoolDark
                : atelierSulphurpoolLight
            }
          >
            {code}
          </SyntaxHighlighter>
        </ScrollArea>
        <Alert className="mt-4">
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            Add the <Badge variant="secondary">style</Badge> tag to the{" "}
            <Badge variant="secondary">head</Badge> tag in your PHP file.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
