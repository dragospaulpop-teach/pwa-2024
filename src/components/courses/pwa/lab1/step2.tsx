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
import {
  BriefcaseBusiness,
  GlobeIcon,
  Hash,
  MilestoneIcon,
  RouteIcon,
  SearchIcon,
} from "lucide-react";

export default function Card2() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>URLs</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>2. The Anatomy of a URL</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          A <Badge variant="secondary">URL</Badge> (Uniform Resource Locator) is
          used to identify and locate a resource on the internet. It follows
          this basic structure:
        </Paragraph>
        <Paragraph className="text-center">
          <Badge
            variant="outline"
            className="bg-primary p-4 font-mono text-xl text-primary-foreground">
            https://www.example.com:8080/books/list.php?category=fiction&sort=asc#top
          </Badge>
        </Paragraph>
        <Paragraph className="text-center">
          <Badge
            variant="outline"
            className="bg-muted p-4 font-mono text-xl text-muted-foreground">
            protocol://domain:port/path?query#fragment
          </Badge>
        </Paragraph>
        {/* <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="mr-2 h-3 w-3" /> Scroll me
        </Paragraph> */}
        {/* <ScrollArea className="mt-4 h-52"> */}
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
            The address of the server hosting the resource. This resolves to an
            IP address behind the scenes.
          </AlertDescription>
        </Alert>
        <Alert className="my-2">
          <MilestoneIcon className="h-4 w-4" />
          <AlertTitle>Port</AlertTitle>
          <AlertDescription>
            The port number tells the server which service you want to interact
            with. The default for HTTP is 80, and for HTTPS it’s 443. If a
            non-standard port is used (like 8080), it must be specified in the
            URL.
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
            A fragment is the part of a URL that comes after a # and is used to
            identify a specific section of a web page.
          </AlertDescription>
        </Alert>
        {/* </ScrollArea> */}
      </CardContent>
    </Card>
  );
}
