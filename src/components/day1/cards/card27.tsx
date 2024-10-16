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

export default function Card27() {
  const { lightOrDark } = useTheme();

  const code = `[
  {
    "title": "The Great Gatsby",
    "description": "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
    "cover": "https://placekitten.com/200/300",
    "price": 10.99,
    "discount_price": 8.99
  },
  {
    "title": "1984",
    "description": "A dystopian novel set in a totalitarian society ruled by Big Brother.",
    "cover": "https://placekitten.com/210/300",
    "price": 8.99
  },
  {
    "title": "To Kill a Mockingbird",
    "description": "A novel about the serious issues of rape and racial inequality.",
    "cover": "https://placekitten.com/220/300",
    "price": 12.50
  },
  {
    "title": "The Catcher in the Rye",
    "description": "The experiences of a young boy who leaves his boarding school to wander New York City.",
    "cover": "https://placekitten.com/230/300",
    "price": 9.75
  }
]`;

  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 17: Moving Data to a JSON File</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now let’s take this a step further by moving the books data to a{" "}
          <Badge variant="secondary">JSON</Badge> file, a popular format for
          data exchange between services, and load the data dynamically using
          PHP’s JSON functions.
        </Paragraph>

        <Paragraph>
          <Badge variant="secondary">JSON (JavaScript Object Notation)</Badge>{" "}
          is a lightweight data format often used to transfer data between
          clients (such as browsers) and servers over the web. It's easy for
          humans to read and write, and it’s also easy for machines to parse and
          generate. It's the default format used in APIs to exchange data
          between services and clients.
        </Paragraph>
        <Paragraph>
          Create a new file called books.json inside your bookstore folder.
        </Paragraph>

        <ScrollArea className="h-[200px]">
          <SyntaxHighlighter
            wrapLines={true}
            showLineNumbers={true}
            language="json"
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
            The structure here is similar to the associative arrays we used in
            PHP, but JSON uses key-value pairs enclosed in double quotes, and
            it's a more portable data format.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
