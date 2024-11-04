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
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php");
    exit;
}

// Include the database functions
require 'db.php';

// Get the book title from the query string
$titleToEdit = $_GET['title'] ?? '';
$bookToEdit = get_book_by_title($titleToEdit);

if (!$bookToEdit) {
    die("Book not found.");
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Create an array to hold updated data
    $updatedData = [
        'title' => $_POST['title'],
        'description' => $_POST['description'],
        'category' => $_POST['category'],
        'price' => (float)$_POST['price'],
        'cover' => $bookToEdit['cover'] // Default to existing cover path
    ];

    // Check if a new cover image is uploaded
    if (!empty($_FILES['cover']['tmp_name'])) {
        $coverPath = 'covers/' . basename($_FILES['cover']['name']);
        if (move_uploaded_file($_FILES['cover']['tmp_name'], $coverPath)) {
            $updatedData['cover'] = $coverPath;
        }
    }

    // Update the book in the database
    $updateSuccess = update_book($titleToEdit, $updatedData);

    if ($updateSuccess) {
        header("Location: index.php");
        exit;
    } else {
        echo "Error updating the book.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Edit Book - <?= htmlspecialchars($bookToEdit['title']); ?></title>
</head>
<body>
    <h1>Edit Book - <?= htmlspecialchars($bookToEdit['title']); ?></h1>
    <form method="post" enctype="multipart/form-data">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" value="<?= htmlspecialchars($bookToEdit['title']); ?>" required>
        <br>

        <label for="description">Description:</label>
        <textarea name="description" id="description" required><?= htmlspecialchars($bookToEdit['description']); ?></textarea>
        <br>

        <label for="category">Category:</label>
        <input type="text" name="category" id="category" value="<?= htmlspecialchars($bookToEdit['category']); ?>" required>
        <br>

        <label for="price">Price:</label>
        <input type="number" name="price" id="price" step="0.01" value="<?= htmlspecialchars($bookToEdit['price']); ?>" required>
        <br>

        <label for="cover">Cover Image:</label>
        <input type="file" name="cover" id="cover">
        <br>

        <button type="submit">Save Changes</button>
    </form>
</body>
</html>`;
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Updating our edit book page</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            We'll update our edit book page to use the functions we exposed in
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
