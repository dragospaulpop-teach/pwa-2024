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
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>
            Implementing Authentication and Guarding Page Access with PHP
            Sessions
          </Title>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          This lab will cover fundamental concepts in web authentication and
          authorization, giving you a practical grasp of session-based login,
          PHP sessions, and how to manage user access
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
