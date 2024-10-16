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
import { Lightbulb } from "lucide-react";

export default function Card23() {
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 13: Hands-On Exercises</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now that you have the basic structure in place, it’s time for some
          hands-on practice:
        </Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 1: Add More Books</strong>
          <UnorderedList inside>
            <li>
              Add at least two more books to the{" "}
              <Badge variant="secondary">$books array</Badge>, complete with
              titles, descriptions, covers, and prices.
            </li>
            <li>Test your changes by refreshing the page.</li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>
            <strong>Task 2: Add a “Discounted Price” Field</strong>
          </strong>
          <UnorderedList inside>
            <li>
              Modify the <Badge variant="secondary">$books array</Badge> to
              include a new field called
              <Badge variant="secondary">discount_price</Badge>.
            </li>
            <li>
              If a book has a discounted price, display the discounted price
              instead of the regular price. If there is no discount, display the
              regular price as usual.
            </li>
          </UnorderedList>
          <Alert className="mt-4">
            <Lightbulb className="w-4 h-4 mr-2" color="#d97706" />
            <AlertTitle>Hint</AlertTitle>
            <AlertDescription>
              Use an if statement inside the foreach loop to check if{" "}
              <Badge variant="secondary">discount_price</Badge> is set.
            </AlertDescription>
          </Alert>
        </Paragraph>

        <Paragraph className="border-l-4 p-4 bg-secondary border-primary">
          <strong>Task 3: Highlight Books with Discounts</strong>
          <UnorderedList inside>
            <li>
              Add a special CSS class to books that have a discount. For
              example, make the border of discounted books green to make them
              stand out.
            </li>
          </UnorderedList>
        </Paragraph>
      </CardContent>
    </Card>
  );
}
