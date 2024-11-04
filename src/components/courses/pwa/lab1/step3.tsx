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

export default function Card3() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Communication</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>3. The Request-Response Model</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          When you visit a website, your browser sends an HTTP{" "}
          <Badge variant="secondary">Request</Badge> to the web server, which
          processes the request and sends back an HTTP{" "}
          <Badge variant="secondary">Response</Badge>.
        </Paragraph>
        <Paragraph>A request is made up of the following parts:</Paragraph>
        {/* <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="mr-2 h-3 w-3" /> Scroll me
        </Paragraph> */}
        {/* <ScrollArea className="mt-4 h-32"> */}
        <Alert className="my-2">
          <AlertTitle>Method</AlertTitle>
          <AlertDescription>
            The HTTP method (e.g., GET, POST).
          </AlertDescription>
        </Alert>
        <Alert className="my-2">
          <AlertTitle>URL</AlertTitle>
          <AlertDescription>
            The URL of the resource being requested.
          </AlertDescription>
        </Alert>
        <Alert className="my-2">
          <AlertTitle>Headers</AlertTitle>
          <AlertDescription>
            Information about the request (e.g., content type, caching
            policies).
          </AlertDescription>
        </Alert>
        <Alert className="my-2">
          <AlertTitle>Body</AlertTitle>
          <AlertDescription>
            The data being sent to the server (e.g., form data, JSON body).
          </AlertDescription>
        </Alert>
        {/* </ScrollArea> */}
        <Paragraph>A response is made up of the following parts:</Paragraph>
        {/* <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="mr-2 h-3 w-3" /> Scroll me
        </Paragraph> */}
        {/* <ScrollArea className="mt-4 h-32"> */}
        <Alert className="my-2">
          <AlertTitle>Status Code</AlertTitle>
          <AlertDescription>
            The status code (e.g., 200 OK, 404 Not Found).
          </AlertDescription>
        </Alert>
        <Alert className="my-2">
          <AlertTitle>Headers</AlertTitle>
          <AlertDescription>
            Information about the response (e.g., content type, caching
            policies).
          </AlertDescription>
        </Alert>
        <Alert className="my-2">
          <AlertTitle>Body</AlertTitle>
          <AlertDescription>
            The actual data returned, such as the HTML for a web page.
          </AlertDescription>
        </Alert>
        {/* </ScrollArea> */}
      </CardContent>
    </Card>
  );
}
