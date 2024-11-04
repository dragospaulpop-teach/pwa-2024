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

// Fetch all books using the database function
$books = get_all_books();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bookstore</title>
</head>
<body>
    <h2>Select a Category</h2>
    <form action="category.php" method="get">
      <label for="category">Choose a category:</label>
      <select name="category" id="category">
        <option value="Fiction">Fiction</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <!-- Add more categories as needed -->
      </select>
      <button type="submit">Filter Books</button>
    </form>

    <h2>Our Featured Books</h2>
    <div class="book-list">
      <?php foreach ($books as $book): ?>
      <div class='book'>
        <h3>
          <?= htmlspecialchars($book['title']); ?>
        </h3>
        <img src="<?= htmlspecialchars($book['cover']); ?>" alt="<?= htmlspecialchars($book['title']); ?> Cover" />
        <p><strong>Description:</strong>
          <?= htmlspecialchars($book['description']); ?>
        </p>
        <p><strong>Category:</strong>
            <a href="category.php?category=<?= urlencode($book['category']); ?>">
                <?= htmlspecialchars($book['category']); ?>
            </a>
        </p>
        <?php if (isset($book['discount_price'])): ?>
        <p><strong>Price:</strong> <span style='text-decoration: line-through;'>$
            <?= number_format($book['price'], 2); ?>
          </span>
          <strong>Discounted Price:</strong> $
          <?= number_format($book['discount_price'], 2); ?>
        </p>
        <?php else: ?>
        <p><strong>Price:</strong> $
          <?= number_format($book['price'], 2); ?>
        </p>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </div>
</body>
</html>`;
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Updating our index page</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            We'll update our index page to use the functions we exposed in the
            previous step.
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
