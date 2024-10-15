import Code from "@/components/code";
import Paragraph from "@/components/paragraph";
import Title from "@/components/title";
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
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>
          <Title>
            Exercise 1: Understanding Web Servers, URLs, PHP, and Building a
            Basic Dynamic Webpage
          </Title>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          By the end of this session, students will understand the role of a web
          server, how URLs work, the request-response cycle, the difference
          between compiled and interpreted languages, and create a dynamic PHP
          webpage. They will also learn to configure Apache (
          <Code>httpd.conf</Code>) and PHP (<Code>php.ini</Code>
          ), and work with the concept of virtual hosts (vhosts).
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
