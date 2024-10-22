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
          <Title>Part 4: Hands-On Exercises</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Here are some tasks to reinforce what the students have learned:
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 1: Add More Categories</strong>
          <UnorderedList inside>
            <li>
              Add at least two more categories to{" "}
              <Badge variant="secondary">books.json</Badge> and update the
              dropdown in <Badge variant="secondary">index.php</Badge> to
              include those categories.
            </li>
            <li>
              Test your filtering system to ensure it works with the new
              categories.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 2: Improve Form Usability</strong>
          <UnorderedList inside>
            <li>
              Add a default option to the dropdown (e.g., "Select a category")
              that displays no books if selected.
            </li>
            <li>Ensure that the form only submits valid categories.</li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 3: Add a “Show All” Option</strong>
          <UnorderedList inside>
            <li>
              Modify <Badge variant="secondary">category.php</Badge> to include
              a "Show All" option in the dropdown form on the index page, which
              shows all books if no specific category is selected.
            </li>
            <li>Ensure that the form only submits valid categories.</li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 4: Style the Form</strong>
          <UnorderedList inside>
            <li>
              Add some CSS to style the form and dropdown menu, making it more
              visually appealing.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 5: Work with the query string</strong>
          <UnorderedList inside>
            <li>
              Try to add another option to the query string to filter books by
              title. Do this by adding an{" "}
              <Badge variant="secondary">
                &lt;input type="text" name="title"&gt;
              </Badge>{" "}
              field to your form.
            </li>
          </UnorderedList>
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
