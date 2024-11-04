import Code from "@/components/code";
import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
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
// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'bookstore';

// Establish the connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Function to retrieve all books
function get_all_books() {
    global $conn;
    $sql = "SELECT title, description, cover, price, discount_price, category FROM books";
    $result = mysqli_query($conn, $sql);

    $books = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $book = [
            "title" => $row['title'],
            "description" => $row['description'],
            "cover" => $row['cover'],
            "price" => (float)$row['price'],
            "discount_price" => isset($row['discount_price']) ? (float)$row['discount_price'] : null,
            "category" => $row['category']
        ];
        $books[] = $book;
    }
    return $books;
}

// Function to retrieve books by category
function get_books_by_category($category) {
    global $conn;
    $sql = "SELECT title, description, cover, price, discount_price, category FROM books WHERE category = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $category);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    $books = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $book = [
            "title" => $row['title'],
            "description" => $row['description'],
            "cover" => $row['cover'],
            "price" => (float)$row['price'],
            "discount_price" => isset($row['discount_price']) ? (float)$row['discount_price'] : null,
            "category" => $row['category']
        ];
        $books[] = $book;
    }

    mysqli_stmt_close($stmt);
    return $books;
}

// Function to retrieve a single book by title
function get_book_by_title($title) {
    global $conn;
    $sql = "SELECT title, description, cover, price, discount_price, category FROM books WHERE title = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $title);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    $book = mysqli_fetch_assoc($result);
    if ($book) {
        $book['price'] = (float)$book['price'];
        $book['discount_price'] = isset($book['discount_price']) ? (float)$book['discount_price'] : null;
    }

    mysqli_stmt_close($stmt);
    return $book;
}

// Function to update a book's details by title
function update_book($title, $newData) {
    global $conn;

    // Prepare update statement
    $sql = "UPDATE books SET title = ?, description = ?, category = ?, price = ?, cover = ? WHERE title = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param(
        $stmt,
        "sssdss",
        $newData['title'],
        $newData['description'],
        $newData['category'],
        $newData['price'],
        $coverPath,
        $title
    );

    $success = mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    return $success;
}
?>`;
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Updating our app files</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Changing our app code to read data from the database
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Following D.R.Y. principles, we will update our app code to read data
          from the database instead of using the hardcoded data.
        </Paragraph>
        <Paragraph>
          We will first create a <Badge variant="secondary">db.php</Badge> file
          that will handle the database connection and queries. We'll expose a
          global connection variable (<Badge variant="secondary">$conn</Badge>)
          that will be used by the rest of the app to interact with the
          database. We'll also expose 4 functions:{" "}
          <Badge variant="secondary">get_all_books()</Badge>,{" "}
          <Badge variant="secondary">get_book_by_title($title)</Badge>,{" "}
          <Badge variant="secondary">get_books_by_category($category)</Badge>,
          and <Badge variant="secondary">update_book($title, $new_data)</Badge>.
        </Paragraph>
        <Code code={code} language="php" />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
