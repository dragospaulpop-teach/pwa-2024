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
import UnorderedList from "@/components/unordered-list";

export default function Card1() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Theory</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Introduction to Data Persistence with Relational Databases
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          <strong>What is Data Persistence?</strong>
        </Paragraph>
        <Paragraph>
          Data persistence means storing data in a way that it can be retrieved
          and reused even after the application or server is restarted.
          Persistent data storage is essential for dynamic web applications,
          where we often need to store user information, content, and settings
          between sessions.
        </Paragraph>
        <Paragraph>
          <UnorderedList inside={true}>
            <li>
              In small projects, a <Badge variant="secondary">JSON</Badge> file
              can serve as a simple way to persist data. It’s easy to read and
              write, and it uses a familiar format, making it accessible to web
              developers.
            </li>
            <li>
              <strong>Limitation:</strong> JSON data is stored as a flat file,
              so as data grows, accessing and managing it becomes slower and
              more complex. JSON storage also lacks the advanced querying and
              security features of a database, making it challenging for dynamic
              applications.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Relational Databases</strong>
        </Paragraph>
        <Paragraph>
          For larger applications, a relational database is a more suitable
          solution. Relational databases use a structured format with tables,
          rows, and columns, providing several key benefits for storing complex
          data relationships.
          <UnorderedList inside={true}>
            <li>
              <Badge variant="secondary">MySQL</Badge> (or its fork{" "}
              <Badge variant="secondary">MariaDB</Badge>) is one of the most
              popular relational databases for web applications. Both integrate
              well with PHP, and MySQL is supported by many web hosting
              providers, making it an ideal choice for projects that need to
              scale.
            </li>
            <li>
              <strong>Data Structure:</strong> In a relational database, data is
              stored in <Badge variant="secondary">tables</Badge>. Each table
              represents an <Badge variant="secondary">entity</Badge> (e.g.,
              "Books") and contains <Badge variant="secondary">rows</Badge> of
              data, where each column represents an{" "}
              <Badge variant="secondary">attribute</Badge> of that entity (e.g.,
              title, author, price).
            </li>
            <li>
              <strong>Relationships:</strong> Relational databases are designed
              to manage <Badge variant="secondary">relationships</Badge> between
              tables. For example, if we also had an{" "}
              <Badge variant="secondary">Authors</Badge> table, we could link
              books to their authors without duplicating data.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>What is SQL?</strong>
        </Paragraph>
        <Paragraph>
          SQL (Structured Query Language) is the language used to manage and
          query data in relational databases. SQL provides the commands to
          create, read, update, and delete data, commonly known as CRUD
          operations.
        </Paragraph>
        <Paragraph>
          <strong>Advantages of Using SQL with Relational Databases</strong>
        </Paragraph>
        <Paragraph>
          <UnorderedList inside={true}>
            <li>
              <strong>Scalability:</strong> As your application grows, SQL
              databases allow you to organize and retrieve large amounts of data
              efficiently.
            </li>
            <li>
              <strong>Reliability:</strong> SQL databases offer ACID (Atomicity,
              Consistency, Isolation, Durability) compliance, ensuring that data
              remains consistent even in multi-user environments.
            </li>
            <li>
              <strong>Security:</strong> SQL provides fine-grained access
              control, allowing you to define permissions and use secure data
              handling techniques.
            </li>
            <li>
              <strong>Data Integrity:</strong> SQL databases enforce
              relationships and constraints, which help prevent data duplication
              and ensure accuracy.
            </li>
          </UnorderedList>
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
