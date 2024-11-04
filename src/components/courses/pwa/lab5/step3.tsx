import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Table from "@/components/table";
import TablesCard from "@/components/tables-card";
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
  const tables = {
    unnormalizedBooks: [
      {
        headers: [
          "book_id",
          "title",
          "categories",
          "author",
          "author_bio",
          "publisher",
          "publisher_address",
          "price",
        ],
        data: [
          [
            "1",
            "The Great Gatsby",
            "Fiction, Classic",
            "F. Scott Fitzgerald",
            "American novelist, 1896-1940",
            "Scribner",
            "123 Main St, New York",
            "10.99",
          ],
          [
            "2",
            "1984",
            "Dystopian, Fiction",
            "George Orwell",
            "British writer, 1903-1950",
            "Secker & Warburg",
            "456 West St, London",
            "8.99",
          ],
          [
            "3",
            "To Kill a Mockingbird",
            "Fiction, Legal",
            "Harper Lee",
            "American novelist, 1926-2016",
            "J.B. Lippincott & Co.",
            "789 East St, Philadelphia",
            "12.50",
          ],
        ],
        caption: "Unnormalized Books Table",
      },
    ],
    nf1: [
      {
        headers: [
          "book_id",
          "title",
          "author",
          "author_bio",
          "publisher",
          "publisher_address",
          "price",
        ],
        data: [
          [
            "1",
            "The Great Gatsby",
            "F. Scott Fitzgerald",
            "American novelist, 1896-1940",
            "Scribner",
            "123 Main St, New York",
            "10.99",
          ],
          [
            "2",
            "1984",
            "George Orwell",
            "British writer, 1903-1950",
            "Secker & Warburg",
            "456 West St, London",
            "8.99",
          ],
          [
            "3",
            "To Kill a Mockingbird",
            "Harper Lee",
            "American novelist, 1926-2016",
            "J.B. Lippincott & Co.",
            "789 East St, Philadelphia",
            "12.50",
          ],
        ],
        caption: "Books Table in 1NF",
      },
      {
        headers: ["category_id", "category_name"],
        data: [
          ["1", "Fiction"],
          ["2", "Classic"],
          ["3", "Dystopian"],
          ["4", "Legal"],
        ],
        caption: "Categories Table",
      },
      {
        headers: ["book_id", "category_id"],
        data: [
          ["1", "1"],
          ["1", "2"],
          ["2", "1"],
          ["2", "3"],
          ["3", "1"],
          ["3", "4"],
        ],
        caption: "Book_Categories Join Table",
      },
    ],
    nf2: [
      {
        headers: [
          "book_id",
          "title",
          "author_id",
          "publisher",
          "publisher_address",
          "price",
        ],
        data: [
          [
            "1",
            "The Great Gatsby",
            "1",
            "Scribner",
            "123 Main St, New York",
            "10.99",
          ],
          ["2", "1984", "2", "Secker & Warburg", "456 West St, London", "8.99"],
          [
            "3",
            "To Kill a Mockingbird",
            "3",
            "J.B. Lippincott & Co.",
            "789 East St, Philadelphia",
            "12.50",
          ],
        ],
        caption: "Books Table in 2NF",
      },
      {
        headers: ["author_id", "author", "author_bio"],
        data: [
          ["1", "F. Scott Fitzgerald", "American novelist, 1896-1940"],
          ["2", "George Orwell", "British writer, 1903-1950"],
          ["3", "Harper Lee", "American novelist, 1926-2016"],
        ],
        caption: "Authors Table",
      },
    ],
    nf3: [
      {
        headers: ["book_id", "title", "author_id", "publisher_id", "price"],
        data: [
          ["1", "The Great Gatsby", "1", "1", "10.99"],
          ["2", "1984", "2", "2", "8.99"],
          ["3", "To Kill a Mockingbird", "3", "3", "12.50"],
        ],
        caption: "Books Table in 3NF",
      },
      {
        headers: ["publisher_id", "publisher_name", "publisher_address"],
        data: [
          ["1", "Scribner", "123 Main St, New York"],
          ["2", "Secker & Warburg", "456 West St, London"],
          ["3", "J.B. Lippincott & Co.", "789 East St, Philadelphia"],
        ],
        caption: "Publishers Table",
      },
    ],
  };

  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Normalization example</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Let's take our <strong>books</strong> table thorugh the 3 normal
            forms
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          <strong>
            Original Table: <Badge variant="secondary">Books</Badge>
          </strong>
        </Paragraph>
        <Paragraph>
          Here’s our <Badge variant="secondary">Books</Badge> table before
          normalization. It contains all book information, including{" "}
          <Badge variant="secondary">author</Badge> details,{" "}
          <Badge variant="secondary">categories</Badge> list, and{" "}
          <Badge variant="secondary">publisher</Badge> details, all in a single
          table. This structure has redundancy and nested fields, which we’ll
          address in the normalization process.
        </Paragraph>
        <TablesCard>
          {tables.unnormalizedBooks.map((table, index) => (
            <Table
              key={index}
              headers={table.headers}
              data={table.data}
              caption={table.caption}
            />
          ))}
        </TablesCard>

        <Paragraph>
          <strong>First Normal Form (1NF)</strong>
        </Paragraph>
        <Paragraph>
          To satisfy 1NF, each field in the table should contain only atomic
          values—meaning no multiple values in a single field. Here, the
          categories column has multiple values in each row (e.g., "Fiction,
          Classic").
        </Paragraph>

        <TablesCard>
          {tables.nf1.map((table, index) => (
            <Table
              key={index}
              headers={table.headers}
              data={table.data}
              caption={table.caption}
            />
          ))}
        </TablesCard>

        <Paragraph>
          Changes to Achieve 1NF:
          <UnorderedList inside={true}>
            <li>
              We split the <Badge variant="secondary">categories</Badge> data
              out of the <Badge variant="secondary">books</Badge> table and
              create a new <Badge variant="secondary">Categories</Badge> table.
            </li>
            <li>
              We then create a{" "}
              <Badge variant="secondary">Book_Categories</Badge> table to link{" "}
              <Badge variant="secondary">books</Badge> and categories. This join
              table will manage the many-to-many relationship between books and
              categories.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          By separating categories into a new table, we’ve ensured that each
          column contains atomic values, meeting 1NF requirements. However, our
          books table still contains redundant author and publisher information,
          so let’s move to 2NF.
        </Paragraph>
        <Paragraph>
          <strong>Second Normal Form (2NF)</strong>
        </Paragraph>
        <Paragraph>
          For 2NF, a table must already be in 1NF, and all non-key columns
          should depend on the entire primary key. Since our books table doesn’t
          have a composite primary key, 2NF applies when considering tables that
          may need further decomposition.
        </Paragraph>
        <Paragraph>
          Here, the author details (author and author_bio) repeat across
          multiple books. To remove this partial dependency, we’ll create an
          Authors table with unique author details and use author_id in the
          books table.
        </Paragraph>
        <TablesCard>
          {tables.nf2.map((table, index) => (
            <Table
              key={index}
              headers={table.headers}
              data={table.data}
              caption={table.caption}
            />
          ))}
        </TablesCard>

        <Paragraph>
          <strong>Changes to Achieve 2NF:</strong>
          <UnorderedList inside={true}>
            <li>
              Move author-related fields (author and author_bio) to a new
              Authors table.
            </li>
            <li>Use author_id as a foreign key in the books table.</li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          By moving author information to a new table, we avoid redundancy.
          However, the publisher information still depends on publisher_name and
          not directly on book_id, leading us to 3NF.
        </Paragraph>
        <Paragraph>
          <strong>Third Normal Form (3NF)</strong>
        </Paragraph>
        <Paragraph>
          To satisfy 3NF, the table must already be in 2NF, and all non-key
          columns should depend only on the primary key. There should be no
          transitive dependencies, meaning that non-key columns should not
          depend on other non-key columns.
        </Paragraph>
        <Paragraph>
          Here, publisher_address depends on publisher rather than directly on
          book_id. To resolve this, we’ll create a separate Publishers table to
          store publisher information and reference it in the books table using
          publisher_id.
        </Paragraph>
        <TablesCard>
          {tables.nf3.map((table, index) => (
            <Table
              key={index}
              headers={table.headers}
              data={table.data}
              caption={table.caption}
            />
          ))}
        </TablesCard>

        <Paragraph>
          <strong>Changes to Achieve 3NF:</strong>
          <UnorderedList inside={true}>
            <li>
              Move publisher and publisher_address to a new Publishers table.
            </li>
            <li>
              Use publisher_id in the books table to reference the Publishers
              table.
            </li>
          </UnorderedList>
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
