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
import UnorderedList from "@/components/unordered-list";
import { AlertCircleIcon } from "lucide-react";

export default function Card1() {
  return (
    <Card className="bg-background/90 shadow-md">
      <CardHeader>
        <CardTitle>
          <Title>Tools for Managing MySQL Databases</Title>
        </CardTitle>
        <CardDescription>
          <Subtitle>
            In this section, we’ll cover different tools to manage and interact
            with MySQL databases: phpMyAdmin, MySQL Workbench, and the command
            line. Each has its strengths, and knowing them will make working
            with MySQL easier and more flexible.
          </Subtitle>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph>
          <strong>phpMyAdmin</strong>
        </Paragraph>
        <Paragraph>
          phpMyAdmin is a web-based interface for managing MySQL databases. It
          comes pre-installed with tools like XAMPP and is accessible via a
          browser. phpMyAdmin is easy to use, making it popular among
          developers, especially for quick tasks.
        </Paragraph>
        <Paragraph>
          <strong>Advantages</strong>
          <UnorderedList inside={true}>
            <li>
              <strong>User-friendly:</strong> With a graphical interface, it’s
              easy to perform actions like creating databases, running SQL
              queries, and managing tables without much SQL knowledge.
            </li>
            <li>
              <strong>Features:</strong> Provides options to create, update, and
              delete databases, tables, and rows, as well as manage users and
              permissions.
            </li>
          </UnorderedList>
        </Paragraph>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            To open phpMyAdmin, typically navigate to
            <Badge variant="secondary">http://localhost/phpmyadmin</Badge> in
            your browser when XAMPP or similar local server software is running.
          </AlertDescription>
        </Alert>

        <Paragraph>
          <strong>MySQL Workbench</strong>
        </Paragraph>
        <Paragraph>
          MySQL Workbench is a more advanced, standalone application for
          managing MySQL databases. It provides additional tools beyond those
          offered by phpMyAdmin, including data modeling and server
          administration.
        </Paragraph>
        <Paragraph>
          <strong>Advantages</strong>
          <UnorderedList inside={true}>
            <li>
              <strong>Database Design and Modeling:</strong> Includes tools for
              designing, modeling, and visualizing your database structure,
              making it useful for planning database schemas.
            </li>
            <li>
              <strong>Advanced SQL Development:</strong> Features an SQL editor
              with syntax highlighting and autocomplete, which can help with
              complex queries.
            </li>
            <li>
              <strong>Server Management:</strong> Allows for detailed server
              configuration, monitoring, and optimization.
            </li>
          </UnorderedList>
        </Paragraph>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            MySQL Workbench must be installed separately, and it connects to
            your MySQL server directly through IP and port settings.
          </AlertDescription>
        </Alert>

        <Paragraph>
          <strong>The Command Line</strong>
        </Paragraph>
        <Paragraph>
          The MySQL command line is a powerful and direct way to interact with a
          MySQL server. While it has no graphical interface, it’s highly
          efficient for quick queries, scripting, and remote database access.
        </Paragraph>
        <Paragraph>
          <strong>Advantages</strong>
          <UnorderedList inside={true}>
            <li>
              <strong>Efficiency:</strong> Ideal for fast operations and
              automation, especially useful for advanced users and backend
              scripts.
            </li>
            <li>
              <strong>Remote Access:</strong> Essential for managing databases
              on remote servers, especially when GUI-based tools are
              unavailable.
            </li>
          </UnorderedList>
        </Paragraph>
        <Alert>
          <AlertCircleIcon className="h-4 w-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            Open a terminal and run{" "}
            <Badge variant="secondary" className="font-mono">
              mysql -u <span className="mx-2 italic">username</span> -p
            </Badge>{" "}
            to connect. This allows you to type and run SQL commands directly.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
