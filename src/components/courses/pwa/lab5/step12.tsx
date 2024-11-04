import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
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
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Hands-On Exercises</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Here's some homework</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 1: Update the database to the normalized schema</strong>
          <UnorderedList inside>
            <li>
              You need to create the missing tables and alter the existing books
              table to match the new schema. You should empty the books table
              before altering it.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph className="border-l-4 border-primary bg-secondary p-4">
          <strong>Task 2: Update the app files to use the new schema</strong>
          <img src="/good_luck.gif" alt="Good luck!" />
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
