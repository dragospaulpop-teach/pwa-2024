import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CodeIcon, ServerIcon } from "lucide-react";

export default function Card1() {
  return (
    <Card className="bg-background/75 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Servers</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1. What is a Web Server?</Subtitle>
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
        <Alert className="my-2">
          <ServerIcon className="h-4 w-4" />
          <AlertTitle>Apache</AlertTitle>
          <AlertDescription>
            An open-source web server that handles HTTP requests and serves web
            pages to browsers.
          </AlertDescription>
        </Alert>
        <Alert className="my-2">
          <CodeIcon className="h-4 w-4" />
          <AlertTitle>PHP</AlertTitle>
          <AlertDescription>
            A scripting language that is executed on the server side to generate
            dynamic content (e.g., user-specific pages).
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
