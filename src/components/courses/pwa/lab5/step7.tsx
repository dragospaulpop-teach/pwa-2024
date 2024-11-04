import Code from "@/components/code";
import OrderedList from "@/components/ordered-list";
import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircleIcon } from "lucide-react";

export default function Card1() {
  const code = `
-- Create the bookstore database
CREATE DATABASE bookstore;

-- Switch to the bookstore database
USE bookstore;

-- Create the books table
CREATE TABLE books (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    cover VARCHAR(255),
    price DECIMAL(5, 2),
    discount_price DECIMAL(5, 2),
    category VARCHAR(50)  -- Non-atomic value if multiple categories are stored here
);

-- Insert each book individually into the unnormalized Books table

INSERT INTO books (title, description, cover, price, discount_price, category)
VALUES ("The Great Gatsby", "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.", "https://picsum.photos/200/300", 10.99, 8.99, "Fiction");

INSERT INTO books (title, description, cover, price, discount_price, category)
VALUES ("1984", "A dystopian novel set in a totalitarian society ruled by Big Brother.", "https://picsum.photos/210/300", 8.99, NULL, "Science Fiction");

INSERT INTO books (title, description, cover, price, discount_price, category)
VALUES ("To Kill a Mockingbird", "A novel about the serious issues of rape and racial inequality.", "https://picsum.photos/220/300", 12.50, NULL, "Fiction");

INSERT INTO books (title, description, cover, price, discount_price, category)
VALUES ("The Catcher in the Rye", "The experiences of a young boy who leaves his boarding school to wander New York City.", "https://picsum.photos/230/300", 9.75, NULL, "Fiction");
`;

  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Creating a Database</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>Creating our bookstore database and tables</Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          We will create a database called{" "}
          <Badge variant="secondary">bookstore</Badge> and a table called{" "}
          <Badge variant="secondary">books</Badge> and we'll move the data from
          our <Badge variant="secondary">books.json</Badge> file into the
          <Badge variant="secondary">books</Badge> table.
        </Paragraph>
        <Paragraph>
          There are 2 approached to creating the database and table and
          inserting our data:
          <OrderedList inside={false}>
            <li>
              Manually using either{" "}
              <Badge variant="secondary">phpMyAdmin</Badge>,{" "}
              <Badge variant="secondary">MySQL Workbench</Badge>, or the{" "}
              <Badge variant="secondary">CLI</Badge>
            </li>
            <li>
              Automatically using a PHP script that will create the database,
              table, and insert the data.
            </li>
          </OrderedList>
        </Paragraph>
        <Paragraph>
          Bellow is the reference SQL code for creating the database and table
          and inserting the data.
        </Paragraph>
        <div className="space-y-4">
          <Code code={code} language="sql" />
          <Alert>
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              You can access the <Badge variant="secondary">phpMyAdmin</Badge>{" "}
              interface by clicking on the{" "}
              <Badge variant="secondary">admin</Badge> button for the{" "}
              <Badge variant="secondary">mysql</Badge> service in the{" "}
              <Badge variant="secondary">XAMPP Control Panel</Badge> or by
              navigating to{" "}
              <Badge variant="secondary">localhost/phpmyadmin</Badge> in your
              web browser.
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              The default port for the MySQL server is{" "}
              <Badge variant="secondary">3306</Badge>.
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              On a default XAMPP installation the{" "}
              <Badge variant="secondary">root</Badge> user does not require a
              password.
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Managing access, permissions, and security is out of the scope of
              this course, but, generally speaking, you should not use the root
              user for anything other than administrative tasks. You should
              always create a new user with limited access for every
              application/database you create. You should also limit access to
              your MySQL server so that only your app servers can access it.
              Tipically, if your app and database both run on the same server
              instance, the database server should only allow connections from
              <Badge variant="secondary">localhost</Badge> (otherwise limit
              connections to the IP of the app server).
            </AlertDescription>
          </Alert>
          <Alert>
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Database management is a whole field onto itself. We will only
              cover the basics here. Feel free to explore the topic on your own.
              Maybe start with the{" "}
              <Badge variant="secondary">MySQL documentation</Badge> here{" "}
              <a href="https://dev.mysql.com/doc/" target="_blank">
                https://dev.mysql.com/doc/
              </a>
              .
            </AlertDescription>
          </Alert>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
