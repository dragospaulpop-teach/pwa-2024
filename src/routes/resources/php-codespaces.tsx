import OrderedList from "@/components/ordered-list";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useRef } from "react";

function Codespaces() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end 25%"],
  });
  const heroBgPosition = useTransform(
    heroScrollYProgress,
    [0, 1],
    ["center 0%", "center 100%"],
  );
  const heroOpacity = useTransform(heroScrollYProgress, [0, 1], [0.25, 0]);
  return (
    <div className="min-h-0">
      <div className="flex flex-col backdrop-blur-sm">
        <main className="min-h-[100dvh]">
          <section className="relative grid min-h-[calc(100dvh-64px)] w-full place-items-center bg-background/0">
            <motion.div
              className="absolute inset-0 -mt-[64px] bg-[url('/resources/bg-codespaces.webp')] bg-cover bg-no-repeat"
              style={{
                backgroundPosition: heroBgPosition,
                opacity: heroOpacity,
                willChange: "opacity, background-position",
              }}
            />
            <div
              ref={heroRef}
              className="mx-auto grid h-full w-full place-items-center px-4 py-12 backdrop-blur-sm md:py-24 lg:py-32">
              <div className="flex flex-col items-center space-y-8 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl/none">
                    PHP &amp; MariaDB on Github Codespaces
                  </h1>
                  <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                    A small article on how to setup PHP and MariaDB on Github
                    Codespaces.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-background/50 pt-12">
            <div className="container mx-auto space-y-4">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Github Education</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Github Codespaces is a cloud-based development environment
                    that allows you to develop, run, and ship your code directly
                    from the cloud. Essentially, it's a browser-based IDE that
                    runs on top of a VM that runs Docker.
                  </p>
                  <p>
                    In order to benefit from free access to Github Codespaces,
                    you need to have a Github Education account. Luckily, Github
                    offers free access to their products to students and
                    teachers of affiliated educational institutions.
                  </p>
                  <p>Here's what you need to do:</p>
                  <OrderedList inside className="space-y-1">
                    <li className="rounded-md bg-muted p-4 text-muted-foreground">
                      Have a Github account created with your school email
                      address.
                    </li>
                    <li className="rounded-md bg-muted p-4 text-muted-foreground">
                      Enroll in Github Education. This can be done by either
                      visiting the Github Education website directly or thorugh
                      the Azure Portal.
                    </li>
                  </OrderedList>
                  <Alert variant="default">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      Check out all the other tools and services thatyou have
                      access to on the Azure Portal.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="default">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      You'll find the Github section on Azure if you navigate to{" "}
                      <Badge variant="secondary">Access student benefits</Badge>{" "}
                      on the homepage and clicking on the{" "}
                      <Badge variant="secondary">Learning resources</Badge>{" "}
                      accordion section.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="default">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      Have your student id ready when enrolling in Github
                      Education.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <a href="https://github.com/education" target="_blank">
                    <Button variant="outline">Github Education</Button>
                  </a>
                  <a href="https://portal.azure.com" target="_blank">
                    <Button variant="outline">Azure Portal</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Setup a PHP &amp; MariaDB Codespace</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Follow{" "}
                    <a
                      href="https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-php-project-for-codespaces"
                      target="_blank"
                      className="text-primary underline">
                      this tutorial
                    </a>{" "}
                    to set up a codespace for PHP and MariaDB development.
                  </p>
                  <Alert variant="default">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      Make sure to select the PHP and MariaDB dev container when
                      creating the codespace.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="default">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      If you ever DELETE your codespace, after you recreate it
                      you just run the commands form Step 4 again.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="default">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>My implementation</AlertTitle>
                    <AlertDescription>
                      I've created a repository with the complete implementation
                      of the tutorial above. Look inside the{" "}
                      <Badge variant="secondary">.devcontainer</Badge> folder to
                      see what other tweaks I've made to the configuration.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="default">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Notice about my repo</AlertTitle>
                    <AlertDescription>
                      It might be me or it might be a bug, but if you destroy
                      the codespace constructed with my config, you'll have to
                      toggle port 8080 from public to private and back again for
                      things to work after the container is built.
                    </AlertDescription>
                  </Alert>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <a
                    href="https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-php-project-for-codespaces"
                    target="_blank">
                    <Button variant="outline">Official Tutorial</Button>
                  </a>
                  <a
                    href="https://github.com/dragospaulpop-teach/vscode-remote-try-php"
                    target="_blank">
                    <Button variant="outline">My Repository</Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/resources/php-codespaces")({
  component: Codespaces,
});
