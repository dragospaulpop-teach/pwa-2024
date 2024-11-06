import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
import Table from "@/components/table";
import TablesCard from "@/components/tables-card";
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
import UnorderedList from "@/components/unordered-list";
import { AlertCircleIcon, KeyRoundIcon } from "lucide-react";

export default function Card1() {
  const tables = {
    unnormalizedBooks: [
      {
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            title
          </div>,
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author
          </div>,
          "categories",
          "author_bio",
          "publisher",
          "publisher_address",
          "price",
        ],
        data: [
          [
            "The Great Gatsby",
            "F. Scott Fitzgerald",
            "Fiction, Classic",
            "American novelist, 1896-1940",
            "Scribner",
            "123 Main St, New York",
            "10.99",
          ],
          [
            "1984",
            "George Orwell",
            "Dystopian, Fiction",
            "British writer, 1903-1950",
            "Secker & Warburg",
            "456 West St, London",
            "8.99",
          ],
          [
            "To Kill a Mockingbird",
            "Harper Lee",
            "Fiction, Legal",
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
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            title
          </div>,
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author
          </div>,
          "author_bio",
          "publisher",
          "publisher_address",
          "price",
        ],
        data: [
          [
            "The Great Gatsby",
            "F. Scott Fitzgerald",
            "American novelist, 1896-1940",
            "Scribner",
            "123 Main St, New York",
            "10.99",
          ],
          [
            "1984",
            "George Orwell",
            "British writer, 1903-1950",
            "Secker & Warburg",
            "456 West St, London",
            "8.99",
          ],
          [
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
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            category_id
          </div>,
          "category_name",
        ],
        data: [
          ["1", "Fiction"],
          ["2", "Classic"],
          ["3", "Dystopian"],
          ["4", "Legal"],
        ],
        caption: "Categories Table",
      },
      {
        headers: [
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            title
          </div>,
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author
          </div>,
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            category_id
          </div>,
        ],
        data: [
          ["The Great Gatsby", "F. Scott Fitzgerald", "1"],
          ["The Great Gatsby", "F. Scott Fitzgerald", "2"],
          ["1984", "George Orwell", "1"],
          ["1984", "George Orwell", "3"],
          ["To Kill a Mockingbird", "Harper Lee", "1"],
          ["To Kill a Mockingbird", "Harper Lee", "4"],
        ],
        caption: "Book_Categories Join Table",
      },
    ],
    nf2: [
      {
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            book_id
          </div>,
          "title",
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author_id
          </div>,
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
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author_id
          </div>,
          "author",
          "author_bio",
        ],
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
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            book_id
          </div>,
          "title",
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author_id
          </div>,
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            publisher_id
          </div>,
          "price",
        ],
        data: [
          ["1", "The Great Gatsby", "1", "1", "10.99"],
          ["2", "1984", "2", "2", "8.99"],
          ["3", "To Kill a Mockingbird", "3", "3", "12.50"],
        ],
        caption: "Books Table in 3NF",
      },
      {
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            publisher_id
          </div>,
          "publisher_name",
          "publisher_address",
        ],
        data: [
          ["1", "Scribner", "123 Main St, New York"],
          ["2", "Secker & Warburg", "456 West St, London"],
          ["3", "J.B. Lippincott & Co.", "789 East St, Philadelphia"],
        ],
        caption: "Publishers Table",
      },
    ],
    final: [
      {
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            book_id
          </div>,
          "title",
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author_id
          </div>,
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            publisher_id
          </div>,
          "price",
        ],
        data: [
          ["1", "The Great Gatsby", "1", "1", "10.99"],
          ["2", "1984", "2", "2", "8.99"],
          ["3", "To Kill a Mockingbird", "3", "3", "12.50"],
        ],
        caption: "Books Table in 3NF",
      },
      {
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            category_id
          </div>,
          "category_name",
        ],
        data: [
          ["1", "Fiction"],
          ["2", "Classic"],
          ["3", "Dystopian"],
          ["4", "Legal"],
        ],
        caption: "Categories Table",
      },
      {
        headers: [
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            book_id
          </div>,
          <div className="flex items-center gap-2 text-blue-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            category_id
          </div>,
        ],
        data: [
          [1, "1"],
          [1, "2"],
          [2, "1"],
          [2, "3"],
          [3, "1"],
          [3, "4"],
        ],
        caption: "Book_Categories Join Table",
      },
      {
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            author_id
          </div>,
          "author",
          "author_bio",
        ],
        data: [
          ["1", "F. Scott Fitzgerald", "American novelist, 1896-1940"],
          ["2", "George Orwell", "British writer, 1903-1950"],
          ["3", "Harper Lee", "American novelist, 1926-2016"],
        ],
        caption: "Authors Table",
      },
      {
        headers: [
          <div className="flex items-center gap-2 text-amber-500">
            <KeyRoundIcon className="h-4 w-4" color="currentColor" />
            publisher_id
          </div>,
          "publisher_name",
          "publisher_address",
        ],
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
        <Alert className="mb-2">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            To make the example easier to understand, we'll use the same data as
            in our <Badge variant="secondary">books.json</Badge> file, but with
            a few edits.
          </AlertDescription>
          <AlertDescription>
            I have added the <Badge variant="secondary">author_bio</Badge>, the{" "}
            <Badge variant="secondary">publisher</Badge> and the{" "}
            <Badge variant="secondary">publisher_address</Badge> columns.
          </AlertDescription>
          <AlertDescription>
            I have also turned the <Badge variant="secondary">category</Badge>
            column into a list of categories and named it{" "}
            <Badge variant="secondary">categories</Badge>.
          </AlertDescription>
        </Alert>

        <Alert className="mb-2">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            I have used these symbols to designate keys:
          </AlertDescription>
          <AlertDescription>
            <div className="flex items-center gap-2 text-amber-500">
              <KeyRoundIcon className="h-4 w-4" />
              Primary Key
            </div>
          </AlertDescription>
          <AlertDescription>
            <div className="flex items-center gap-2 text-blue-500">
              <KeyRoundIcon className="h-4 w-4" />
              Foreign Key
            </div>
          </AlertDescription>
        </Alert>
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

        <Alert className="my-2">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            When we have a many-to-many relationship and we use a join table
            (like
            <Badge variant="secondary">Book_Categories</Badge>), we need to
            create a composite primary key made up of all the foreign keys (in
            this case the primary key is made up of the combo of{" "}
            <div className="inline-flex items-center gap-2 rounded-md border border-amber-500 p-2">
              <div className="flex items-center gap-2 text-amber-500">
                <KeyRoundIcon className="h-4 w-4" color="currentColor" />
                title
              </div>
              <div className="flex items-center gap-2 text-amber-500">
                <KeyRoundIcon className="h-4 w-4" color="currentColor" />
                author
              </div>
              <div className="flex items-center gap-2 text-amber-500">
                <KeyRoundIcon className="h-4 w-4" color="currentColor" />
                category_id
              </div>
            </div>
          </AlertDescription>
        </Alert>
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
          should depend on the entire primary key. Since our books table has a
          composite primary key (<Badge variant="secondary">book_id</Badge> and{" "}
          <Badge variant="secondary">author_id</Badge>), the{" "}
          <Badge variant="secondary">author_bio</Badge> column doesn't depend on
          the entire primary key but only on part of it (
          <Badge variant="secondary">author</Badge>).
        </Paragraph>
        <Paragraph>
          We have 2 options to solve 2NF:
          <UnorderedList inside={true}>
            <li>
              We can create an atomic primary key in the{" "}
              <Badge variant="secondary">books</Badge> table.
            </li>
            <li>
              We can create a new <Badge variant="secondary">Authors</Badge>
              table and use <Badge variant="secondary">author_id</Badge> as a
              foreign key in the <Badge variant="secondary">books</Badge> table.
            </li>
          </UnorderedList>
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
        <Paragraph>
          <strong>Final Result:</strong>
        </Paragraph>
        <TablesCard>
          {tables.final.map((table, index) => (
            <Table
              key={index}
              headers={table.headers}
              data={table.data}
              caption={table.caption}
            />
          ))}
        </TablesCard>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
