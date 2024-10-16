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
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollIcon } from "lucide-react";

export default function Card5() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1.3.2 Request - HTTP Headers</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Request <Badge variant="secondary">Headers</Badge> are key-value pairs
          sent by the client (such as a web browser or an API client) to the
          server along with an HTTP request. They provide additional information
          about the request, such as the type of data being sent, the format
          expected in the response, the client's software and capabilities, and
          authentication details. Here are some examples:
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll this area to see some
          of the most common HTTP headers.
        </Paragraph>
        <ScrollArea className="h-52 mt-4">
          <Alert className="mt-4">
            <AlertTitle>Host</AlertTitle>
            <AlertDescription>
              Specifies the domain name of the server (e.g., Host: example.com).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>User-Agent</AlertTitle>
            <AlertDescription>
              Identifies the client software making the request (e.g., browser
              type or version).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Authorization</AlertTitle>
            <AlertDescription>
              Contains credentials for authentication, often a token or basic
              authentication (e.g., Authorization: Bearer &lt;token&gt;).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Referer</AlertTitle>
            <AlertDescription>
              Indicates the URL of the page that led to the current request.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Content-Type</AlertTitle>
            <AlertDescription>
              Indicates the media type of the request body (e.g., Content-Type:
              application/json).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Accept</AlertTitle>
            <AlertDescription>
              Specifies the media types the client is willing to receive (e.g.,
              Accept: text/html).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Cookie</AlertTitle>
            <AlertDescription>
              Sends stored cookies from the client to the server (e.g., Cookie:
              sessionId=abc123).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Accept-Encoding</AlertTitle>
            <AlertDescription>
              Specifies the compression algorithms the client supports (e.g.,
              gzip, deflate).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Accept-Language</AlertTitle>
            <AlertDescription>
              Indicates the preferred languages of the client (e.g.,
              Accept-Language: en-US).
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Cache-Control</AlertTitle>
            <AlertDescription>
              Provides directives for caching mechanisms (e.g., no-cache,
              max-age=3600).
            </AlertDescription>
          </Alert>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}