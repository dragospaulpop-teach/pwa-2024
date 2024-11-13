import Code from "@/components/code";
import Paragraph from "@/components/paragraph";
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

export default function Intro() {
  const code = `// Check if a new cover image is uploaded
    if (!empty($_FILES['cover']['tmp_name'])) {
        $coversFolder = 'covers/';
        $coverPath = $coversFolder . basename($_FILES['cover']['name']);

        // Ensure the covers folder exists
        if (!file_exists($coversFolder)) {
            mkdir($coversFolder, 0777, true);
        }

        $uploaded = move_uploaded_file($_FILES['cover']['tmp_name'], $coverPath);
        if (!$uploaded) {
            echo "Failed to upload cover image.";
            exit;
        }
        $bookToEdit['cover'] = $coverPath;
    }`;
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>File upload silently fails when we update a book cover</Title>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          You might have noticed that the file upload fails silently when we
          update a book cover. This is because we're not checking to see if the{" "}
          <Badge variant="secondary">move_uploaded_file</Badge> function returns
          true or false. We need to add a check to see if the file was uploaded
          successfully. If we check the warning we see that the problem is the{" "}
          <Badge variant="secondary">covers</Badge> folder does not exist. We
          need to address this issue by checking if the folders exists and
          creating it if it does not.
        </Paragraph>
        <Code code={code} language="php" />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
