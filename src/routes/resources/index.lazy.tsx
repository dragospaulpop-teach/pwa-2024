import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  BookIcon,
  FilmIcon,
  LibraryIcon,
  MonitorPlayIcon,
  PackageOpenIcon,
  PocketKnifeIcon,
} from "lucide-react";
import { useRef } from "react";

interface Resource {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  target: string;
  type: string;
  label: string;
  style: {
    scale: number;
    y: number;
    opacity: number;
  };
}

interface Resources {
  [type: string]: Resource[];
}

interface ResourceItemProps {
  item: Resource;
}

const resources: Resources = {
  docs: [
    {
      id: "php-manual",
      title: "PHP Manual",
      description:
        "The official PHP manual, a comprehensive guide to the PHP programming language. Remember: the ofiicial docs are your best friend.",
      image: "/resources/php-manual.png",
      link: "https://www.php.net/manual/en/",
      target: "_blank",
      type: "docs",
      label: "Go to resource",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "roadmap.sh",
      title: "Roadmap.sh",
      description:
        "Great resource to help you plan your learning path as a developer and track your progress. You'll find loads of roadmaps here, I linked to the Backend one for obvious reasons. Pick any and start learning. Check them all out and build your knowledge.",
      image: "/resources/roadmaps.png",
      link: "https://roadmap.sh/backend",
      target: "_blank",
      type: "docs",
      label: "Go to resource",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
  ],
  videos: [
    {
      id: "php-for-beginners",
      title: "PHP for Beginners",
      description:
        "A comprehensive guide to PHP form Jeffery Way, the creator of Laracsts. Jeff is one of the best teachers I have evcer had the pleasure of learning from. This is pretty much what our PWA course should be. Must watch.",
      image: "/resources/jeff-php-for-beginners.webp",
      link: "https://www.youtube.com/watch?v=fw5ObX8P6as&t=448s",
      target: "_blank",
      type: "video",
      label: "Watch video",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "30-days-to-learn-laravel",
      title: "30 Days to Learn Laravel",
      description:
        "A superb introductry tutorial to Laravel by Jeffrey Way. This is a great way to learn the basics of Laravel. It designed for completed beginners and it will teach you not only Laravel but web development in general. Do watch this one.",
      image: "/resources/laracasts-30-days-to-learn-laravel.webp",
      link: "https://www.youtube.com/watch?v=SqTdHCTWqks",
      target: "_blank",
      type: "video",
      label: "Watch video",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
  ],
  howTos: [
    {
      id: "php-codespaces",
      title: "PHP and MariaDB on Github Codespaces",
      description:
        "A small article on how to setup PHP and MariaDB on Github Codespaces.",
      image: "/resources/codespaces.jpg",
      link: "/resources/php-codespaces",
      target: "_self",
      type: "article",
      label: "Read article",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
  ],
  misc: [
    {
      id: "php-annotated",
      title: "PHP Annotated",
      description:
        "A PHP focused channel you should subscribe to. He's got news, explainers, a podcast and more.",
      image: "/resources/php-annotated.webp",
      link: "https://www.youtube.com/@phpannotated/featured",
      target: "_blank",
      type: "video",
      label: "Watch video",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "apache-vs-nginx",
      title: "Apache vs Nginx extensive benchmark by Anton Putra",
      description:
        "A great benchmark comparing Apache and Nginx performance by Anton Putra. I use ngnix as a reverse proxy and I must say I was not expecting some of these results. Subscribe to Anton for more great benchmarks.",
      image: "/resources/nginx-apache-anton-putra.webp",
      link: "https://www.youtube.com/watch?v=UGp4LmocE7o",
      target: "_blank",
      type: "video",
      label: "Watch video",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "the-first-browser-war",
      title: "The First Browser War",
      description:
        "A comic I made with AI image generation about the first browser war.",
      image: "/resources/the-first-browser-war/bg.jpg",
      link: "/resources/the-first-browser-war",
      target: "_self",
      type: "article",
      label: "Read comic",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
  ],
};

function Resources() {
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
              className="absolute inset-0 -mt-[64px] bg-[url('/bg-resources.webp')] bg-cover bg-no-repeat"
              style={{
                backgroundPosition: heroBgPosition,
                opacity: heroOpacity,
                willChange: "opacity, background-position",
              }}
            />
            <div
              ref={heroRef}
              className="mx-auto grid h-full w-full place-items-center px-4 py-12 backdrop-blur-sm md:py-24 lg:py-32">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-wide sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Library of resources
                  </h1>
                  <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                    A collection of resources to help you learn and grow as a
                    developer. You'll find tutorials here, blog articles,
                    educational videos and more.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full border bg-background/50 pt-12">
            <div className="mx-auto px-4 md:px-6">
              <h1 className="flex items-center text-2xl font-bold" id="docs">
                <LibraryIcon className="mr-2 h-6 w-6" />
                Docs
              </h1>
              <div className="grid gap-4 overflow-hidden py-4 md:grid-cols-3 lg:grid-cols-4">
                {resources.docs.map((item) => (
                  <ResourcesItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
          <section
            className="relative w-full border bg-background/50 pt-12"
            id="videos">
            <div className="mx-auto px-4 md:px-6">
              <h1 className="flex items-center text-2xl font-bold">
                <FilmIcon className="mr-2 h-6 w-6" />
                Videos
              </h1>
              <div className="grid gap-4 overflow-hidden py-4 md:grid-cols-3 lg:grid-cols-4">
                {resources.videos.map((item) => (
                  <ResourcesItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
          <section
            className="relative w-full border bg-background/50 pt-12"
            id="how-tos">
            <div className="mx-auto px-4 md:px-6">
              <h1 className="flex items-center text-2xl font-bold">
                <PocketKnifeIcon className="mr-2 h-6 w-6" />
                How Tos
              </h1>
              <div className="grid gap-4 overflow-hidden py-4 md:grid-cols-3 lg:grid-cols-4">
                {resources.howTos.map((item) => (
                  <ResourcesItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
          <section
            className="relative w-full border bg-background/50 pt-12"
            id="misc">
            <div className="mx-auto px-4 md:px-6">
              <h1 className="flex items-center text-2xl font-bold">
                <PackageOpenIcon className="mr-2 h-6 w-6" />
                Miscellaneous
              </h1>
              <div className="grid gap-4 overflow-hidden py-4 md:grid-cols-3 lg:grid-cols-4">
                {resources.misc.map((item) => (
                  <ResourcesItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 bg-background/25 px-4 py-6 sm:flex-row md:px-6">
          <p className="text-xs text-muted-foreground">
            © 2024 Dragos-Paul Pop
          </p>
          <Separator orientation="vertical" className="h-4" />
          <p className="text-xs text-muted-foreground">
            Photo by{" "}
            <a
              href="https://unsplash.com/@vishwanth07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank">
              Vishwanth Pindiboina
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/photos/a-large-display-of-books-lOPp5d6Wo3M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank">
              Unsplash
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

function ResourcesItem({ item }: ResourceItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [item.style.scale, item.style.scale, 1],
  );
  const scale = useSpring(scaleValue, {
    stiffness: 100,
    damping: 30,
    mass: 2,
  });

  const yValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [item.style.y, item.style.y, 0],
  );
  const y = useSpring(yValue, {
    stiffness: 100,
    damping: 30,
    mass: 2,
  });

  const opacityValue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [item.style.opacity, item.style.opacity, 1],
  );
  const opacity = useSpring(opacityValue, {
    stiffness: 100,
    damping: 30,
    mass: 2,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        y,
        opacity,
        willChange: "transform, opacity",
      }}
      initial={{
        scale: item.style.scale,
        y: item.style.y,
        opacity: item.style.opacity,
      }}>
      <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 shadow-md dark:bg-black/30">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col text-sm text-muted-foreground">
          <img
            src={item.image}
            alt="video thumbnail"
            className="mb-4 aspect-video w-full rounded-md object-cover"
          />
          <p>{item.description}</p>
          <div className="flex-1"></div>
        </CardContent>
        <CardFooter>
          <Link to={item.link} target={item.target} className="w-full">
            <Button variant="outline" className="w-full">
              {item.type === "video" && (
                <span className="text-destructive/75">
                  <MonitorPlayIcon
                    className="mr-2 h-6 w-6"
                    color="currentColor"
                  />
                </span>
              )}
              {item.type === "article" && (
                <span className="text-primary/75">
                  <BookIcon className="mr-2 h-6 w-6" color="currentColor" />
                </span>
              )}
              {item.type === "docs" && (
                <span className="text-chart-2/75">
                  <LibraryIcon className="mr-2 h-6 w-6" color="currentColor" />
                </span>
              )}
              {item.label}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export const Route = createLazyFileRoute("/resources/")({
  component: Resources,
});
