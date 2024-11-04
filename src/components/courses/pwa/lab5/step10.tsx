import Code from "@/components/code";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Card1() {
  const code = `<?php
// Include the database functions
require 'db.php';

// Get the selected category from the query string
$selectedCategory = $_GET['category'] ?? '';

// Fetch books by category using the database function
$filteredBooks = get_books_by_category($selectedCategory);
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
                    <h3><?= htmlspecialchars($book['title']); ?></h3>
                    <img src="<?= htmlspecialchars($book['cover']); ?>" alt="<?= htmlspecialchars($book['title']); ?> Cover" />
                    <p><strong>Description:</strong> <?= htmlspecialchars($book['description']); ?></p>
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
          <Title>Updating our category page</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            We'll update our category page to use the functions we exposed in
            the previous step.
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Code code={code} language="html" />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
