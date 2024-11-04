import OrderedList from "@/components/ordered-list";
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
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>PHP Sessions</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          A PHP session allows you to persist user information across multiple
          pages by creating a unique session ID and associating it with specific
          data on the server.
        </Paragraph>
        <h1 className="text-lg font-bold">Cookies</h1>
        <OrderedList inside={true}>
          <li>
            <strong>Starting a Session:</strong> Use{" "}
            <Badge variant="secondary">session_start()</Badge> at the top of
            each page where session data is needed.
          </li>
          <li>
            <strong>Setting Data:</strong> Use{" "}
            <Badge variant="secondary">$_SESSION</Badge> to store data, such as
            $_SESSION['username'] = "admin";.
          </li>
          <li>
            <strong>Retrieving Data:</strong> Access session data using{" "}
            <Badge variant="secondary">$_SESSION['username']</Badge>.
          </li>
        </OrderedList>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
