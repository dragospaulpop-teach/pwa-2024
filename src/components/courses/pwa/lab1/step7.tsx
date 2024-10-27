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

export default function Card7() {
  return (
    <Card className="bg-background/75 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Apache</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>4.1 Apache Configuration</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Apache’s configuration is handled via the{" "}
          <Badge variant="secondary">httpd.conf</Badge> file. You can find it in
          the XAMPP directory under{" "}
          <Badge variant="secondary">apache\conf</Badge>.
        </Paragraph>
        {/* <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="mr-2 h-3 w-3" /> Scroll me
        </Paragraph> */}
        {/* <ScrollArea className="mt-4 h-52"> */}
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
        {/* </ScrollArea> */}
      </CardContent>
    </Card>
  );
}
