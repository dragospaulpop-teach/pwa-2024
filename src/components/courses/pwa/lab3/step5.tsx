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
  const code = `<h2>Select a Category</h2>
<form action="category.php" method="get">
    <label for="category">Choose a category:</label>
    <select name="category" id="category">
        <option value="Fiction">Fiction</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <!-- Add more categories as needed -->
    </select>
    <button type="submit">Filter Books</button>
</form>`;

  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Part 3: Introducing Forms to Filter Books by Category</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Step 1: Add a Form with a Dropdown on the Index Page
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now that we have a system for filtering books by category using the
          query string, we’ll enhance the homepage with a form that lets users
          select a category from a dropdown menu.
        </Paragraph>
        <Paragraph>
          Go back to your <Badge variant="secondary">index.php</Badge> file and
          add a form with a dropdown menu at the top of the page. This form will
          submit the selected category to{" "}
          <Badge variant="secondary">category.php</Badge>.
        </Paragraph>
        <Paragraph>Add the following code just before the book list:</Paragraph>
        {/* <ScrollArea className="h-[200px]"> */}
        <Code code={code} language="html" />
        {/* </ScrollArea> */}
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The form sends a <Badge variant="secondary">GET</Badge> request to{" "}
            <Badge variant="secondary">category.php</Badge> with the selected
            category in the query string
          </AlertDescription>
        </Alert>
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The dropdown options correspond to the categories available in the
            books array
          </AlertDescription>
        </Alert>
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The <Badge variant="secondary">name</Badge> attribute on the{" "}
            <Badge variant="secondary">select</Badge> element is used to
            identify the form data when it’s submitted. You can see that the
            attribute value (<Badge variant="secondary">category</Badge>) is the
            same as the option name in the query string and the index name in
            the <Badge variant="secondary">$_GET</Badge> array.
          </AlertDescription>
        </Alert>
        <Alert className="mt-4">
          <BookOpen className="mr-2 h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            When the user selects a category and submits the form, they’ll be
            redirected to{" "}
            <Badge variant="secondary">
              category.php ?category=&lt;selected category&gt;
            </Badge>
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
