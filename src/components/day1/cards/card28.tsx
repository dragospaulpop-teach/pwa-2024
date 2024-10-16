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
import { Lightbulb } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Card28() {
  const { lightOrDark } = useTheme();

  const code = `<?php
// Load the book data from the JSON file
$jsonData = file_get_contents('books.json');

// Decode the JSON data into a PHP array
$books = json_decode($jsonData, true);
?>`;

  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 18: Load and Parse JSON in PHP</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Modify index.php to load the data from the JSON file instead of using
          a PHP array. Replace the previous inclusion of books.php with this:
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
          Create a new file called <Badge variant="secondary">books.json</Badge>{" "}
          inside your bookstore folder.
        </Paragraph>

        <ScrollArea className="h-[200px]">
          <SyntaxHighlighter
            wrapLines={true}
            showLineNumbers={true}
            language="php"
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
          <Lightbulb className="w-4 h-4 mr-2" color="#d97706" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <Badge variant="secondary">file_get_contents()</Badge> Reads the
            contents of the books.json file into a string.
          </AlertDescription>
        </Alert>
        <Alert className="mt-4">
          <Lightbulb className="w-4 h-4 mr-2" color="#d97706" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <Badge variant="secondary">json_decode()</Badge> Converts the JSON
            string into a PHP array. The true parameter ensures it’s decoded
            into an associative array, which we can use just like before.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
