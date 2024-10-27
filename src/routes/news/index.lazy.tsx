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
import { MonitorPlayIcon } from "lucide-react";
import { useRef } from "react";

const news = [
  {
    id: 1,
    title: "Laravel gets beginner friendly improvements",
    description: `Theo talks about how the guys behind Laravel adapted the
                      framework to make it more beginner friendly after they saw
                      him strugling online.`,
    image: "/news/theo-on-laravel.webp",
    published: new Date("2024-10-27").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    link: "https://www.youtube.com/watch?v=3dgUiF2a3pM",
    type: "video",
    label: "Watch video",
    style: {
      scale: 0.95,
      y: Math.random() * 1500 + 250,
      opacity: 0.05,
    },
  },
];

function News() {
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
  const heroOpacity = useTransform(heroScrollYProgress, [0, 1], [0.5, 0]);

  return (
    <div className="min-h-0">
      <div className="flex flex-col backdrop-blur-sm">
        <main className="min-h-[100dvh]">
          <section className="relative grid min-h-[calc(100dvh-64px)] w-full place-items-center bg-background/0">
            <motion.div
              className="absolute inset-0 -mt-[64px] bg-[url('/bg-news.webp')] bg-cover bg-no-repeat"
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
                    Technology news and updates
                  </h1>
                  <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                    Stay up to date with the latest news in the tech industry.
                    You'll find my favorite tech channels here. I'll also post
                    news regarding our activities.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-background/50 py-12">
            <div className="mx-auto px-4 md:px-6">
              <div className="grid gap-4 overflow-hidden py-4 md:grid-cols-3 lg:grid-cols-4">
                {news.map((item) => (
                  <NewsItem key={item.id} item={item} />
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
            Photo by <a href="https://unsplash.com/@luiskcortes">Luis Cortés</a>{" "}
            on <a href="https://unsplash.com/photos/DRL63jJ0L2Y">Unsplash</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

function NewsItem({ item }: { item: (typeof news)[number] }) {
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
      <Card className="border-1 relative flex h-full flex-col rounded-2xl border-opacity-10 bg-card/75 shadow-md dark:bg-black/30">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.published}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col text-sm text-muted-foreground">
          <img
            src={item.image}
            alt="News Article"
            className="mb-4 aspect-video w-full rounded-md object-cover"
          />
          <p>{item.description}</p>
          <div className="flex-1"></div>
        </CardContent>
        <CardFooter>
          <Link to={item.link} target="_blank" className="w-full">
            <Button variant="outline" className="w-full">
              <span className="text-destructive/75">
                {item.type === "video" && (
                  <MonitorPlayIcon
                    className="mr-2 h-6 w-6"
                    color="currentColor"
                  />
                )}
              </span>
              {item.label}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export const Route = createLazyFileRoute("/news/")({
  component: News,
});
