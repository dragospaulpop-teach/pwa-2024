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
import UnorderedList from "@/components/unordered-list";

export default function Card1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Hands-On Exercises</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Here are some tasks to reinforce what you have learned:
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 1: Follow the DRY principle</strong>
          <UnorderedList inside>
            <li>DRY = Don't Repeat Yourself</li>
            <li>
              Extract the authorization logic in a separate file in order to
              make it reusable. Require this file whenever you need to protect a
              file.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 2: Implement logout functionality</strong>
          <UnorderedList inside>
            <li>
              Implement a logout functionality for the Bookstore application.
            </li>
            <li>
              When the user clicks the logout button, destroy the session and
              redirect the user to the login page.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 3: Add a unique identifier to each book</strong>
          <UnorderedList inside>
            <li>
              Add an ID or ISBN field to each book in the{" "}
              <Badge variant="secondary">books.json</Badge> file in order to
              identify each book in a unique way.
            </li>
            <li>
              Don't forget to alter the{" "}
              <Badge variant="secondary">edit_book.php</Badge> page to use the
              ID field to find the book to edit. Also edit the link that sends
              the user to the edit page.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 4: Implement validation</strong>
          <UnorderedList inside>
            <li>
              Don't just blindly trust your users. Implement validation for the
              book data.
            </li>
            <li>
              For example, don't allow the user to leave any fields blank.
            </li>
            <li>
              Try to limit the length of the title and description fields.
            </li>
            <li>
              Make sure the user can't submit negative numbers for the price
              field.
            </li>
            <li>
              Make sure the user can't upload a file that is not an image.
            </li>
            <li>Make sure the user can't upload a file that is too large.</li>
          </UnorderedList>
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
