import Paragraph from "@/components/paragraph";
import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Intro() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>
            Understanding Web Servers, URLs, PHP, and Building a Basic Dynamic
            Webpage
          </Title>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          By the end of this session, you'll understand the role of a web
          server, how URLs work, the request-response cycle, the difference
          between compiled and interpreted languages, and create a dynamic PHP
          webpage. You'll also learn to configure Apache (
          <Badge variant="secondary">httpd.conf</Badge>) and PHP (
          <Badge variant="secondary">php.ini</Badge>
          ), and work with the concept of virtual hosts (vhosts).
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
