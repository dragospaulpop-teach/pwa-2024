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
import { Lightbulb } from "lucide-react";

export default function Card16() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 6: Testing and Expanding</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>Now let's try to do some hands-on exercises.</Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 1:</strong> Add More Categories
          <br />
          Modify the <Badge variant="secondary">$categories</Badge> array to add
          more categories. Test how the list grows.
        </Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 2:</strong> Add a “Featured Category” Section <br />
          Add a new variable called{" "}
          <Badge variant="secondary">$featuredCategory</Badge> and use it to
          display a "Category of the Day" on the homepage. Randomize the
          category selection.
        </Paragraph>
        <Alert>
          <Lightbulb className="w-4 h-4 mr-2" color="#d97706" />
          <AlertTitle>Hint</AlertTitle>
          <AlertDescription>
            You can use the{" "}
            <Badge variant="secondary" className="cursor-pointer underline">
              <a
                href="https://www.php.net/manual/en/function.array-rand.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                array_rand()
              </a>
            </Badge>{" "}
            function to pick a random element from an array.
          </AlertDescription>
        </Alert>
        <Paragraph>
          <strong>Task 3:</strong> Create a Footer with the Current Year At the
          bottom of your page, add a footer that dynamically displays the
          current year using the
          <Badge variant="secondary" className="cursor-pointer underline">
            <a
              href="https://www.php.net/manual/en/function.date.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              date()
            </a>
          </Badge>{" "}
          function.
        </Paragraph>
      </CardContent>
    </Card>
  );
}
