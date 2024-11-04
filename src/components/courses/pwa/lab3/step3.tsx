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
  const code = `<p><strong>Category:</strong>
    <a href="category.php?category=<?= urlencode($book['category']); ?>">
        <?= $book['category']; ?>
    </a>
</p>`;

  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Part 2: Adding Links to Category Pages</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 1: Make the Category Name a Link</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now we’ll turn each category name into a link that points to a page
          specifically for that category.
        </Paragraph>
        <Paragraph>
          Modify the <Badge variant="secondary">category</Badge> display in{" "}
          <Badge variant="secondary">index.php</Badge> to make it a clickable
          link. Each link will point to a specific category page, passing the
          category name as a query string parameter.
        </Paragraph>
        {/* <ScrollArea className="h-[200px]"> */}
        <Code code={code} language="html" />
        {/* </ScrollArea> */}

        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <Badge variant="secondary">urlencode()</Badge>: This function
            ensures that special characters in the category name (like spaces)
            are safely encoded for use in the URL.
          </AlertDescription>
        </Alert>
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            We’re generating links like{" "}
            <Badge variant="secondary">category.php?category=Fiction</Badge>,
            which will allow us to filter books based on the category via the
            query string.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
