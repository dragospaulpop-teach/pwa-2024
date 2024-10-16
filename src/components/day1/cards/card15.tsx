import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import { useTheme } from "@/components/theme-provider";
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
import { Lightbulb } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atelierSulphurpoolDark,
  atelierSulphurpoolLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Card15() {
  const { lightOrDark } = useTheme();
  const code = `<?php
    // Set variables for dynamic content
    $storeName = "John's Book Emporium";
    $categories = [
      "Fiction",
      "Non-Fiction",
      "Children's Books",
      "Science Fiction",
    ];
    $currentTime = date("H");

    // Determine greeting based on time of day
    if ($currentTime < 12) {
        $greeting = "Good morning";
    } elseif ($currentTime < 18) {
        $greeting = "Good afternoon";
    } else {
        $greeting = "Good evening";
    }
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Welcome to <?php echo $storeName; ?></title>
      </head>
    <body>
        <h1>
          <?php
            echo $greeting . ", welcome to " . $storeName;
          ?>!
        </h1>
        <p>Here are some of our book categories:</p>
        <ul>
            <?php
            // Loop through categories array
            // and display each one
            foreach ($categories as $category) {
                echo "<li>" . $category . "</li>";
            }
            ?>
        </ul>
    </body>
    </html>`;
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 5: Creating a Dynamic PHP Homepage</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now that everything is set up, let’s create a more complex homepage.
          In this step, you’ll combine HTML and PHP to dynamically generate
          content.
        </Paragraph>
        <Paragraph>
          Create <Badge variant="secondary">index.php</Badge> in your{" "}
          <Badge variant="secondary">C:/xampp/htdocs/bookstore</Badge> folder.
        </Paragraph>
        <Alert>
          <Lightbulb className="w-4 h-4 mr-2" />
          <AlertTitle>Hint</AlertTitle>
          <AlertDescription>
            Use{" "}
            <Badge variant="secondary" className="cursor-pointer underline">
              <a href="https://vscode.dev">vscode.dev</a>
            </Badge>{" "}
            to manage your webiste's files. Click on the{" "}
            <Badge variant="secondary">Open folder</Badge> icon and give the app
            access to your <Badge variant="secondary">htdocs/bookstore</Badge>{" "}
            folder.
          </AlertDescription>
        </Alert>
        <Paragraph>Write the following code:</Paragraph>
        <ScrollArea className="h-[300px]">
          <SyntaxHighlighter
            wrapLines={true}
            showLineNumbers={true}
            style={
              lightOrDark === "dark"
                ? atelierSulphurpoolDark
                : atelierSulphurpoolLight
            }
          >
            {code}
          </SyntaxHighlighter>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
