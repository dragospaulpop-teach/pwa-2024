import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UnorderedList from "@/components/unordered-list";

export default function Card29() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 19: Hands-On Exercises</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now that you've seen how to use JSON for data storage and retrieval,
          let's practice with some hands-on exercises:
        </Paragraph>

        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 1: Add a New Book to books.json</strong>
          <UnorderedList inside>
            <li>
              Open the books.json file and add a new book to the list, making
              sure to include a title, description, cover, and price.
            </li>
            <li>Reload the page to see your new book displayed.</li>
          </UnorderedList>
        </Paragraph>

        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 2: Convert Books Data to an Object</strong>

          <UnorderedList inside>
            <li>
              Modify the json_decode() function to return the data as an object
              (instead of an associative array). Update your PHP code to access
              the book properties using the object notation ($book-&gt;title
              instead of $book['title']).
              <p>Hint: Remove the true parameter from json_decode().</p>
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 3: Validate JSON Before Decoding</strong>
          <UnorderedList inside>
            <li>
              Add a validation step before decoding the JSON. If the JSON fails
              to load or is invalid, display an error message instead of
              breaking the page.
            </li>
          </UnorderedList>
          <Alert className="mt-4">
            <AlertTitle>Hint</AlertTitle>
            <AlertDescription>
              Use{" "}
              <Badge variant="secondary" className="cursor-pointer underline">
                <a
                  href="https://www.php.net/manual/en/function.json-last-error.php"
                  target="_blank"
                  rel="noopener noreferrer">
                  json_last_error()
                </a>
              </Badge>{" "}
              to check if decoding was successful.
            </AlertDescription>
          </Alert>
        </Paragraph>
      </CardContent>
    </Card>
  );
}
