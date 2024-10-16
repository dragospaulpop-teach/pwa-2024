import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import { useTheme } from "@/components/theme-provider";
import Title from "@/components/title";
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

export default function Card21() {
  const { lightOrDark } = useTheme();

  const code = `$books = [
  [
    "title" => "The Great Gatsby",
    "description" => "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
    "cover" => "https://placekitten.com/200/300",
    "price" => 10.99
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
];`;
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Step 11: Creating a Multidimensional Associative Array
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now that we have individual arrays for each book property, it’s time
          to combine them into one multidimensional associative array. This will
          make it easier to manage each book as an object-like entity with
          related properties (title, description, cover, price).
        </Paragraph>
        <Paragraph>
          Replace the separate arrays with a single associative array. In your
          index.php, remove the individual arrays and replace them with this
          structure:
        </Paragraph>

        <ScrollArea className="h-[300px]">
          <SyntaxHighlighter
            language="php"
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
      </CardContent>
    </Card>
  );
}
