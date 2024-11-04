import Paragraph from "@/components/paragraph";
import Subtitle from "@/components/subtitle";
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

export default function Card1() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Self-study</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            Here's some more things you should definitely study
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          <strong>Object-relational mapping (ORM)</strong>
          <UnorderedList inside>
            <li>
              <strong>Description</strong>: ORM is a technique that allows you
              to interact with a database using an object-oriented approach.
              This means you can use objects to interact with the database,
              instead of writing SQL queries.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          Sometimes structured data is not enough. You might need to store more
          complex data.
        </Paragraph>
        <Paragraph>
          <strong>Types of NoSQL Databases</strong>
          <UnorderedList inside>
            <li>
              <strong>Document Stores</strong>: Store data in JSON-like
              documents, making it easy to represent complex data hierarchies.
              Each document is a self-contained unit with flexible schema, which
              is great for applications where the data structure can evolve.
            </li>
            <li>
              <strong>Key-Value Stores</strong>: Store data as simple key-value
              pairs, similar to dictionaries or hash maps. This type is highly
              efficient for caching and quick data retrieval by key.
            </li>
            <li>
              <strong>Wide-Column Stores</strong>: Organize data in columns
              instead of rows, making them efficient for queries that require
              reading large amounts of columns, such as analytical data and
              time-series data.
            </li>
            <li>
              <strong>Graph Databases</strong>
              Focus on storing relationships between entities in a network
              structure (nodes and edges), which is useful for applications like
              social networks and recommendation engines.
            </li>
            <li>
              <strong>Vector Databases</strong>: Optimized for storing and
              querying high-dimensional vector embeddings (numerical
              representations of objects), which are essential for AI, machine
              learning, and natural language processing applications.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Most Used Non-Relational Databases</strong>
        </Paragraph>
        <Paragraph>
          <strong>MongoDB</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Document Store
            </li>
            <li>
              <strong>Description</strong>: MongoDB stores data in flexible,
              JSON-like documents, making it scalable and easy to manage for
              complex applications.
            </li>
            <li>
              <strong>Use Cases</strong>: Content management, e-commerce, and
              real-time analytics.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Redis</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Key-Value Store
            </li>
            <li>
              <strong>Description</strong>: An in-memory data structure store,
              ideal for caching and session management due to its speed.
            </li>
            <li>
              <strong>Use Cases</strong>: Caching, session storage, real-time
              analytics, message queuing.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Cassandra</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Wide-Column Store
            </li>
            <li>
              <strong>Description</strong>: Highly scalable and available,
              Cassandra handles massive datasets across distributed systems.
            </li>
            <li>
              <strong>Use Cases</strong>: IoT applications, high-availability
              systems, time-series data.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Amazon DynamoDB</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Key-Value and Document Store
            </li>
            <li>
              <strong>Description</strong>: A fully managed, serverless NoSQL
              database on AWS that scales automatically.
            </li>
            <li>
              <strong>Use Cases</strong>: E-commerce, mobile apps, gaming, and
              serverless applications.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Couchbase</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Document Store
            </li>
            <li>
              <strong>Description</strong>: Couchbase combines key-value and
              document storage with SQL-like querying capabilities.
            </li>
            <li>
              <strong>Use Cases</strong>: Real-time analytics, user profile
              management, personalized content.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Neo4j</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Graph Database
            </li>
            <li>
              <strong>Description</strong>: Optimized for storing relationships,
              Neo4j uses nodes and edges, making it ideal for complex
              relationship-based queries.
            </li>
            <li>
              <strong>Use Cases</strong>: Social networks, fraud detection,
              recommendation systems.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Elasticsearch</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Document Store / Search Engine
            </li>
            <li>
              <strong>Description</strong>: Primarily used as a search and
              analytics engine, Elasticsearch supports scalable, full-text
              search capabilities.
            </li>
            <li>
              <strong>Use Cases</strong>: Full-text search, real-time log
              analysis, and monitoring.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>HBase</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Wide-Column Store
            </li>
            <li>
              <strong>Description</strong>: Built on top of Hadoop, HBase is
              suited for distributed storage and large data sets.
            </li>
            <li>
              <strong>Use Cases</strong>: Big Data analytics, data warehousing,
              real-time analytics.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong> Firebase Realtime Database</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Key-Value / Document Store
            </li>
            <li>
              <strong>Description</strong>: Part of Google’s Firebase platform,
              it is optimized for real-time updates.
            </li>
            <li>
              <strong>Use Cases</strong>: Real-time applications, chat
              applications, collaborative tools.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>ArangoDB</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Multi-Model (Graph, Document, Key-Value)
            </li>
            <li>
              <strong>Description</strong>: ArangoDB supports multiple data
              models, enabling mixed data storage and querying.
            </li>
            <li>
              <strong>Use Cases</strong>: Graph-based applications, full-text
              search, and complex data structures.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Supabase</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Relational (PostgreSQL-based, often used
              with JSONB for semi-structured data)
            </li>
            <li>
              <strong>Description</strong>: Supabase offers an open-source
              backend as a service built on top of PostgreSQL, with real-time
              and authentication features.
            </li>
            <li>
              <strong>Use Cases</strong>: Web and mobile apps, real-time data
              syncing, collaborative tools.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>Pinecone</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Vector Database
            </li>
            <li>
              <strong>Description</strong>: Pinecone is a vector database
              optimized for high-dimensional data storage and similarity search,
              commonly used in machine learning and AI.
            </li>
            <li>
              <strong>Use Cases</strong>: Recommendation engines, natural
              language processing, and semantic search applications.
            </li>
          </UnorderedList>
        </Paragraph>
        <Paragraph>
          <strong>FaunaDB</strong>
          <UnorderedList inside>
            <li>
              <strong>Type</strong>: Document Store
            </li>
            <li>
              <strong>Description</strong>: FaunaDB is a distributed,
              document-oriented database that supports ACID transactions and
              provides a flexible schema for semi-structured data.
            </li>
            <li>
              <strong>Use Cases</strong>: Real-time applications, chat
              applications, collaborative tools.
            </li>
          </UnorderedList>
        </Paragraph>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
