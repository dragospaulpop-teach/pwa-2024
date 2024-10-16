import Code from "@/components/code";
import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollIcon } from "lucide-react";

export default function Card18() {
  const code = `// Book data
$titles = [
  "The Great Gatsby",
  "1984",
  "To Kill a Mockingbird",
  "The Catcher in the Rye"
];

$descriptions = [
  "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
  "A dystopian novel set in a totalitarian society ruled by Big Brother.",
  "A novel about the serious issues of rape and racial inequality.",
  "The experiences of a young boy who leaves his boarding school to wander New York City."
];

// Random book cover images from placekitten.com
$covers = [
  "https://placekitten.com/200/300",
  "https://placekitten.com/210/300",
  "https://placekitten.com/220/300",
  "https://placekitten.com/230/300"
];

$prices = [
  10.99,
  8.99,
  12.50,
  9.75
];`;
  return (
    <Card className="w-full max-w-full">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 8: Create Arrays for Book Information</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Modify the PHP code to add arrays for book titles, descriptions, cover
          images, and prices.
        </Paragraph>
        <Paragraph>
          In your <Badge variant="outline">index.php</Badge> file, add the
          following arrays just after the{" "}
          <Badge variant="outline">$categories</Badge> array:
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll me
        </Paragraph>
        <ScrollArea className="h-[300px]">
          <Code code={code} language="php" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
