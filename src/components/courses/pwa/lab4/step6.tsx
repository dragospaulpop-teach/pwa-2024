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
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php");
    exit;
}
?>`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Guarding the Edit Page</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Create <Badge variant="secondary">edit_book.php</Badge> in your
          bookstore folder.
        </Paragraph>
        <Paragraph>
          Restrict access to the{" "}
          <Badge variant="secondary">edit_book.php</Badge> page by checking if
          the user is logged in. Place this code at the top of{" "}
          <Badge variant="secondary">edit_book.php</Badge>:
        </Paragraph>
        <Code code={code} language="php" />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
