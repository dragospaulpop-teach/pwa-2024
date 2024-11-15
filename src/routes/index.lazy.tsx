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
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  BicepsFlexedIcon,
  BookIcon,
  FilmIcon,
  LibraryIcon,
  MonitorPlayIcon,
  NewspaperIcon,
  PocketKnifeIcon,
} from "lucide-react";
import { useRef } from "react";

interface Item {
  id: string;
  icon: string | null;
  title: string;
  description: string;
  personal: string | null;
  difficulty: string | null;
  date: Date | null;
  url: string;
  target: string;
  btnIcon: React.ReactNode;
  label: string;
  style: {
    scale: number;
    y: number;
    opacity: number;
  };
}

interface Items {
  [type: string]: Item[];
}

const items: Items = {
  news: [
    {
      id: "theo-laravel",
      icon: null,
      title: "Laravel gets beginner friendly improvements",
      description:
        "Theo talks about how the guys behind Laravel adapted the framework to make it more beginner friendly after they saw him strugling online.",
      personal: "You should subscribe to Theo.",
      difficulty: null,
      date: new Date("2024-10-27"),
      url: "https://www.youtube.com/watch?v=3dgUiF2a3pM",
      btnIcon: (
        <span className="mr-2 text-destructive/75">
          <MonitorPlayIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Watch video",
      target: "_blank",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "diploma",
      icon: null,
      title: "Diploma mentorship program",
      description: "Some info on the mentorship program for the diploma exam.",
      personal: "Read this very carefully.",
      difficulty: null,
      date: new Date("2024-11-13"),
      url: "/news/diploma",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BookIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Read article",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "windsurf",
      icon: null,
      title: "New AI code editor from the guys behind Codeium",
      description:
        "A new AI code editor called Windsurf is out. It's a built by the guys behind Codeium (a free Copilot alternative). I prefer using Cursor (which is a paid tool), but this is a nice alternative. Watch Theo play with this in the video below.",
      personal: "Get familiar with AI tools.",
      difficulty: null,
      date: new Date("2024-11-15"),
      url: "https://www.youtube.com/watch?v=FqbMXtxDZYc",
      target: "_blank",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BookIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Read article",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
  ],
  labs: [
    {
      id: "pwa-lab1",
      icon: null,
      title: "PWA Lab 1",
      description: "Intro to how the Internet works, servers, URLs and more.",
      personal: null,
      difficulty: "Beginner",
      date: null,
      url: "/labs/pwa/lab1/intro",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BicepsFlexedIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Start Lab",
      target: "_self",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "pwa-lab2",
      icon: null,
      title: "PWA Lab 2",
      description:
        "Getting our hands dirty with some PHP. Starting the Bookstore project. Working with arrays and JSON.",
      personal: null,
      difficulty: "Beginner",
      date: null,
      url: "/labs/pwa/lab2/intro",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BicepsFlexedIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Start Lab",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "pwa-lab3",
      icon: null,
      title: "PWA Lab 3",
      description:
        "Continuing the Bookstore project. Implementing filtering thorugh GET and forms.",
      personal: null,
      difficulty: "Beginner",
      date: null,
      url: "/labs/pwa/lab3/intro",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BicepsFlexedIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Start Lab",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "pwa-lab4",
      icon: null,
      title: "PWA Lab 4",
      description:
        "Tackling authentication and authorization. Implementing sessions and cookies.",
      personal: null,
      difficulty: "Beginner",
      date: null,
      url: "/labs/pwa/lab4/intro",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BicepsFlexedIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Start Lab",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "pwa-lab5",
      icon: null,
      title: "PWA Lab 5",
      description:
        "Data persistancve with MySQL. Relational theory recap and moving our books data to a database.",
      personal: null,
      difficulty: "Beginner",
      date: null,
      url: "/labs/pwa/lab5/intro",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BicepsFlexedIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Start Lab",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "pwa-lab-errata-1",
      icon: null,
      title: "PWA Lab Errata 1",
      description:
        "Whoops. File upload silently fails when we update a book cover.",
      personal: null,
      difficulty: "Beginner",
      date: null,
      url: "/labs/pwa/labErrata1/intro",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <BicepsFlexedIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Start Lab",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
  ],
  resources: [
    {
      id: "docs",
      icon: "file-text",
      title: "Documentation",
      description:
        "Access comprehensive documentation for various technologies and frameworks.",
      personal: null,
      difficulty: null,
      date: null,
      url: "/resources#docs",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <LibraryIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Browse Docs",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "videos",
      icon: "film",
      title: "Video Tutorials",
      description:
        "Watch video tutorials on web and mobile development topics.",
      personal: null,
      difficulty: null,
      date: null,
      url: "/resources#videos",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <FilmIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Watch videos",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "misc",
      icon: "newspaper",
      title: "Miscellaneous",
      description:
        "Things that I personally recommend reading or watching. I'll just throw my favorite creators here.",
      personal: null,
      difficulty: null,
      date: null,
      url: "/resources#misc",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <NewspaperIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Browse misc",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
    {
      id: "how-tos",
      icon: "pocket-knife",
      title: "How-to Guides",
      description: "Step-by-step guides for various tasks.",
      personal: null,
      difficulty: null,
      date: null,
      url: "/resources#how-tos",
      target: "_self",
      btnIcon: (
        <span className="mr-2 text-primary/75">
          <PocketKnifeIcon className="h-6 w-6" color="currentColor" />
        </span>
      ),
      label: "Browse how-tos",
      style: {
        scale: 0.95,
        y: Math.random() * 1500 + 250,
        opacity: 0.05,
      },
    },
  ],
};

function ItemCard({ item }: { item: Item }) {
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
      <Card className="flex h-full flex-col bg-white/75 dark:bg-black/75">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>
            {item.date &&
              item.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            {item.difficulty && (
              <span className="text-sm text-muted-foreground">
                Difficulty: {item.difficulty}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p>{item.description}</p>
          {item.personal && (
            <p className="mt-4 text-sm italic text-primary">{item.personal}</p>
          )}
          <div className="flex-1"></div>
        </CardContent>
        <CardFooter>
          <Button className="" variant="outline">
            <Link
              href={item.url}
              target={item.target}
              className="flex items-center">
              {item.btnIcon}
              {item.label}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

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
                {items.news.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
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
                {items.labs.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
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
                {items.resources.map((item) => (
                  <ItemCard key={item.id} item={item} />
                ))}
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

export const Route = createLazyFileRoute("/")({
  component: Index,
});
