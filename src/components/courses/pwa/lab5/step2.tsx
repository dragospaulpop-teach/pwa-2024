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
          <strong>
            Relational Databases: Sets, Operations, and Data Integrity
          </strong>
        </Paragraph>
        <Paragraph>
          Let's dive into the set-based foundation of relational databases, the
          core operations of relational algebra, and how normalization,
          constraints, data types, and functions maintain data integrity.
        </Paragraph>

        <Paragraph>
          <strong>Relational Databases and Sets</strong>
        </Paragraph>
        <Paragraph>
          Relational databases are built on{" "}
          <Badge variant="secondary">relational algebra</Badge>, a branch of
          mathematics that uses sets and operations to manage and manipulate
          data. If you’ve worked with sets in math before, you’ll find that
          relational databases are structured around similar concepts.
        </Paragraph>
        <Paragraph>
          Each <Badge variant="secondary">table</Badge> in a relational database
          can be seen as a set of rows, where each row is a unique element. This
          set-based structure allows us to perform operations that manipulate
          and combine data from multiple tables, enforcing rules and
          relationships.
        </Paragraph>
        <Paragraph>
          <strong>Relational Algebra Operations</strong>
        </Paragraph>
        <Paragraph>
          Relational algebra consists of seven basic operations that allow us to
          filter, manipulate, and relate data across tables. You might recognize
          these from math classes:
          <UnorderedList inside={true}>
            <li>
              <Badge variant="secondary">Selection (σ): </Badge> Filters rows
              based on specific criteria. <strong>Example:</strong> Retrieve
              books where price &lt; 10.
            </li>
            <li>
              <Badge variant="secondary">Projection (π): </Badge> Selects
              specific columns from a table. <strong>Example:</strong> Retrieve
              the title and author of all books.
            </li>
            <li>
              <Badge variant="secondary">Union (∪): </Badge> Combines two tables
              by appending rows from one table to another.{" "}
              <strong>Example:</strong> Retrieve all books from both fiction and
              non-fiction categories.
            </li>
            <li>
              <Badge variant="secondary">Intersection (∩): </Badge> Retrieves
              rows that are common to both tables. <strong>Example:</strong>{" "}
              Retrieve books that are both fiction and non-fiction.
            </li>
            <li>
              <Badge variant="secondary">Difference (−): </Badge> Retrieves rows
              that are unique to one table. <strong>Example:</strong> Retrieve
              books that are only fiction.
            </li>
            <li>
              <Badge variant="secondary">Cartesian Product (×): </Badge>{" "}
              Combines rows from two tables. <strong>Example:</strong> Retrieve
              all combinations of authors and books.
            </li>
            <li>
              <Badge variant="secondary">Join (⋈): </Badge> Combines rows from
              two tables based on a related column, filtering the Cartesian
              Product to show only matching rows. <strong>Example:</strong>{" "}
              Retrieve books along with their author details by matching
              author_id in both tables.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          These operations are the foundation of SQL queries that you’ll write
          to interact with relational databases, especially when we use JOINs to
          retrieve related data from multiple tables.
        </Paragraph>
        <Paragraph>
          <strong>Data Integrity through Normalization</strong>
        </Paragraph>
        <Paragraph>
          <Badge variant="secondary">Normalization</Badge> is the process of
          structuring a database to reduce redundancy and ensure data
          consistency. It’s organized into stages called normal forms (NFs),
          which set rules for organizing data.
        </Paragraph>
        <Paragraph>
          <Badge variant="secondary">First Normal Form (1NF)</Badge>
          <UnorderedList inside={true}>
            <li>
              <strong>Rule:</strong> Each column must contain atomic
              (indivisible) values, and each entry in a column must be unique to
              that row.
            </li>
            <li>
              <strong>Example:</strong> In a{" "}
              <Badge variant="outline">books</Badge> table, instead of storing
              multiple categories in one field like{" "}
              <Badge variant="outline">Fiction</Badge>,{" "}
              <Badge variant="outline">Mystery</Badge>, we create a separate row
              for each category or a <Badge variant="outline">categories</Badge>{" "}
              table to link categories to books.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <Badge variant="secondary">Second Normal Form (2NF)</Badge>
          <UnorderedList inside={true}>
            <li>
              <strong>Rule:</strong> The table must be in 1NF, and all non-key
              columns must depend on the table's primary key.
            </li>
            <li>
              <strong>Example:</strong> In a{" "}
              <Badge variant="outline">book_authors</Badge> table with{" "}
              <Badge variant="outline">book_id</Badge> and{" "}
              <Badge variant="outline">author_id</Badge>, if a column like{" "}
              <Badge variant="outline">author_bio</Badge> depends only on{" "}
              <Badge variant="outline">author_id</Badge>, it should be moved to
              a separate <Badge variant="outline">authors</Badge> table to avoid
              partial dependency.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <Badge variant="secondary">Third Normal Form (3NF)</Badge>
          <UnorderedList inside={true}>
            <li>
              <strong>Rule:</strong> A table must be in 2NF, and there should be
              no transitive dependencies, meaning non-key columns should depend
              only on the primary key.
            </li>
            <li>
              <strong>Example:</strong> In a{" "}
              <Badge variant="outline">books</Badge> table, fields like{" "}
              <Badge variant="outline">publisher_address</Badge> that rely on{" "}
              <Badge variant="outline">publisher_name</Badge> should be in a
              separate <Badge variant="outline">publishers</Badge> table,
              preventing dependency chains.
            </li>
          </UnorderedList>
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
