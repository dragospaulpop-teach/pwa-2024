import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
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

export default function Card1() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Connecting PHP to MySQL Databases</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            PHP provides multiple ways to connect to MySQL databases, from older
            extensions to modern approaches. Let’s go through a quick history
            and focus on the mysqli extension and PDO as current best practices
            for connecting to MySQL databases.
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          <strong>Historical Connections:</strong> The{" "}
          <Badge variant="secondary">mysql</Badge> Extension (Deprecated)
        </Paragraph>
        <Paragraph>
          Originally, PHP connected to MySQL using the mysql extension. This
          method was simple, but it was limited in functionality and insecure by
          today’s standards. As of PHP 7, the mysql extension is deprecated and
          should no longer be used.
        </Paragraph>
        <Paragraph>
          <strong>Modern Connections:</strong> The{" "}
          <Badge variant="secondary">mysqli</Badge> and{" "}
          <Badge variant="secondary">PDO</Badge> extensions are the current best
          practices for connecting to MySQL databases.
        </Paragraph>
        <Paragraph>
          PHP now offers two primary ways to connect to MySQL databases:{" "}
          <Badge variant="secondary">mysqli</Badge> and{" "}
          <Badge variant="secondary">PDO</Badge>. Both support{" "}
          <Badge variant="secondary">prepared statements</Badge>, which prevent
          SQL injection attacks and allow for more secure handling of user data.
        </Paragraph>
        <Paragraph>
          <strong>
            1. The <Badge variant="secondary">mysqli</Badge> Extension
          </strong>
        </Paragraph>
        <Paragraph>
          The <Badge variant="secondary">mysqli</Badge> extension is designed
          specifically for MySQL and is highly recommended for applications
          where MySQL is the main database. It supports modern features like
          prepared statements and multiple connection methods.
        </Paragraph>
        <Paragraph>
          This extension offers both procedural and object-oriented interfaces,
          so you can chose whatever you like best.
        </Paragraph>
        <Paragraph>
          <strong>
            2. <Badge variant="secondary">PDO</Badge> (PHP Data Objects)
          </strong>
        </Paragraph>
        <Paragraph>
          <Badge variant="secondary">PDO</Badge> is a flexible extension that
          supports many database types beyond MySQL, making it ideal for
          applications that may need to connect to different databases in the
          future. PDO also supports prepared statements but only in an
          object-oriented manner.
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
