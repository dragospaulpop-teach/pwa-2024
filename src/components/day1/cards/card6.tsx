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

export default function Card6() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1.3.3 Response - Status codes</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          A <Badge variant="secondary">status code</Badge> is a three-digit
          number returned by the server to the client to indicate the result of
          the request.
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll this area to see some
          of the most common HTTP status codes.
        </Paragraph>
        <ScrollArea className="h-52 mt-4">
          <Alert className="mt-4">
            <AlertTitle>1xx - Informational</AlertTitle>
            <AlertDescription>
              The request was received and understood by the server.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>2xx - Success</AlertTitle>
            <AlertDescription>
              The request was received, understood, and accepted by the server.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>3xx - Redirection</AlertTitle>
            <AlertDescription>
              The request was received, but the resource has been moved to a
              different URL.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>4xx - Client Error</AlertTitle>
            <AlertDescription>
              The request was received, but the server did not fulfill it
              because the client made a mistake.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>5xx - Server Error</AlertTitle>
            <AlertDescription>
              The request was received, but the server did not fulfill it
              because there was an error on the server.
            </AlertDescription>
          </Alert>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
