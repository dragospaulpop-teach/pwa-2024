import Code from "@/components/code";
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
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Card1() {
  const code = `[
    {
        "title": "The Great Gatsby",
        "description": "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
        "cover": "https://placekitten.com/200/300",
        "price": 10.99,
        "discount_price": 8.99,
        "category": "Fiction"
    },
    {
        "title": "1984",
        "description": "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        "cover": "https://placekitten.com/210/300",
        "price": 8.99,
        "category": "Science Fiction"
    },
    {
        "title": "To Kill a Mockingbird",
        "description": "A novel about the serious issues of rape and racial inequality.",
        "cover": "https://placekitten.com/220/300",
        "price": 12.50,
        "category": "Fiction"
    },
    {
        "title": "The Catcher in the Rye",
        "description": "The experiences of a young boy who leaves his boarding school to wander New York City.",
        "cover": "https://placekitten.com/230/300",
        "price": 9.75,
        "category": "Fiction"
    }
]`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Part 1: Adding Categories to the Books</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Step 1: Update the Books Data to Include Categories
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          The first step is to link each book with a category. We’ll add a
          <Badge variant="secondary">category</Badge> field to each book in our{" "}
          <Badge variant="secondary">books.json</Badge> file.
        </Paragraph>
        <Paragraph>
          Open your <Badge variant="secondary">books.json</Badge> file and add a{" "}
          <Badge variant="secondary">category</Badge> field to each book. Here’s
          the updated structure:
        </Paragraph>
        <ScrollArea className="h-[200px]">
          <Code code={code} language="json" />
        </ScrollArea>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
