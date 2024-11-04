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

export default function Card25() {
  const code = `<h2>Our Featured Books</h2>
<div class="book-list">
  <?php foreach ($books as $book): ?>
    <div class='book'>
      <h3><?= $book['title']; ?></h3>
      <img src="<?= $book['cover']; ?>" alt="<?= $book['title']; ?> Cover" />
      <p><strong>Description:</strong> <?= $book['description']; ?></p>
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
          <Title>Practice</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Step 15: Using alternative statements for Cleaner Code
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          When outputting HTML using <Badge variant="secondary">echo</Badge>,
          the code can get messy quickly. Luckily, PHP provides an alternative
          syntax for control structures, such as{" "}
          <Badge variant="secondary">foreach: endforeach</Badge>,{" "}
          <Badge variant="secondary">if: endif</Badge> etc. that keep the HTML
          and PHP neatly separated, improving readability.
        </Paragraph>

        <Alert className="mt-4">
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            Notice the semicolon <Badge variant="secondary">:</Badge> after the{" "}
            <Badge variant="secondary">foreach</Badge> and{" "}
            <Badge variant="secondary">if</Badge> keywords. This is necessary to
            separate the statements from the code block.
          </AlertDescription>
        </Alert>

        <Paragraph>
          Update your index.php file to use the new syntax. Replace the existing
          foreach loop with this cleaner approach:
        </Paragraph>

        {/* <Paragraph className="flex items-center text-xs">
          <ScrollIcon className="mr-2 h-3 w-3" /> Scroll me
        </Paragraph> */}
        {/* <ScrollArea className="h-[300px]"> */}
        <Code code={code} language="html" />
        {/* </ScrollArea> */}

        <Alert className="mt-4">
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            <Badge variant="secondary">&lt;?= $variable; ?&gt;</Badge> is
            shorthand for{" "}
            <Badge variant="secondary">&lt;?php echo $variable; ?&gt;</Badge>,
            making code even cleaner.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
