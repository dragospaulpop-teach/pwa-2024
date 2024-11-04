import Paragraph from "@/components/paragraph";
import Title from "@/components/title";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UnorderedList from "@/components/unordered-list";

export default function Intro() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Transitioning from JSON to MySQL for data persistence</Title>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          Until now, we’ve stored our bookstore’s data in a JSON file. While
          this approach works for small projects, it has limitations in
          scalability, speed, and reliability as data grows. This lab will
          introduce you to a more robust solution: MySQL, a relational database
          that’s widely used and a perfect fit for PHP applications.
        </Paragraph>
        <Paragraph>
          In this lab, you’ll move beyond JSON files and transition to MySQL as
          a data storage solution. You’ll learn:
        </Paragraph>
        <UnorderedList inside={true}>
          <li>
            The basics of SQL: We’ll cover how to create, read, update, and
            delete data (known as CRUD operations) using SQL.
          </li>
          <li>
            Setting up and connecting to a MySQL database: You’ll set up a
            database for the bookstore, interact with it using PHP’s mysqli
            extension, and create a structured table for books.
          </li>
          <li>
            Best practices for secure database interactions: Learn about
            prepared statements to prevent SQL injection attacks and ensure data
            security.
          </li>
          <li>
            Keeping code DRY: You’ll create a reusable database connection file
            to make your code cleaner and more efficient.
          </li>
          <li>
            Data organization: Discover database normalization and understand
            how structuring your data properly can improve efficiency and data
            integrity.
          </li>
        </UnorderedList>
        <Paragraph>
          We’ll also introduce some advanced topics to help you see the bigger
          picture, including NoSQL databases and Object-Relational Mappers
          (ORMs). By the end of this lab, you’ll have a solid foundation in
          database management with MySQL, and your bookstore application will be
          more powerful, efficient, and secure!
        </Paragraph>
        <Paragraph>
          This lab bridges the gap between simple data storage and professional
          database management.
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
