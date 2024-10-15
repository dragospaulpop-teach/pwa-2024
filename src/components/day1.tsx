import { motion } from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import Code from "./code";

export default function Day1() {
  const code = {
    step1: {
      add_vhost: `
<VirtualHost *:80>
    ServerAdmin webmaster@bookstore.local
    DocumentRoot "C:/xampp/htdocs/bookstore"
    ServerName bookstore.local
    ErrorLog "logs/bookstore-error.log"
    CustomLog "logs/bookstore-access.log" common
</VirtualHost>
      `,
      edit_hosts: `
127.0.0.1 bookstore.local
      `,
    },
    step3: {
      index: `
<?php
// Set variables for dynamic content
$storeName = "John's Book Emporium";
$categories = ["Fiction", "Non-Fiction", "Children's Books", "Science Fiction"];
$currentTime = date('H');

// Determine greeting based on time of day
if ($currentTime < 12) {
    $greeting = "Good morning";
} elseif ($currentTime < 18) {
    $greeting = "Good afternoon";
} else {
    $greeting = "Good evening";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to <?php echo $storeName; ?></title>
</head>
<body>
    <h1><?php echo $greeting . ", welcome to " . $storeName; ?>!</h1>
    <p>Here are some of our book categories:</p>
    <ul>
        <?php
        // Loop through categories array and display each one
        foreach ($categories as $category) {
            echo "<li>" . $category . "</li>";
        }
        ?>
    </ul>
</body>
</html>

    `,
    },
    step4: {
      arrays: `
// Book data
$titles = [
    "The Great Gatsby",
    "1984",
    "To Kill a Mockingbird",
    "The Catcher in the Rye"
];

$descriptions = [
    "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
    "A dystopian novel set in a totalitarian society ruled by Big Brother.",
    "A novel about the serious issues of rape and racial inequality.",
    "The experiences of a young boy who leaves his boarding school to wander New York City."
];

// Random book cover images from placekitten.com
$covers = [
    "https://placekitten.com/200/300",
    "https://placekitten.com/210/300",
    "https://placekitten.com/220/300",
    "https://placekitten.com/230/300"
];

$prices = [
    10.99,
    8.99,
    12.50,
    9.75
];

      `,
      display: `
<h2>Our Featured Books</h2>
<div class="book-list">
    <?php
    // Loop through the arrays and display each book
    for ($i = 0; $i < count($titles); $i++) {
        echo "<div class='book'>";
        echo "<h3>" . $titles[$i] . "</h3>";
        echo "<img src='" . $covers[$i] . "' alt='" . $titles[$i] . " Cover' />";
        echo "<p><strong>Description:</strong> " . $descriptions[$i] . "</p>";
        echo "<p><strong>Price:</strong> $" . number_format($prices[$i], 2) . "</p>";
        echo "</div>";
    }
    ?>
</div>

      `,
      css: `
<style>
    .book-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
    .book {
        border: 1px solid #ddd;
        padding: 10px;
        width: 200px;
    }
    .book img {
        width: 100%;
        height: auto;
    }
</style>

      `,
      multidimensional: `
$books = [
    [
        "title" => "The Great Gatsby",
        "description" => "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
        "cover" => "https://placekitten.com/200/300",
        "price" => 10.99
    ],
    [
        "title" => "1984",
        "description" => "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        "cover" => "https://placekitten.com/210/300",
        "price" => 8.99
    ],
    [
        "title" => "To Kill a Mockingbird",
        "description" => "A novel about the serious issues of rape and racial inequality.",
        "cover" => "https://placekitten.com/220/300",
        "price" => 12.50
    ],
    [
        "title" => "The Catcher in the Rye",
        "description" => "The experiences of a young boy who leaves his boarding school to wander New York City.",
        "cover" => "https://placekitten.com/230/300",
        "price" => 9.75
    ]
];

      `,
      updatedisplay: `
<h2>Our Featured Books</h2>
<div class="book-list">
    <?php
    // Loop through the multidimensional array and display each book
    foreach ($books as $book) {
        echo "<div class='book'>";
        echo "<h3>" . $book['title'] . "</h3>";
        echo "<img src='" . $book['cover'] . "' alt='" . $book['title'] . " Cover' />";
        echo "<p><strong>Description:</strong> " . $book['description'] . "</p>";
        echo "<p><strong>Price:</strong> $" . number_format($book['price'], 2) . "</p>";
        echo "</div>";
    }
    ?>
</div>

      `,
      bonus: `
<h2>Our Featured Books</h2>
<div class="book-list">
    <?php
    foreach ($books as $book) {
        echo "<div class='book'>";
        echo "<h3>" . $book['title'] . "</h3>";
        echo "<img src='" . $book['cover'] . "' alt='" . $book['title'] . " Cover' />";
        echo "<p><strong>Description:</strong> " . $book['description'] . "</p>";

        // Check if the book has a discount price
        if (isset($book['discount_price'])) {
            echo "<p><strong>Price:</strong> <span style='text-decoration: line-through;'>$" . number_format($book['price'], 2) . "</span> ";
            echo "<strong>Discounted Price:</strong> $" . number_format($book['discount_price'], 2) . "</p>";
        } else {
            echo "<p><strong>Price:</strong> $" . number_format($book['price'], 2) . "</p>";
        }

        echo "</div>";
    }
    ?>
</div>

      `,
    },
    step7: {
      refactor: `
<h2>Our Featured Books</h2>
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
</div>

      `,
    },
    step8: {
      move: `
<?php
$books = [
    [
        "title" => "The Great Gatsby",
        "description" => "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
        "cover" => "https://placekitten.com/200/300",
        "price" => 10.99,
        "discount_price" => 8.99
    ],
    [
        "title" => "1984",
        "description" => "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        "cover" => "https://placekitten.com/210/300",
        "price" => 8.99
    ],
    [
        "title" => "To Kill a Mockingbird",
        "description" => "A novel about the serious issues of rape and racial inequality.",
        "cover" => "https://placekitten.com/220/300",
        "price" => 12.50
    ],
    [
        "title" => "The Catcher in the Rye",
        "description" => "The experiences of a young boy who leaves his boarding school to wander New York City.",
        "cover" => "https://placekitten.com/230/300",
        "price" => 9.75
    ]
];

      `,
      include: `
<?php
// Include the book data from another file
include 'books.php';
?>

      `,
    },
    step9: {
      json: `
[
    {
        "title": "The Great Gatsby",
        "description": "A story of the fabulously wealthy Jay Gatsby and his love for Daisy Buchanan.",
        "cover": "https://placekitten.com/200/300",
        "price": 10.99,
        "discount_price": 8.99
    },
    {
        "title": "1984",
        "description": "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        "cover": "https://placekitten.com/210/300",
        "price": 8.99
    },
    {
        "title": "To Kill a Mockingbird",
        "description": "A novel about the serious issues of rape and racial inequality.",
        "cover": "https://placekitten.com/220/300",
        "price": 12.50
    },
    {
        "title": "The Catcher in the Rye",
        "description": "The experiences of a young boy who leaves his boarding school to wander New York City.",
        "cover": "https://placekitten.com/230/300",
        "price": 9.75
    }
]

      `,
      load: `
<?php
// Load the book data from the JSON file
$jsonData = file_get_contents('books.json');

// Decode the JSON data into a PHP array
$books = json_decode($jsonData, true);
?>

      `,
    },
  };

  return (
    <motion.main className="p-4 container mx-auto">
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Apache</strong>: An open-source web server that handles HTTP
          requests and serves web pages to browsers.
        </li>
        <li>
          <strong>PHP</strong>: A scripting language that is executed on the
          server side to generate dynamic content (e.g., user-specific pages).
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-2">1.2 The Anatomy of a URL</h3>
      <p>
        A <strong>Uniform Resource Locator (URL)</strong> is the address used to
        access a resource on the internet. Here's a breakdown of its parts:
      </p>
      <p>
        <code className="font-mono text-xs bg-muted-foreground text-muted p-1 rounded-md px-2">
          https://www.example.com:8080/books/list.php?category=fiction&sort=asc#top
        </code>
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Protocol</strong> <Code>(https://)</Code>: Specifies the
          communication protocol. Most common are HTTP (HyperText Transfer
          Protocol) and HTTPS (secured version of HTTP).
        </li>
        <li>
          <strong>Domain</strong> <Code>(www.example.com)</Code>: The address of
          the server hosting the resource. This resolves to an IP address behind
          the scenes.
        </li>
        <li>
          <strong>Port</strong> <Code>(8080)</Code>: The port number tells the
          server which service you want to interact with. The default for HTTP
          is 80, and for HTTPS it’s 443. If a non-standard port is used (like
          8080), it must be specified in the URL.
        </li>
        <li>
          <strong>Resource</strong> <Code>(/books/list.php)</Code>: The path to
          the specific file or resource on the server (a webpage, image, etc.).
        </li>
        <li>
          <strong>Query String</strong>
          <Code>(?category=fiction&sort=asc)</Code>: A series of key-value pairs
          sent to the server, often used to filter or customize the requested
          resource.
        </li>
        <li>
          <strong>Hash</strong> <Code>(#top)</Code>: An anchor or fragment
          identifier that takes you to a specific section of the page. takes you
          to a specific section of the page.
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-2">1.3 The Request-Response Model</h3>
      <p>
        When you visit a website, your browser sends an HTTP request to the web
        server, which processes the request and sends back an HTTP response.
      </p>
      <h4 className="text-lg font-bold mt-2">Request:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>HTTP Verbs:</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              <strong>GET:</strong> Retrieves data (e.g., a web page). It should
              not modify any data on the server.
            </li>
            <li>
              <strong>POST:</strong> Sends data to the server (e.g., submitting
              a form) and often causes a change (e.g., adding a new record).
              often causes a change (e.g., adding a new record).
            </li>
            <li>
              <strong>PUT, DELETE, etc.:</strong> Less common but useful for
              certain operations like updating or deleting data.
            </li>
          </ul>
        </li>
        <li>
          <strong>Headers:</strong> Metadata about the request (e.g., the user
          agent, content type).
        </li>
        <li>
          <strong>Body:</strong> Used mainly in POST requests to carry data
          being submitted (e.g., form data).
        </li>
      </ul>
      <h4 className="text-lg font-bold mt-2">Response:</h4>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Status Code:</strong> Tells the browser if the request was
          successful (e.g., 200 OK) or encountered issues (e.g., 404 Not Found).
        </li>
        <li>
          <strong>Headers:</strong> Information about the response (e.g.,
          content type, caching policies).
        </li>
        <li>
          <strong>Body:</strong> The actual data returned, such as the HTML for
          a web page.
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-2">
        1.4 Apache and PHP Configuration
      </h3>
      <p>
        Apache <Code>httpd.conf</Code>:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          Apache’s configuration is handled via the <Code>httpd.conf</Code>{" "}
          file. You can find it in the XAMPP directory under{" "}
          <Code>apache\conf</Code>.
        </li>
        <li>
          <strong>Important settings:</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              <Code>DocumentRoot:</Code>This specifies the folder where your
              website files are stored.
            </li>
            <li>
              <Code>Listen:</Code> The port Apache listens on. By default, this
              is 80.
            </li>
            <li>
              <Code>Virtual Hosts:</Code> This allows you to host multiple
              websites on the same server by configuring separate domains or
              subdomains. Located in <Code>extra\httpd-vhosts.conf</Code>.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        PHP <Code>php.ini</Code>:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          PHP’s configuration is done via the <Code>php.ini</Code> file, found
          in the <Code>php</Code> folder of XAMPP.
        </li>
        <li>
          <strong>Important settings:</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              <Code>memory_limit:</Code> Limits how much memory a script can
              use.
            </li>
            <li>
              <Code>upload_max_filesize:</Code> Controls the maximum file size
              for uploads.
            </li>
            <li>
              <Code>display_errors:</Code> Whether errors should be shown to the
              user (important during development).
            </li>
          </ul>
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-2">
        1.5 PHP: Interpreted vs. Compiled Languages
      </h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>PHP is an interpreted language.</strong> This means that code
          is executed line-by-line on the server. There’s no need to compile PHP
          code before running it.
        </li>
        <li>
          <strong>Compiled languages </strong>(e.g., C, C++, Rust, Zig, Go etc.)
          are converted into machine code by a compiler before execution, making
          them generally faster but requiring a compilation step.
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              <strong>Java and C#:</strong> They use intermediate compilation.
              Code is first compiled into an intermediate language (bytecode)
              and then executed by a runtime environment (Java Virtual Machine
              for Java, Common Language Runtime for C#).
            </li>
          </ul>
        </li>
      </ul>
      <h1 className="text-2xl font-bold mt-4">
        Part 2: Practical – Configuring Apache, PHP, and Creating a Dynamic PHP
        Page
      </h1>
      <p>Now, let’s put theory into practice!</p>
      <h2 className="text-xl font-bold mt-2">
        Step 1: Configuring Apache (Virtual Hosts)
      </h2>
      <p>
        By default, Apache serves content from C:/xampp/htdocs. However, we want
        to set up a virtual host so we can access our project as if it were a
        real website.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Open the <Code>httpd-vhosts.conf</Code> file in the XAMPP directory
          under <Code>apache\conf\extra</Code>.
        </li>
        <li>
          Add the following configuration:
          <p>
            Below any existing content, add this configuration for your project:
          </p>
          <SyntaxHighlighter>{code.step1.add_vhost}</SyntaxHighlighter>
          <p>
            This block tells Apache that requests for bookstore.local should be
            served from the bookstore folder.
          </p>
        </li>
        <li>
          Update hosts File:
          <p>
            We need to map bookstore.local to localhost so your browser knows
            where to look.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Open C:/Windows/System32/drivers/etc/hosts as an administrator.
            </li>
            <li>
              Add the following line:
              <SyntaxHighlighter>{code.step1.edit_hosts}</SyntaxHighlighter>
            </li>
          </ul>
        </li>
        <li>Restart Apache from the XAMPP Control Panel.</li>
        <li>
          Test It:
          <p>
            Open your browser and go to http://bookstore.local/. If everything
            is configured correctly, you should see an empty directory or your
            existing project.
          </p>
        </li>
      </ol>
      <h2 className="text-xl font-bold mt-2">
        Step 2: Configuring PHP (php.ini)
      </h2>
      <p>Let’s tweak some PHP settings to suit our development needs.</p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Open the <Code>php.ini</Code> file in the XAMPP directory under{" "}
          <Code>php</Code>.
        </li>
        <li>
          Update Key Settings:
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              Turn on error reporting: Find <Code>display_errors</Code> and set
              it to On.
            </li>
            <li>
              Increase memory limit: Find <Code>memory_limit</Code> and increase
              it to 256M.
            </li>
          </ul>
        </li>
        <li>Restart Apache from the XAMPP Control Panel.</li>
      </ol>
      <h2 className="text-xl font-bold mt-2">
        Step 3: Creating a Dynamic PHP Homepage
      </h2>
      <p>
        Now that everything is set up, let’s create a more complex homepage. In
        this step, you’ll combine HTML and PHP to dynamically generate content.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Create a New PHP File:
          <p>
            Create <Code>index.php</Code> in your{" "}
            <Code>C:/xampp/htdocs/bookstore</Code> folder.
          </p>
        </li>
        <li>
          Write the Following Code:
          <SyntaxHighlighter>{code.step3.index}</SyntaxHighlighter>
        </li>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Dynamic Greeting:</strong> Based on the time of day, the site
          greets the user with "Good morning," "Good afternoon," or "Good
          evening."
        </li>
        <li>
          <strong>Categories List:</strong> We’re using a <Code>foreach</Code>{" "}
          loop to output a list of book categories from an array.
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-2">Step 4: Testing and Expanding</h2>
      <ol className="list-decimal list-inside mt-2">
        <li>
          <strong>View Your Page:</strong>

          <p>
            Go to <Code>http://bookstore.local/index.php</Code>. You should see
            a greeting and a list of book categories.
          </p>
        </li>
        <li>
          <strong>Task 1:</strong> Add More Categories
          <p>
            Modify the <Code>$categories</Code> array to add more categories.
            Test how the list grows.
          </p>
        </li>
        <li>
          <strong>Task 2:</strong> Add a “Featured Book” Section
          <p>
            Create a new variable <Code>$featuredCategory</Code> and use it to
            display a "Category of the Day" on the homepage. Randomize the
            category selection.
          </p>
          <p>
            <strong>Hint:</strong> Use the <Code>array_rand()</Code> function to
            pick a random element from an array.
          </p>
        </li>
        <li>
          <strong>Task 3:</strong> Create a Footer with the Current Year
          <p>
            At the bottom of your page, add a footer that dynamically displays
            the current year using the
            <Code>date()</Code> function.
          </p>
        </li>
      </ol>
      <h2 className="text-xl font-bold mt-2">
        Part 4: Expanding the Bookstore with More Arrays
      </h2>
      <p>We’re going to display a list of books with the following details:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>Title:</strong> The book's name.
        </li>
        <li>
          <strong>Description:</strong> A brief description of the book.
        </li>
        <li>
          <strong>Cover Image:</strong> A random image for the book cover (we’ll
          use an online image service like placekitten.com).
        </li>
        <li>
          <strong>Price:</strong> The cost of the book.
        </li>
      </ul>
      <p>
        By the end of this part, students will learn to create individual arrays
        for each book property, and then combine them into one multidimensional
        associative array. This will make the data easier to manage and extend
        later on.
      </p>
      <h2 className="text-xl font-bold mt-2">
        Step 1: Create Arrays for Book Information
      </h2>
      <ol className="list-decimal list-inside mt-2">
        <li>
          <strong>
            Modify the PHP code to add arrays for book titles, descriptions,
            cover images, and prices.
          </strong>
          <p>
            In your <Code>index.php</Code> file, add the following arrays just
            after the <Code>$categories</Code> array:
          </p>
          <SyntaxHighlighter language="php">
            {code.step4.arrays}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>$titles:</strong> An array of book titles.
        </li>
        <li>
          <strong>$descriptions:</strong> A corresponding array of book
          descriptions.
        </li>
        <li>
          <strong>$covers:</strong> An array of book cover images using a
          placeholder image service (placekitten.com).
        </li>
        <li>
          <strong>$prices:</strong> An array of book prices.
        </li>
      </ul>
      <h2 className="text-xl font-bold mt-2">
        Step 2: Display Each Book Using the Arrays
      </h2>
      <p>
        Now let’s loop through these arrays and display each book on the page.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Below the categories section, add a new heading "Our Featured Books"
          and then use a for loop to display each book.
          <p>
            Update your <Code>index.php</Code> to look like this:
          </p>
          <SyntaxHighlighter>{code.step4.display}</SyntaxHighlighter>
        </li>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          We use a <Code>for</Code> loop to iterate through the arrays,
          displaying each book's title, cover image, description, and price.
        </li>
        <li>
          The <Code>number_format()</Code> function ensures the price is
          displayed with two decimal places.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-2">
        Step 3: Styling the Book List (Optional)
      </h2>
      <p>
        For clarity in the browser, let’s add some simple inline CSS to format
        the book list.
      </p>
      <SyntaxHighlighter>{code.step4.css}</SyntaxHighlighter>

      <h2 className="text-xl font-bold mt-2">
        Step 4: Creating a Multidimensional Associative Array
      </h2>
      <p>
        Now that we have individual arrays for each book property, it’s time to
        combine them into one multidimensional associative array. This will make
        it easier to manage each book as an object-like entity with related
        properties (title, description, cover, price).
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Replace the separate arrays with a single associative array. In your
          index.php, remove the individual arrays and replace them with this
          structure:
          <SyntaxHighlighter language="php">
            {code.step4.multidimensional}
          </SyntaxHighlighter>
        </li>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          Each book is represented as an associative array with keys for
          <Code>title</Code>, <Code>description</Code>, <Code>cover</Code>, and{" "}
          <Code>price</Code>.
        </li>
        <li>
          The <Code>$books</Code> array is now a multidimensional array, where
          each element is itself an associative array.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-2">
        Step 5: Display Books Using the Multidimensional Array
      </h2>
      <p>
        Now we will modify the loop to iterate through the new $books array and
        display the information.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>Update the book display loop:</li>
        <SyntaxHighlighter>{code.step4.updatedisplay}</SyntaxHighlighter>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          We use a <Code>foreach</Code> loop to iterate through the{" "}
          <Code>$books</Code> array. Each book is an associative array, so we
          can access its properties using keys like <Code>$book['title']</Code>,
          <Code>$book['cover']</Code>, etc.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-2">Step 6: Hands-On Exercises</h2>
      <p>
        Now that you have the basic structure in place, it’s time for some
        hands-on practice:
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          <strong>Task 1: Add More Books</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              Add at least two more books to the $books array, complete with
              titles, descriptions, covers, and prices.
            </li>
            <li>Test your changes by refreshing the page.</li>
          </ul>
        </li>
        <li>
          <strong>Task 2: Add a “Discounted Price” Field</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              Modify the $books array to include a new field called
              <Code>discount_price</Code>.
            </li>
            <li>
              If a book has a discounted price, display the discounted price
              instead of the regular price. If there is no discount, display the
              regular price as usual.
            </li>
            <li>
              Hint: Use an if statement inside the foreach loop to check if{" "}
              <Code>discount_price</Code> is set.
            </li>
          </ul>
        </li>
        <li>
          <strong>Task 3: Highlight Books with Discounts</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              Add a special CSS class to books that have a discount. For
              example, make the border of discounted books green to make them
              stand out.
            </li>
          </ul>
        </li>
      </ol>

      <h2 className="text-xl font-bold mt-2">
        Bonus Task: Conditional Display of Discounts
      </h2>
      <p>
        Some books might have both a regular price and a discount price. Let’s
        conditionally show the discounted price (if available) and cross out the
        original price.
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>Modify the display code to handle discounts:</li>
        <SyntaxHighlighter>{code.step4.bonus}</SyntaxHighlighter>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          The code checks if the <Code>discount_price</Code> is set for a book.
          If it is, the original price is crossed out, and the discounted price
          is shown.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-2">
        Part 7: Using foreach: endforeach for Cleaner Code
      </h2>
      <p>
        When outputting HTML using <Code>echo</Code>, the code can get messy
        quickly. Luckily, PHP provides an alternative syntax for control
        structures, such as <Code>foreach</Code>, that keeps the HTML and PHP
        neatly separated, improving readability.
      </p>

      <h2 className="text-xl font-bold mt-2">
        Step 1: Refactor the Book Display Code
      </h2>
      <p>
        Let's refactor the current loop that outputs the book details using the{" "}
        <Code>foreach: endforeach</Code> syntax:
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          Update your index.php file to use the new syntax. Replace the existing
          foreach loop with this cleaner approach:
          <SyntaxHighlighter>{code.step7.refactor}</SyntaxHighlighter>
        </li>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <Code>&lt;?= $variable; ?&gt;</Code> is shorthand for{" "}
          <Code>&lt;?php echo $variable; ?&gt;</Code>, making it even cleaner.
        </li>
        <li>
          We’ve replaced the <Code>foreach ($books as $book)</Code> block with
          <Code>foreach: endforeach</Code>, which improves readability when
          mixing PHP and HTML.
        </li>
        <li>
          The same is done for the <Code>if: endif</Code> statements,
          eliminating the need for curly braces {}.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-2">
        Part 8: Modularizing the Code with include or require
      </h2>
      <p>
        Now, let’s move the book data into a separate PHP file and include it in
        index.php. We’ll also explain the difference between{" "}
        <Code>include</Code>, <Code>require</Code>, and their{" "}
        <Code>require_once</Code> and <Code>include_once</Code> counterparts.
      </p>

      <h2 className="text-xl font-bold mt-2">
        Step 1: Moving the Books Data to a Separate PHP File
      </h2>
      <ol>
        <li>
          Create a new PHP file called books.php inside your bookstore
          directory.
        </li>
        <li>
          Move the books array from index.php to books.php:
          <SyntaxHighlighter language="php">
            {code.step8.move}
          </SyntaxHighlighter>
        </li>
        <li>
          Include the books.php file inside your index.php:
          <SyntaxHighlighter>{code.step8.include}</SyntaxHighlighter>
        </li>
      </ol>

      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          include: This will include and evaluate the specified file. If the
          file is not found, it will throw a warning but continue executing the
          script.
        </li>
        <li>
          require: This works similarly to include, but if the file is not
          found, it will throw a fatal error and halt execution.
        </li>
        <li>
          include_once and require_once: Both ensure the file is included only
          once. If it has already been included, PHP will not load it again.
          This is useful for avoiding redefinitions or redeclarations of
          variables, functions, or classes.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-2">
        Part 9: Moving Data to a JSON File
      </h2>
      <p>
        Now let’s take this a step further by moving the books data to a JSON
        file, a popular format for data exchange between services, and load the
        data dynamically using PHP’s JSON functions.
      </p>

      <h3 className="text-lg font-bold mt-2">9.1 What is JSON?</h3>
      <p>
        JSON (JavaScript Object Notation) is a lightweight data format often
        used to transfer data between clients (such as browsers) and servers
        over the web. It's easy for humans to read and write, and it’s also easy
        for machines to parse and generate. It's the default format used in APIs
        to exchange data between services and clients.
      </p>

      <h3 className="text-lg font-bold mt-2">
        <strong>Step 1: Create a JSON File for the Books</strong>
      </h3>
      <ol>
        <li>
          Create a new file called books.json inside your bookstore folder.
        </li>
        <li>
          Add the following JSON content to books.json:
          <SyntaxHighlighter language="json">
            {code.step9.json}
          </SyntaxHighlighter>
        </li>
      </ol>

      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          The structure here is similar to the associative arrays we used in
          PHP, but JSON uses key-value pairs enclosed in double quotes, and it's
          a more portable data format.
        </li>
      </ul>

      <h3 className="text-lg font-bold mt-2">
        Step 2: Load and Parse JSON in PHP
      </h3>

      <ol className="list-decimal list-inside mt-2">
        <li>
          Modify index.php to load the data from the JSON file instead of using
          a PHP array.
          <p>Replace the previous inclusion of books.php with this:</p>
          <SyntaxHighlighter>{code.step9.load}</SyntaxHighlighter>
        </li>
      </ol>
      <p>Explanation:</p>
      <ul className="list-disc list-inside mt-2">
        <li>
          <strong>file_get_contents():</strong> Reads the contents of the
          books.json file into a string.
        </li>
        <li>
          <strong>json_decode():</strong> Converts the JSON string into a PHP
          array. The true parameter ensures it’s decoded into an associative
          array, which we can use just like before.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-2">Part 10: Hands-On Exercises</h2>
      <p>
        Now that you've seen how to use JSON for data storage and retrieval,
        let's practice with some hands-on exercises:
      </p>
      <ol className="list-decimal list-inside mt-2">
        <li>
          <strong>Task 1: Add a New Book to books.json</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              Open the books.json file and add a new book to the list, making
              sure to include a title, description, cover, and price.
            </li>
            <li>Reload the page to see your new book displayed.</li>
          </ul>
        </li>
        <li>
          <strong>Task 2: Convert Books Data to an Object</strong>
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              Modify the json_decode() function to return the data as an object
              (instead of an associative array). Update your PHP code to access
              the book properties using the object notation ($book-&gt;title
              instead of $book['title']).
              <p>Hint: Remove the true parameter from json_decode().</p>
            </li>
          </ul>
        </li>
        <li>
          Task 3: Validate JSON Before Decoding
          <ul className="list-disc list-inside mt-2 ml-6">
            <li>
              Add a validation step before decoding the JSON. If the JSON fails
              to load or is invalid, display an error message instead of
              breaking the page.
              <p>
                Hint: Use json_last_error() to check if decoding was successful.
              </p>
            </li>
          </ul>
        </li>
      </ol>
    </motion.main>
  );
}
