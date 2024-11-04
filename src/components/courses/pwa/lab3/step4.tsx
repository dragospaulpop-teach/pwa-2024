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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function Card1() {
  const code = `<?php
// Load the book data from the JSON file
$jsonData = file_get_contents('books.json');
$books = json_decode($jsonData, true);

// Get the category from the query string
$selectedCategory = isset($_GET['category']) ? $_GET['category'] : '';

// Filter books by category
$filteredBooks = array_filter($books, function ($book) use ($selectedCategory) {
    return $book['category'] === $selectedCategory;
});
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books in <?= htmlspecialchars($selectedCategory); ?> Category</title>
</head>
<body>
    <h1>Books in <?= htmlspecialchars($selectedCategory); ?> Category</h1>
    <div class="book-list">
        <?php if (count($filteredBooks) > 0): ?>
            <?php foreach ($filteredBooks as $book): ?>
                <div class='book'>
                    <h3><?= $book['title']; ?></h3>
                    <img src="<?= $book['cover']; ?>" alt="<?= $book['title']; ?> Cover" />
                    <p><strong>Description:</strong> <?= $book['description']; ?></p>
                    <p><strong>Price:</strong> $<?= number_format($book['price'], 2); ?></p>
                </div>
            <?php endforeach; ?>
        <?php else: ?>
            <p>No books found in this category.</p>
        <?php endif; ?>
    </div>
</body>
</html>`;

  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Part 2: Adding Links to Category Pages</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 2: Create Category Pages</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          We’ll now create a PHP page called{" "}
          <Badge variant="secondary">category.php</Badge> that filters the books
          based on the category passed via the query string.
        </Paragraph>
        <Paragraph>
          Create a new file called{" "}
          <Badge variant="secondary">category.php</Badge>
          in your bookstore directory.
        </Paragraph>
        <Paragraph>
          Add the following code to{" "}
          <Badge variant="secondary">category.php</Badge> to display books that
          match the selected category:
        </Paragraph>
        {/* <ScrollArea className="h-[200px]"> */}
        <Code code={code} language="html" />
        {/* </ScrollArea> */}
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <Badge variant="secondary">$_GET['category']</Badge> retrieves the
            category passed via the query string.
          </AlertDescription>
        </Alert>
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <Badge variant="secondary">array_filter()</Badge> filters the books
            array, returning only those that match the selected category.
          </AlertDescription>
        </Alert>
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The <Badge variant="secondary">htmlspecialchars()</Badge> function
            is used to safely display user input, protecting against XSS
            attacks.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
