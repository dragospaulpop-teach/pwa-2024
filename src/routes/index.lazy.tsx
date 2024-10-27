import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BicepsFlexedIcon,
  BookOpen,
  FileText,
  FilmIcon,
  LibraryIcon,
  MonitorPlayIcon,
  Newspaper,
  PackageOpenIcon,
  PocketKnifeIcon,
} from "lucide-react";
import { useRef } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);
  const labsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const bgPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["center 25%", "center 100%"],
  );

  const { scrollYProgress: heroScrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end 25%"],
  });

  const { scrollYProgress: newsScrollYProgress } = useScroll({
    target: newsRef,
    offset: ["start end", "end 25%"],
  });
  const { scrollYProgress: labsScrollYProgress } = useScroll({
    target: labsRef,
    offset: ["start end", "end 25%"],
  });
  const { scrollYProgress: resourcesScrollYProgress } = useScroll({
    target: resourcesRef,
    offset: ["start end", "end 25%"],
  });

  const heroOpacity = useTransform(heroScrollYProgress, [0, 1], [0.25, 0]);
  const newsOpacity = useTransform(newsScrollYProgress, [0, 1], [0.25, 0]);
  const labsOpacity = useTransform(labsScrollYProgress, [0, 1], [0.25, 0]);
  const resourcesOpacity = useTransform(
    resourcesScrollYProgress,
    [0, 1],
    [0.25, 0],
  );
  return (
    <div className="min-h-0">
      <div className="flex flex-col backdrop-blur-sm">
        <main className="-mt-[64px] min-h-[100dvh]">
          <section
            className="relative m-0 grid min-h-[100dvh] place-items-center bg-background/0"
            ref={heroRef}>
            <motion.div
              className="absolute inset-0 z-[-1] block min-h-0 bg-[url('/bg.webp')] bg-[length:200%] bg-no-repeat"
              style={{
                backgroundPosition: bgPosition,
                opacity: heroOpacity,
                willChange: "opacity, background-position",
              }}></motion.div>
            <div className="mx-auto grid h-full w-full place-items-center px-4 py-12 backdrop-blur-sm md:px-6 md:py-24 lg:py-32 xl:py-48">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Web & Mobile Development
                  </h1>
                  <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                    Stay updated with the latest news, practice with hands-on
                    labs, and access valuable resources for your development
                    journey.
                  </p>
                </div>
                {/* <div className="space-x-4">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div> */}
              </div>
            </div>
          </section>
          <section
            className="relative m-0 grid min-h-[100dvh] place-items-center bg-background/0"
            ref={newsRef}>
            <motion.div
              className="absolute inset-0 z-[-1] block min-h-0 bg-[url('/bg-news.webp')] bg-[length:200%] bg-no-repeat"
              style={{
                backgroundPosition: bgPosition,
                opacity: newsOpacity,
                willChange: "opacity, background-position",
              }}></motion.div>
            <div className="mx-auto grid h-full w-full place-items-center px-4 py-12 backdrop-blur-sm md:px-6 md:py-24 lg:py-32">
              <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Latest News
              </h2>
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>
                      Laravel gets beginner friendly improvements
                    </CardTitle>
                    <CardDescription>
                      {new Date("2024-10-27").toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Theo talks about how the guys behind Laravel adapted the
                      framework to make it more beginner friendly after they saw
                      him strugling online.
                    </p>
                    <p className="mt-4 text-sm italic text-primary">
                      You should subscribe to Theo.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="" variant="outline">
                      <a
                        href="https://www.youtube.com/watch?v=3dgUiF2a3pM"
                        target="_blank"
                        className="flex items-center">
                        <span className="text-destructive/75">
                          <MonitorPlayIcon
                            className="mr-2 h-6 w-6"
                            color="currentColor"
                          />
                        </span>
                        Watch the video
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Link to="/news">
                  <Button>View All News</Button>
                </Link>
              </div>
            </div>
          </section>
          <section
            className="relative m-0 grid min-h-[100dvh] place-items-center bg-background/0"
            ref={labsRef}>
            <motion.div
              className="absolute inset-0 z-[-1] block min-h-0 bg-[url('/bg-labs.webp')] bg-[length:200%] bg-no-repeat"
              style={{
                backgroundPosition: bgPosition,
                opacity: labsOpacity,
                willChange: "opacity, background-position",
              }}></motion.div>
            <div className="mx-auto grid h-full w-full place-items-center px-4 py-12 backdrop-blur-sm md:px-6 md:py-24 lg:py-32">
              <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lab Exercises
              </h2>
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>PWA Lab 1</CardTitle>
                    <CardDescription>Difficulty: Begginer</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Intro to how the Internet works, servers, URLs and more.
                      Click to begin.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="/labs/$course/$lab/$step"
                      params={{ course: "pwa", lab: "lab1", step: "intro" }}>
                      <Button variant="outline">
                        <span className="text-primary/75">
                          <BicepsFlexedIcon
                            className="mr-2 h-6 w-6"
                            color="currentColor"
                          />
                        </span>
                        Start Lab
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>PWA Lab 2</CardTitle>
                    <CardDescription>Difficulty: Begginer</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Getting our hands dirty with some PHP. Starting the
                      Bookstore project. Working with arrays and JSON. Click to
                      begin.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="/labs/$course/$lab/$step"
                      params={{ course: "pwa", lab: "lab2", step: "intro" }}>
                      <Button variant="outline">
                        <span className="text-primary/75">
                          <BicepsFlexedIcon
                            className="mr-2 h-6 w-6"
                            color="currentColor"
                          />
                        </span>
                        Start Lab
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>PWA Lab3</CardTitle>
                    <CardDescription>Difficulty: Begginer</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>
                      Continuing the Bookstore project. Implementing filtering
                      thorugh GET and forms. Click to begin.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="/labs/$course/$lab/$step"
                      params={{ course: "pwa", lab: "lab3", step: "intro" }}>
                      <Button variant="outline">
                        <span className="text-primary/75">
                          <BicepsFlexedIcon
                            className="mr-2 h-6 w-6"
                            color="currentColor"
                          />
                        </span>
                        Start Lab
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Link to="/labs">
                  <Button>View All Labs</Button>
                </Link>
              </div>
            </div>
          </section>
          <section
            className="relative m-0 grid min-h-[100dvh] place-items-center bg-background/0"
            ref={resourcesRef}>
            <motion.div
              className="absolute inset-0 z-[-1] block min-h-0 bg-[url('/bg-resources.webp')] bg-[length:200%] bg-no-repeat"
              style={{
                backgroundPosition: bgPosition,
                opacity: resourcesOpacity,
                willChange: "opacity, background-position",
              }}></motion.div>
            <div className="mx-auto grid h-full w-full place-items-center px-4 py-12 backdrop-blur-sm md:px-6 md:py-24 lg:py-32">
              <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Resources
              </h2>
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>Documentation</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <FileText className="mb-4 h-12 w-12" />
                    <p>
                      Access comprehensive documentation for various
                      technologies and frameworks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/resources" hash="docs">
                      <Button variant="outline">
                        <span className="text-chart-2/75">
                          <LibraryIcon className="mr-2 h-6 w-6" />
                        </span>
                        Browse Docs
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>Video Tutorials</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <BookOpen className="mb-4 h-12 w-12" />
                    <p>
                      Watch video tutorials on web and mobile development
                      topics.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/resources" hash="videos">
                      <Button variant="outline">
                        <span className="text-destructive/75">
                          <FilmIcon className="mr-2 h-6 w-6" />
                        </span>
                        Watch videos
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>Miscellaneous</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <Newspaper className="mb-4 h-12 w-12" />
                    <p>
                      Things that I personally recommend reading or watching.
                      I'll just throw my favorite creators here.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/resources" hash="misc">
                      <Button variant="outline">
                        <span className="text-chart-4/75">
                          <PackageOpenIcon className="mr-2 h-6 w-6" />
                        </span>
                        Browse Misc
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col bg-white/75 dark:bg-black/75">
                  <CardHeader>
                    <CardTitle>How Tos</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <Newspaper className="mb-4 h-12 w-12" />
                    <p>
                      Find helpful how-to guides and tutorials for various
                      technologies and frameworks.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link to="/resources" hash="how-tos">
                      <Button variant="outline">
                        <span className="text-primary/75">
                          <PocketKnifeIcon className="mr-2 h-6 w-6" />
                        </span>
                        Browse How Tos
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Link to="/resources">
                  <Button>View All Resources</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="fixed bottom-0 flex w-full shrink-0 flex-col items-center gap-2 bg-background/25 px-4 py-6 sm:flex-row md:px-6">
          <p className="text-xs text-muted-foreground">
            © 2024 Dragos-Paul Pop
          </p>
          <Separator orientation="vertical" className="h-4" />
          <p className="text-center text-xs text-muted-foreground">
            Photos by{" "}
            <a
              href="https://unsplash.com/@chen93?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank">
              Chen
            </a>
            {", "}
            <a
              href="https://unsplash.com/@luiskcortes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank">
              Luis Cortés
            </a>
            {", "}
            <a
              href="https://unsplash.com/@trnavskauni?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank">
              Trnava University
            </a>
            {", and "}
            <a
              href="https://unsplash.com/@vishwanth07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank">
              Vishwanth Pindiboina
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/a-desk-with-a-computer-and-speakers-on-it-Qtu3hGinLF8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank">
              Unsplash
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
