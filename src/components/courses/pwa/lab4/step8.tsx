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
import { AlertCircleIcon } from "lucide-react";

export default function Card1() {
  const code = `<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php");
    exit;
}

$jsonData = file_get_contents('books.json');
$books = json_decode($jsonData, true);

// Get the book title from the query string
$titleToEdit = $_GET['title'] ?? '';
$bookToEdit = null;

// Find the book to edit
foreach ($books as &$book) {
    if ($book['title'] === $titleToEdit) {
        $bookToEdit = &$book;
        break;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $bookToEdit['title'] = $_POST['title'];
    $bookToEdit['description'] = $_POST['description'];
    $bookToEdit['category'] = $_POST['category'];
    $bookToEdit['price'] = (float)$_POST['price'];

    // Check if a new cover image is uploaded
    if (!empty($_FILES['cover']['tmp_name'])) {
        $coverPath = 'covers/' . basename($_FILES['cover']['name']);
        move_uploaded_file($_FILES['cover']['tmp_name'], $coverPath);
        $bookToEdit['cover'] = $coverPath;
    }

    // Save the updated book data
    file_put_contents('books.json', json_encode($books, JSON_PRETTY_PRINT));
    header("Location: index.php");
    exit;
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
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Creating the Edit Book Page</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Paragraph>
          The <Badge variant="secondary">edit_book.php</Badge> page will
          retrieve the book details and allow the user to edit them.
        </Paragraph>
        <Code code={code} language="php" />
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use the reference operator{" "}
            <Badge variant="secondary">&amp;</Badge> when we loop through the
            books array to make sure the changes we make to the book are
            reflected in the original array. Without this, the{" "}
            <Badge variant="secondary">$book</Badge> variable would only hold a
            copy of the book and the changes would not be reflected in the
            original array. Basic programming concept: passing data by reference
            vs by value.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use the <Badge variant="secondary">$_FILES</Badge> superglobal
            variable to handle the cover image upload. PHP automatically creates
            this variable when a file is uploaded. The{" "}
            <Badge variant="secondary">$_FILES</Badge> variable contains the
            uploaded file's name, type, temporary location, and size. The array
            is indexed by the names of the input fields in the form.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            PHP saves files in a temporary location and it is up to us to
            manually move the file into the desired location. We use the{" "}
            <Badge variant="secondary">move_uploaded_file()</Badge> function to
            move the uploaded file to the covers directory.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use the <Badge variant="secondary">file_put_contents()</Badge>
            function along with the{" "}
            <Badge variant="secondary">json_encode()</Badge> function to save
            the updated book data back to the{" "}
            <Badge variant="secondary">books.json</Badge> file.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use the <Badge variant="secondary">header()</Badge> function to
            redirect the user back to the homepage after the book is updated.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            In order to upload binary data (files), we need to set the{" "}
            <Badge variant="secondary">enctype</Badge> attribute of the form to{" "}
            <Badge variant="secondary">multipart/form-data</Badge>.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
