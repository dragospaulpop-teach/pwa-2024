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
import {
  CircleDotIcon,
  CirclePlusIcon,
  PencilIcon,
  ScrollIcon,
  SearchIcon,
  TrashIcon,
} from "lucide-react";

export default function Card4() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1.3.1 Request - HTTP Verbs</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          An <Badge variant="secondary">HTTP Verb</Badge> is a method that tells
          the server what the client wants to do. These are the most common
          ones:
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll me
        </Paragraph>
        <ScrollArea className="h-52 mt-4">
          <Alert className="mt-4">
            <SearchIcon className="w-4 h-4 mr-2" />
            <AlertTitle>GET</AlertTitle>
            <AlertDescription>
              Retrieves data (e.g., a web page). It should not modify any data
              on the server. Uses the request's query parameters to get the
              data.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <CirclePlusIcon className="w-4 h-4 mr-2" />
            <AlertTitle>POST</AlertTitle>
            <AlertDescription>
              Sends data to the server (e.g., submitting a form) and often
              causes a change (e.g., adding a new record). Uses the request's
              body to send the data.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <PencilIcon className="w-4 h-4 mr-2" />
            <AlertTitle>PUT</AlertTitle>
            <AlertDescription>
              Updates data on the server. Uses the request's body to send the
              data. It replaces the entire resource with the new data that is
              attached to the requests body.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <PencilIcon className="w-4 h-4 mr-2" />
            <AlertTitle>PATCH</AlertTitle>
            <AlertDescription>
              Updates data on the server. Uses the request's body to send the
              data. It only updates the data that is attached to the request's
              body.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <TrashIcon className="w-4 h-4 mr-2" />
            <AlertTitle>DELETE</AlertTitle>
            <AlertDescription>Deletes data on the server.</AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <CircleDotIcon className="w-4 h-4 mr-2" />
            <AlertTitle>OPTIONS</AlertTitle>
            <AlertDescription>
              Retrieves the supported HTTP methods for a resource. You'll see
              this type of request when you try to access a resource on another
              origin.
            </AlertDescription>
          </Alert>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
