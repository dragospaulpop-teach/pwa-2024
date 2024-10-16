import Code from "@/components/code";
import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollIcon } from "lucide-react";

export default function Card24() {
  const code = `<h2>Our Featured Books</h2>
<div class="book-list">
  <?php
  foreach ($books as $book) {
    echo "<div class='book'>";
    echo "<h3>" . $book['title'] . "</h3>";
    echo "<img src='" . $book['cover'] . "' alt='" . $book['title'] . " Cover' />";
    echo "<p><strong>Description:</strong> " . $book['description'] . "</p>";

    // Check if the book has a discount price
    if (isset($book['discount_price'])) {
      echo "<p><strong>Price:</strong> <span style='text-decoration: line-through;'>$" . number_format($book['price'], 2) . "</span> ";
      echo "<strong>Discounted Price:</strong> $" . number_format($book['discount_price'], 2) . "</p>";
    } else {
      echo "<p><strong>Price:</strong> $" . number_format($book['price'], 2) . "</p>";
    }

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
          <Subtitle>Step 14: Bonus task</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>Bonus Task: Conditional Display of Discounts</Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          Some books might have both a regular price and a discount price. Let’s
          conditionally show the discounted price (if available) and cross out
          the original price.
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll me
        </Paragraph>
        <ScrollArea className="h-[300px]">
          <Code code={code} language="php" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
