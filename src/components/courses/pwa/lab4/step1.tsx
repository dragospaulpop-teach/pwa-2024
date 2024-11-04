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

export default function Card1() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>HTTP as a Stateless Protocol</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          HTTP is a stateless protocol, meaning each request sent to a server is
          independent. The server doesn't retain any information about previous
          requests, so it "forgets" each user after each interaction.
        </Paragraph>
        <Paragraph>
          To maintain a user’s logged-in state across multiple pages, we need a
          way to persist information across requests, which is where sessions
          and tokens come in.
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
