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

export default function Card13() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 3: Create the application root folder</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Remember how you set the DocumentRoot to{" "}
          <Badge variant="secondary">C:/xampp/htdocs/bookstore</Badge> in your
          virtual host configuration in Step 1?
        </Paragraph>
        <Paragraph>
          Now you need to create that folder and add your project files to it.
        </Paragraph>
        <Paragraph>
          Otherwise, Apache will server you a{" "}
          <Badge variant="secondary">404 Not Found</Badge> error when you try to
          access your project.
        </Paragraph>
      </CardContent>
    </Card>
  );
}
