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
  const code = {
    mysqli_procedural_plain: `<?php
// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'bookstore';

// Establish a connection (Procedural)
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check for a connection error
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Plain SQL query to retrieve all books
$sql = "SELECT title, author FROM books";

// Execute the query directly
$result = mysqli_query($conn, $sql);

// Fetch and display the results
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "Title: " . $row['title'] . ", Author: " . $row['author'] . "<br>";
    }
} else {
    echo "Error: " . mysqli_error($conn);
}

// Close the connection
mysqli_close($conn);
?>`,
    mysqli_procedural_prepared: `<?php
// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'bookstore';

// Establish a connection (Procedural)
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check for a connection error
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Prepare a statement to retrieve books by category
$category = 'Fiction'; // Example category
$stmt = mysqli_prepare($conn, "SELECT title, author FROM books WHERE category = ?");
if ($stmt === false) {
    die("Prepare failed: " . mysqli_error($conn));
}

// Bind parameters to the query ("s" denotes a string type)
mysqli_stmt_bind_param($stmt, "s", $category);

// Execute the prepared statement
mysqli_stmt_execute($stmt);

// Get the result
$result = mysqli_stmt_get_result($stmt);
while ($row = mysqli_fetch_assoc($result)) {
    echo "Title: " . $row['title'] . ", Author: " . $row['author'] . "<br>";
}

// Close the statement and connection
mysqli_stmt_close($stmt);
mysqli_close($conn);
?>`,
    mysqli_oo_plain: `<?php
// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'bookstore';

// Create a new connection instance (Object-Oriented)
$conn = new mysqli($host, $username, $password, $dbname);

// Check for a connection error
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Plain SQL query to retrieve all books
$sql = "SELECT title, author FROM books";

// Execute the query directly
$result = $conn->query($sql);

// Fetch and display the results
if ($result) {
    while ($row = $result->fetch_assoc()) {
        echo "Title: " . $row['title'] . ", Author: " . $row['author'] . "<br>";
    }
} else {
    echo "Error: " . $conn->error;
}

// Close the connection
$conn->close();
?>`,
    mysqli_oo_prepared: `<?php
// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'bookstore';

// Create a new connection instance (Object-Oriented)
$conn = new mysqli($host, $username, $password, $dbname);

// Check for a connection error
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare a statement to retrieve books by category
$category = 'Fiction'; // Example category
$stmt = $conn->prepare("SELECT title, author FROM books WHERE category = ?");
if ($stmt === false) {
    die("Prepare failed: " . $conn->error);
}

// Bind parameters to the query ("s" denotes a string type)
$stmt->bind_param("s", $category);

// Execute the prepared statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();
while ($row = $result->fetch_assoc()) {
    echo "Title: " . $row['title'] . ", Author: " . $row['author'] . "<br>";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>`,
    pdo_prepared: `<?php
// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$dbname = 'bookstore';

try {
    // Create a new PDO instance and set error mode to exception
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare and execute a statement to retrieve books by category
    $category = 'Fiction'; // Example category
    $stmt = $conn->prepare("SELECT title, author FROM books WHERE category = :category");
    $stmt->bindParam(':category', $category, PDO::PARAM_STR);
    $stmt->execute();

    // Fetch and display the result
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "Title: " . $row['title'] . ", Author: " . $row['author'] . "<br>";
    }

} catch (PDOException $e) {
    // Handle connection error
    echo "Connection failed: " . $e->getMessage();
}

// PDO automatically closes the connection when the script ends
?>`,
  };
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>mysqli and PDO Examples</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Here are some examples of how to use{" "}
            <span className="font-bold text-primary">mysqli</span> and{" "}
            <span className="font-bold text-primary">PDO</span> to connect to a
            database and execute queries.
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          <strong>
            Procedural <Badge variant="secondary">mysqli</Badge> with plain
            queries
          </strong>
        </Paragraph>
        <Code code={code.mysqli_procedural_plain} language="php"></Code>
        <Paragraph>
          <strong>
            Object-oriented <Badge variant="secondary">mysqli</Badge> with plain
            queries
          </strong>
        </Paragraph>
        <Code code={code.mysqli_oo_plain} language="php"></Code>
        <Paragraph>
          <strong>
            Procedural <Badge variant="secondary">mysqli</Badge> with prepared
            statements
          </strong>
        </Paragraph>
        <Code code={code.mysqli_procedural_prepared} language="php"></Code>
        <Paragraph>
          <strong>
            Object-oriented <Badge variant="secondary">mysqli</Badge> with
            prepared statements
          </strong>
        </Paragraph>
        <Code code={code.mysqli_oo_prepared} language="php"></Code>
        <Paragraph>
          <strong>
            <Badge variant="secondary">PDO</Badge> with prepared statements
          </strong>
        </Paragraph>
        <Code code={code.pdo_prepared} language="php"></Code>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Prepared statements ensure user input is treated as data rather than
            SQL commands by separating data from SQL syntax. All user input is
            safely bound to placeholders, making SQL injection attacks much
            harder. Consider the following plain statement:
            <Code
              code={`$query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";`}
              language="php"></Code>
            Here, if <Badge variant="secondary">$username</Badge> is set to{" "}
            <Badge variant="secondary">' OR '1'='1</Badge>, it could allow an
            attacker to bypass authentication.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
