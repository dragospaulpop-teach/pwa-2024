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
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>
          <Title>Part 1: Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1.1 What is a Web Server?</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          A web server is software that serves web content (HTML, CSS,
          JavaScript, etc.) to users' browsers. It listens for HTTP requests
          from clients (usually browsers) and responds with the requested
          resources, such as web pages or files.
        </Paragraph>
        <Paragraph>
          In our case, Apache (part of XAMPP) is the web server that processes
          requests and returns PHP-generated web pages.
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
