import Code from "@/components/code";
import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";

import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Card11() {
  const code = `
  <VirtualHost *:80>
      ServerAdmin webmaster@bookstore.local
      DocumentRoot "C:/xampp/htdocs/bookstore"
      ServerName bookstore.local
      ErrorLog "logs/bookstore-error.log"
      CustomLog "logs/bookstore-access.log" common
  </VirtualHost>
  `;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 1: Configuring Apache (Virtual Hosts)</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          By default, Apache serves content from{" "}
          <Badge variant="secondary">C:/xampp/htdocs</Badge>. However, we want
          to set up a virtual host so we can access our project as if it were a
          real website.
        </Paragraph>
        <Paragraph>
          Open the <Badge variant="secondary">httpd-vhosts.conf</Badge> file in
          the XAMPP directory under{" "}
          <Badge variant="secondary">apache\conf\extra</Badge>.
        </Paragraph>
        <Paragraph>
          Below any existing content, add this configuration for your project:
        </Paragraph>
        <Code code={code} language="apache" />
        <Paragraph>
          This block tells Apache that requests for{" "}
          <Badge variant="secondary">bookstore.local</Badge> should be served
          from the <Badge variant="secondary">bookstore</Badge> folder.
        </Paragraph>

        <Paragraph>Restart Apache from the XAMPP Control Panel.</Paragraph>
      </CardContent>
    </Card>
  );
}
