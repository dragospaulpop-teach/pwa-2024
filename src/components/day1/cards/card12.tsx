import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import { useTheme } from "@/components/theme-provider";
import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Card12() {
  const { lightOrDark } = useTheme();
  const code = `127.0.0.1 bookstore.local`;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 2: Update your hosts file</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          We need to map <Badge variant="secondary">bookstore.local</Badge> to
          localhost so your browser knows where to look.
        </Paragraph>
        <Paragraph>
          Open{" "}
          <Badge variant="secondary">
            C:/Windows/System32/drivers/etc/hosts
          </Badge>{" "}
          as an administrator.
        </Paragraph>
        <Paragraph>Add the following line:</Paragraph>
        <SyntaxHighlighter
          style={
            lightOrDark === "dark"
              ? atelierSulphurpoolDark
              : atelierSulphurpoolLight
          }
        >
          {code}
        </SyntaxHighlighter>
      </CardContent>
    </Card>
  );
}
