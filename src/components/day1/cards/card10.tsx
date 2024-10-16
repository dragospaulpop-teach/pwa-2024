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

export default function Card10() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>
            Part 2: Practical – Configuring Apache, PHP, and Creating a Dynamic
            PHP Page
          </Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Now, let’s put theory into practice!</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          We'll build a bookstore web application. We'll star simple and add
          features as we progress.
        </Paragraph>
        <Paragraph>
          First we'll change some Apache and PHP settings and set up or server
          for development.
        </Paragraph>
        <Paragraph>
          Then we'll create a simple PHP page that displays a message based on
          the current time of day.
        </Paragraph>
        <Paragraph>
          Next we'll play with arrays and add some book data to our page.
        </Paragraph>
        <Paragraph>
          Finally we'll learn to import the book data from an external JSON
          file.
        </Paragraph>
      </CardContent>
    </Card>
  );
}
