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

// Hardcoded credentials for simplicity
$validUsername = 'admin';
$validPassword = 'password123';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Verify credentials
    if ($username === $validUsername && $password === $validPassword) {
        $_SESSION['logged_in'] = true;
        $_SESSION['username'] = $username;
        header("Location: index.php"); // Redirect to the homepage
        exit;
    } else {
        $error = "Invalid username or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <?php if (isset($error)): ?>
        <p style="color: red;"><?= $error; ?></p>
    <?php endif; ?>
    <form method="post" action="login.php">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required>
        <br>
        <button type="submit">Login</button>
    </form>
</body>
</html>`;

  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Setting Up the Login Page</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Paragraph>
          First, create a <Badge variant="secondary">login.php</Badge> page in
          your <Badge variant="secondary">bookstore</Badge> folder and add the
          following code.
        </Paragraph>
        <Code code={code} language="php" />
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use the <Badge variant="secondary">POST</Badge> method to send
            data to the server without appending it to the query string.
            Remember, this alone does not encrypot your data., A man-in-the
            middle attack is still possible unless you use HTTPS.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use <Badge variant="secondary">$_SERVER['REQUEST_METHOD']</Badge>{" "}
            to check if the form is submitted. When we first load the page, the
            browser issues a <Badge variant="secondary">GET</Badge> request, so
            this check is false. When we submit the form, the browser issues a{" "}
            <Badge variant="secondary">POST</Badge> request, so this check is
            true and the logic is run.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use{" "}
            <Badge variant="secondary">header("Location: index.php");</Badge> to
            redirect the user to the homepage. This function tell the web server
            to attach a 3xx header to the response.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use <Badge variant="secondary">exit;</Badge> to stop the script
            from running any further.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            We use <Badge variant="secondary">session_start()</Badge> at the
            very start of the page to start the session. The reason we need to
            call this function is because the session has to be started before
            we use the <Badge variant="secondary">$_SESSION</Badge> superglobal
            variable. When we call this function the server creates a new
            session ID and a session file on the server and immediately sends a
            header to the browser to save the session ID in a cookie. This
            function must be called before any output is sent to the browser.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
