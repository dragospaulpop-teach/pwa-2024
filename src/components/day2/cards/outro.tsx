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
    <Card>
      <CardHeader>
        <CardTitle>
          <Title>That's it. It's done.</Title>
        </CardTitle>
        <CardDescription>Thanks for following along.</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="/are_ya_winning.jpg" alt="congrats" width="100%" />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
