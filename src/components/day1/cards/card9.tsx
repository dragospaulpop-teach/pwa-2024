import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Card9() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>1.5 PHP: Interpreted vs. Compiled Languages</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          PHP is an interpreted language, which means that code is executed line-by-line on the server. There’s no need to compile PHP code before running it. Other interpreted languages include Ruby, Python, and JavaScript.
        </Paragraph>

        <Paragraph>
          Compiled languages, like C, C++, Rust, Zig, Go etc., are converted into machine code by a compiler before execution. This makes them generally faster but requires a compilation step.
        </Paragraph>

          <Alert className="mt-4">
            <AlertTitle>C# and Java</AlertTitle>
            <AlertDescription>
              These languages are compiled into bytecode that is then executed by a runtime environment (Java Virtual Machine for Java, Common Language Runtime for C#).
              They are at the crossroads of interpreted and compiled languages.
            </AlertDescription>
          </Alert>

      </CardContent>
    </Card>
  );
}
