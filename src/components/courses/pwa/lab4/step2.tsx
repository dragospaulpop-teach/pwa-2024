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
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Sessions vs. Tokens for Authentication</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Sessions and tokens are two common methods for maintaining a user’s
          state across multiple HTTP requests
        </Paragraph>
        <h1 className="text-lg font-bold">Session-Based Authentication</h1>
        <UnorderedList inside={true}>
          <li>
            <strong>How it works:</strong> The server creates a unique session
            for each user upon login. This session ID is usually stored in a
            cookie on the user's browser.
          </li>
          <li>
            <strong>Storage:</strong> Session data is stored on the server, and
            only the session ID is sent to the client. This might be in a file,
            in a database, in memory, etc.
          </li>
          <li>
            <strong>Common in:</strong> Traditional web apps that don’t require
            a high level of scalability.
          </li>
        </UnorderedList>
        <h1 className="text-lg font-bold">Token-Based Authentication</h1>
        <UnorderedList inside={true}>
          <li>
            <strong>How it works:</strong> Upon login, the server generates a
            token, which the client stores (typically in local storage or
            session storage). This token is included in each subsequent request
            for authentication.
          </li>
          <li>
            <strong>Storage:</strong> All authentication information is
            contained within the token on the client side, rather than on the
            server.
          </li>
          <li>
            <strong>Common in:</strong> Single-page applications (SPAs) and
            APIs.
          </li>
        </UnorderedList>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
