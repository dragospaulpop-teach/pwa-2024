import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UnorderedList from "@/components/unordered-list";

export default function Card17() {
  return (
    <Card className="bg-background/75 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 7: Expanding the Bookstore with More Arrays</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          We’re going to display a list of books with the following details:
        </Paragraph>
        <UnorderedList inside>
          <li>
            <strong>Title:</strong> The book's name.
          </li>
          <li>
            <strong>Description:</strong> A brief description of the book.
          </li>
          <li>
            <strong>Cover Image:</strong> A random image for the book cover
            (we’ll use an online image service like picsum.photos.com).
          </li>
          <li>
            <strong>Price:</strong> The cost of the book.
          </li>
        </UnorderedList>
        <Paragraph>
          By the end of this part, you'll learn to create individual arrays for
          each book property, and then combine them into one multidimensional
          associative array. This will make the data easier to manage and extend
          later on.
        </Paragraph>
      </CardContent>
    </Card>
  );
}
