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
    <Card className="bg-background/75 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>That's it. It's done.</Title>
        </CardTitle>
        <CardDescription>Thanks for following along.</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="/glitter-confetti.gif" alt="congrats" width="100%" />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
