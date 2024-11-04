import Code from "@/components/code";
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
  const code = `<h2>Our Featured Books</h2>
<div class="book-list">
    <?php foreach ($books as $book): ?>
        <div class='book'>
            <h3><?= $book['title']; ?></h3>
            <img src="<?= $book['cover']; ?>" alt="<?= $book['title']; ?> Cover" />
            <p><strong>Description:</strong> <?= $book['description']; ?></p>
            <p><strong>Category:</strong> <?= $book['category']; ?></p>
            <?php if (isset($book['discount_price'])): ?>
                <p><strong>Price:</strong> <span style='text-decoration: line-through;'>$<?= number_format($book['price'], 2); ?></span>
                <strong>Discounted Price:</strong> $<?= number_format($book['discount_price'], 2); ?></p>
            <?php else: ?>
                <p><strong>Price:</strong> $<?= number_format($book['price'], 2); ?></p>
            <?php endif; ?>
        </div>
    <?php endforeach; ?>
</div>`;

  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Part 1: Adding Categories to the Books</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Step 2: Display the Category for Each Book</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Now that each book has a category, we’ll modify the{" "}
          <Badge variant="secondary">index.php</Badge> file to display this
          information.
        </Paragraph>
        <Paragraph>
          Update your <Badge variant="secondary">index.php</Badge> where you
          display the books. Add a line to show the category for each book:
        </Paragraph>
        {/* <ScrollArea className="h-[200px]"> */}
        <Code code={code} language="html" />
        {/* </ScrollArea> */}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
