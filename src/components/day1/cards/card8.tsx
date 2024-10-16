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

export default function Card8() {
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
          PHP’s configuration is done via the <Badge variant="secondary">php.ini</Badge> file, found
          in the <Badge variant="secondary">php</Badge> folder of XAMPP.
        </Paragraph>
        <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="w-3 h-3 mr-2" /> Scroll this area to see some
          of the most common PHP configuration settings.
        </Paragraph>
        <ScrollArea className="h-52 mt-4">
          <Alert className="mt-4">
            <AlertTitle>memory_limit</AlertTitle>
            <AlertDescription>
              Limits how much memory a script can use.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>upload_max_filesize</AlertTitle>
            <AlertDescription>
              Controls the maximum file size for uploads.
            </AlertDescription>
          </Alert>
          <Alert className="mt-4">
            <AlertTitle>display_errors</AlertTitle>
            <AlertDescription>
              Whether errors should be shown to the user (important during
              development).
            </AlertDescription>
          </Alert>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
