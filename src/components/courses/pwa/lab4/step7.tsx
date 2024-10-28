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
  const code = `<?php foreach ($books as $book): ?>
    <div class='book'>
        <h3><?= $book['title']; ?></h3>
        <img src="<?= $book['cover']; ?>" alt="<?= $book['title']; ?> Cover" />
        <p><strong>Description:</strong> <?= $book['description']; ?></p>
        <p><strong>Category:</strong> <?= $book['category']; ?></p>
        <p><strong>Price:</strong> $<?= number_format($book['price'], 2); ?></p>

        <!-- Show edit link if logged in -->
        <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true): ?>
            <p><a href="edit_book.php?title=<?= urlencode($book['title']); ?>">Edit</a></p>
        <?php endif; ?>
    </div>
<?php endforeach; ?>`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Displaying the Edit Link Only When Logged In</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Paragraph>
          Update <Badge variant="secondary">index.php</Badge> to show an Edit
          link next to each book if the user is logged in.
        </Paragraph>
        <Code code={code} language="php" />
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            Remember to call <Badge variant="secondary">session_start()</Badge>
            at the very start of the page whenver you want to read or write to
            the <Badge variant="secondary">$_SESSION</Badge> superglobal
            variable.
          </AlertDescription>
        </Alert>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            The new link make the book's title available as a parameter in the
            query string. We'll use that as the book identifier.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
