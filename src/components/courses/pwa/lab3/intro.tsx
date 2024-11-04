import Paragraph from "@/components/paragraph";
import Title from "@/components/title";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function Intro() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Filtering data and working with Forms</Title>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now we’re introducing forms and query strings to filter books by
          category, starting with modifying the book data structure, then
          creating category pages, and finally building a single PHP page that
          handles filtering. We’ll finish by adding a form on the homepage for
          category selection.
        </Paragraph>
        <Paragraph>Let’s break this down step-by-step.</Paragraph>

        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            Remember to check your web server{" "}
            <Badge variant="secondary">virtual host</Badge> configuration and{" "}
            <Badge variant="secondary">port</Badge>, and your operating system's{" "}
            <Badge variant="secondary">hosts</Badge> entries.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
