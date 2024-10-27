import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BicepsFlexedIcon } from "lucide-react";
import { useRef } from "react";

const labs = [
  {
    id: "pwa1",
    title: `PWA Lab 1`,
    description:
      "Intro to how the Internet works, servers, URLs and more. Click to begin.",
    image: `/labs/pwa-1.png`,
    difficulty: "Beginner",
    link: "/labs/pwa/lab1/intro",
    style: {
      scale: 0.95,
      y: Math.random() * 1500 + 250,
      opacity: 0.05,
    },
  },
  {
    id: "pwa2",
    title: `PWA Lab 2`,
    description:
      "Getting our hands dirty with some PHP. Starting the Bookstore project. Working with arrays and JSON. Click to begin.",
    image: `/labs/pwa-2.png`,
    difficulty: "Beginner",
    link: "/labs/pwa/lab2/intro",
    style: {
      scale: 0.95,
      y: Math.random() * 1500 + 250,
      opacity: 0.05,
    },
  },
  {
    id: "pwa2",
    title: `PWA Lab 3`,
    description:
      "Continuing the Bookstore project. Implementing filtering thorugh GET and forms. Click to begin.",
    image: `/labs/pwa-3.png`,
    difficulty: "Beginner",
    link: "/labs/pwa/lab3/intro",
    style: {
      scale: 0.95,
      y: Math.random() * 1500 + 250,
      opacity: 0.05,
    },
  },
];

function Labs() {
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
              className="absolute inset-0 -mt-[64px] bg-[url('/bg-labs.webp')] bg-cover bg-no-repeat"
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
                    Hands-on Labs and exercises
                  </h1>
                  <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                    Practice your skills with these hands-on labs and exercises.
                    You'll find step-by-step instructions on how to build apps
                    with PHP, JavaScript, React, Flutter and more.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-background/50 pt-12">
            <div className="mx-auto px-4 md:px-6">
              <div className="grid gap-4 overflow-hidden py-4 md:grid-cols-3 lg:grid-cols-4">
                {labs.map((item, i) => (
                  <LabsItem key={i} item={item} />
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
            <a href="https://unsplash.com/@trnavskauni?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Trnava University
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/gold-and-blue-trophy-on-white-table-SwCMZwrhQm8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

function LabsItem({ item }: { item: (typeof labs)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Create smoother animations with custom curves

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
      <Card className="border-1 relative rounded-md border-opacity-10 bg-card/75 shadow-md dark:bg-black/30">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>Difficulty: {item.difficulty}</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src={item.image}
            alt="Lab Exercise"
            className="mb-4 aspect-video w-full rounded-md object-cover"
          />
          <p className="line-clamp-3">{item.description}</p>
          <Link to={item.link}>
            <Button className="mt-4 border-none" variant="outline">
              <span className="text-primary/75">
                <BicepsFlexedIcon
                  className="mr-2 h-6 w-6"
                  color="currentColor"
                />
              </span>
              Start Lab
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export const Route = createLazyFileRoute("/labs/")({
  component: Labs,
});
