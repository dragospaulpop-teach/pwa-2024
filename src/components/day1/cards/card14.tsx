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

export default function Card14() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 4: Edit PHP settings</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Let’s tweak some PHP settings to suit our development needs.
        </Paragraph>
        <Paragraph>
          Open the <Badge variant="secondary">php.ini</Badge> file in the XAMPP
          directory under <Badge variant="secondary">php</Badge>.
        </Paragraph>
        <Paragraph>
          Turn on error reporting: Find{" "}
          <Badge variant="secondary">display_errors</Badge> and set it to{" "}
          <Badge variant="secondary">On</Badge>.
        </Paragraph>
        <Paragraph>
          Increase memory limit: Find{" "}
          <Badge variant="secondary">memory_limit</Badge> and increase it to{" "}
          <Badge variant="secondary">256M</Badge>.
        </Paragraph>
        <Paragraph>Restart Apache from the XAMPP Control Panel.</Paragraph>
      </CardContent>
    </Card>
  );
}
