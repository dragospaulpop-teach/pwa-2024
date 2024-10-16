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

export default function Card26() {
  const { lightOrDark } = useTheme();

  const code = {
    books: `<?php
  $books = [
    [
      "title" => "The Great Gatsby",
      "description" => "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
      "cover" => "https://placekitten.com/200/300",
      "price" => 10.99,
      "discount_price" => 8.99
    ],
    [
      "title" => "1984",
      "description" => "A dystopian novel set in a totalitarian society ruled by Big Brother.",
      "cover" => "https://placekitten.com/210/300",
      "price" => 8.99
    ],
    [
      "title" => "To Kill a Mockingbird",
      "description" => "A novel about the serious issues of rape and racial inequality.",
      "cover" => "https://placekitten.com/220/300",
      "price" => 12.50
    ],
    [
      "title" => "The Catcher in the Rye",
      "description" => "The experiences of a young boy who leaves his boarding school to wander New York City.",
      "cover" => "https://placekitten.com/230/300",
      "price" => 9.75
    ]
  ];
?>`,
    include: `<?php
  // Include the book data from another file
  include 'books.php';
?>`,
  };

  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Step 16: Modularizing the Code with include or require
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now, let’s move the book data into a separate PHP file and include it
          in index.php. We’ll also explain the difference between{" "}
          <Badge variant="secondary">include</Badge>,{" "}
          <Badge variant="secondary">require</Badge>, and their{" "}
          <Badge variant="secondary">require_once</Badge> and{" "}
          <Badge variant="secondary">include_once</Badge> counterparts.
        </Paragraph>

        <Paragraph>
          Create a new PHP file called{" "}
          <Badge variant="secondary">books.php</Badge> inside your bookstore
          directory and move the books array to it.
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
            {code.books}
          </SyntaxHighlighter>
        </ScrollArea>

        <Paragraph>Include the books.php file inside your index.php:</Paragraph>

        <SyntaxHighlighter
          wrapLines={true}
          showLineNumbers={true}
          style={
            lightOrDark === "dark"
              ? atelierSulphurpoolDark
              : atelierSulphurpoolLight
          }
        >
          {code.include}
        </SyntaxHighlighter>

        <ScrollArea className="h-[200px]">
          <Alert className="mt-4">
            <Lightbulb className="w-4 h-4 mr-2" color="#d97706" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              <Badge variant="secondary">include</Badge>: This will include and
              evaluate the specified file. If the file is not found, it will
              throw a warning but continue executing the script.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <Lightbulb className="w-4 h-4 mr-2" color="#d97706" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              <Badge variant="secondary">require</Badge>: This works similarly
              to include, but if the file is not found, it will throw a fatal
              error and halt execution.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <Lightbulb className="w-4 h-4 mr-2" color="#d97706" />
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
              <Badge variant="secondary">include_once</Badge> and{" "}
              <Badge variant="secondary">require_once</Badge>: Both ensure the
              file is included only once. If it has already been included, PHP
              will not load it again. This is useful for avoiding redefinitions
              or redeclarations of variables, functions, or classes.
            </AlertDescription>
          </Alert>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}