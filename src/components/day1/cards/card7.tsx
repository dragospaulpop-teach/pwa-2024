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

export default function Card7() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1.4 Apache and PHP Configuration</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Apache’s configuration is handled via the{" "}
          <Badge variant="secondary">httpd.conf</Badge> file. You can find it in
          the XAMPP directory under{" "}
          <Badge variant="secondary">apache\conf</Badge>.
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll this area to see some
          of the most common Apache configuration settings.
        </Paragraph>
        <ScrollArea className="h-52 mt-4">
          <Alert className="mt-4">
            <AlertTitle>DocumentRoot</AlertTitle>
            <AlertDescription>
              This specifies the folder where your website files are stored.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Listen</AlertTitle>
            <AlertDescription>
              This specifies the port Apache listens on. By default, this is 80.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>Virtual Hosts</AlertTitle>
            <AlertDescription>
              This allows you to host multiple websites on the same server by
              configuring separate domains or subdomains. Located in{" "}
              <Badge variant="secondary">extra\httpd-vhosts.conf</Badge>.
            </AlertDescription>
          </Alert>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
