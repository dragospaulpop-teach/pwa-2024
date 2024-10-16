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
import { BookOpen } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";

import {
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Card19() {
  const { lightOrDark } = useTheme();

  const code = `<h2>Our Featured Books</h2>
<div class="book-list">
  <?php
  // Loop through the arrays and display each book
  for ($i = 0; $i < count($titles); $i++) {
    echo "<div class='book'>";
    echo "<h3>" . $titles[$i] . "</h3>";
    echo "<img src='" . $covers[$i] . "' alt='" . $titles[$i] . " Cover' />";
    echo "<p><strong>Description:</strong> " . $descriptions[$i] . "</p>";
    echo "<p><strong>Price:</strong> $" . number_format($prices[$i], 2) . "</p>";
    echo "</div>";
  }
  ?>
</div>`;
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 9: Display Each Book Using the Arrays</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now let’s loop through these arrays and display each book on the page.
        </Paragraph>
        <Paragraph>
          Below the categories section, add a new heading "Our Featured Books"
          and then use a for loop to display each book.
        </Paragraph>
        <Paragraph>
          Update your <Badge variant="outline">index.php</Badge> to look like
          this:
        </Paragraph>
        <ScrollArea className="h-[300px]">
          <SyntaxHighlighter
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
          <BookOpen className="w-4 h-4 mr-2" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The{" "}
            <Badge variant="secondary" className="cursor-pointer underline">
              <a
                href="https://www.php.net/manual/en/function.number-format.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                number_format()
              </a>
            </Badge>{" "}
            function ensures the price is displayed with two decimal places.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
