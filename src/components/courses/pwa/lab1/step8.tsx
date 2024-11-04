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

export default function Card8() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>PHP</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>4.2 PHP Configuration</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          PHP’s configuration is done via the{" "}
          <Badge variant="secondary">php.ini</Badge> file, found in the{" "}
          <Badge variant="secondary">php</Badge> folder of XAMPP.
        </Paragraph>
        {/* <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="mr-2 h-3 w-3" /> Scroll me
        </Paragraph> */}
        {/* <ScrollArea className="mt-4 h-52"> */}
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
        {/* </ScrollArea> */}
      </CardContent>
    </Card>
  );
}
