import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UnorderedList from "@/components/unordered-list";

export default function Card1() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Cookies vs. Local Storage</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          To store and retrieve tokens or session identifiers, we use cookies or
          local storage:
        </Paragraph>
        <h1 className="text-lg font-bold">Cookies</h1>
        <UnorderedList inside={true}>
          <li>
            <strong>Scope:</strong> Accessible by both server and client.
          </li>
          <li>
            <strong>Storage limit:</strong> Typically limited to 4KB.
          </li>
          <li>
            <strong>Best for:</strong> Storing session IDs, as cookies can
            automatically be sent with each HTTP request to the server.
          </li>
        </UnorderedList>
        <h1 className="text-lg font-bold">Local Storage</h1>
        <UnorderedList inside={true}>
          <li>
            <strong>Scope:</strong> Accessible only on the client side.
          </li>
          <li>
            <strong>Storage limit:</strong> Typically up to 5MB.
          </li>
          <li>
            <strong>Best for:</strong> Storing tokens in client-heavy
            applications where the server doesn’t need direct access to the
            storage.
          </li>
        </UnorderedList>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
