import Code from "@/components/code";
import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
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
import { ScrollIcon } from "lucide-react";

export default function Card22() {
  const code = `<h2>Our Featured Books</h2>
<div class="book-list">
  <?php
  // Loop through the multidimensional array and display each book
  foreach ($books as $book) {
    echo "<div class='book'>";
    echo "<h3>" . $book['title'] . "</h3>";
    echo "<img src='" . $book['cover'] . "' alt='" . $book['title'] . " Cover' />";
    echo "<p><strong>Description:</strong> " . $book['description'] . "</p>";
    echo "<p><strong>Price:</strong> $" . number_format($book['price'], 2) . "</p>";
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
          <Subtitle>
            Step 12: Display Books Using the Multidimensional Array
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now we will modify the loop to iterate through the new $books array
          and display the information.
        </Paragraph>
        <Paragraph>Update the book display loop:</Paragraph>

        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll me
        </Paragraph>
        <ScrollArea className="h-[300px]">
          <Code code={code} language="php" />
        </ScrollArea>

        <Alert className="mt-4">
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            We use a <Badge variant="secondary">foreach</Badge> loop to iterate
            through the <Badge variant="secondary">$books</Badge> array. Each
            book is an associative array, so we can access its properties using
            keys like <Badge variant="secondary">$book['title']</Badge>,
            <Badge variant="secondary">$book['cover']</Badge>, etc.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
