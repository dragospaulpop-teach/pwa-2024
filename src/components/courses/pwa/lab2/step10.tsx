import Code from "@/components/code";
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

export default function Card20() {
  const code = `<style>
  .book-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .book {
    border: 1px solid #ddd;
    padding: 10px;
    width: 200px;
  }
  .book img {
    width: 100%;
    height: auto;
  }
</style>`;
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 10: Styling the Book List (Optional)</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          For clarity in the browser, let’s add some simple inline CSS to format
          the book list.
        </Paragraph>

        {/* <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="mr-2 h-3 w-3" /> Scroll me
        </Paragraph> */}
        {/* <ScrollArea className="h-[300px]"> */}
        <Code code={code} language="css" />
        {/* </ScrollArea> */}
        <Alert className="mt-4">
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            Add the <Badge variant="secondary">style</Badge> tag to the{" "}
            <Badge variant="secondary">head</Badge> tag in your PHP file.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
