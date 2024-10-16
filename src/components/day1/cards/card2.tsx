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
  BriefcaseBusiness,
  GlobeIcon,
  Hash,
  MilestoneIcon,
  RouteIcon,
  ScrollIcon,
  SearchIcon,
} from "lucide-react";

export default function Card2() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1.2 The Anatomy of a URL</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          A <Badge variant="secondary">URL</Badge> (Uniform Resource Locator) is
          used to identify and locate a resource on the internet. It follows
          this basic structure:
        </Paragraph>
        <Paragraph className="text-center">
          <Badge variant="outline" className="font-mono text-xs p-4">
            https://www.example.com:8080/books/list.php?category=fiction&sort=asc#top
          </Badge>
        </Paragraph>
        <Paragraph className="text-center">
          <Badge variant="outline" className="font-mono text-xs p-4">
            protocol://domain:port/path?query#fragment
          </Badge>
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll this area to see all
          the parts of a URL.
        </Paragraph>
        <ScrollArea className="h-52 mt-4">
          <Alert className="my-2">
            <BriefcaseBusiness className="h-4 w-4" />
            <AlertTitle>Protocol</AlertTitle>
            <AlertDescription>
              Specifies the communication protocol. Most common are HTTP
              (HyperText Transfer Protocol) and HTTPS (secured version of HTTP).
            </AlertDescription>
          </Alert>
          <Alert className="my-2">
            <GlobeIcon className="h-4 w-4" />
            <AlertTitle>Domain</AlertTitle>
            <AlertDescription>
              The address of the server hosting the resource. This resolves to
              an IP address behind the scenes.
            </AlertDescription>
          </Alert>
          <Alert className="my-2">
            <MilestoneIcon className="h-4 w-4" />
            <AlertTitle>Port</AlertTitle>
            <AlertDescription>
              The port number tells the server which service you want to
              interact with. The default for HTTP is 80, and for HTTPS it’s 443.
              If a non-standard port is used (like 8080), it must be specified
              in the URL.
            </AlertDescription>
          </Alert>
          <Alert className="my-2">
            <RouteIcon className="h-4 w-4" />
            <AlertTitle>Path</AlertTitle>
            <AlertDescription>
              Specifies the location of the resource on the server.
            </AlertDescription>
          </Alert>
          <Alert className="my-2">
            <SearchIcon className="h-4 w-4" />
            <AlertTitle>Query</AlertTitle>
            <AlertDescription>
              Contains additional information for the server to process the
              request.
            </AlertDescription>
          </Alert>
          <Alert className="my-2">
            <Hash className="h-4 w-4" />
            <AlertTitle>Fragment</AlertTitle>
            <AlertDescription>
              A fragment is the part of a URL that comes after a # and is used
              to identify a specific section of a web page.
            </AlertDescription>
          </Alert>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
