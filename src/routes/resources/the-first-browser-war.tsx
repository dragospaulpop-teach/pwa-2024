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
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { MonitorPlayIcon } from "lucide-react";
import { useRef } from "react";

function Article() {
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
              className="absolute inset-0 -mt-[64px] bg-[url('/resources/the-first-browser-war/bg.jpg')] bg-cover bg-no-repeat"
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
                    The First Browser War
                  </h1>
                  <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                    Or how ruthless Bill Gates was.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-background/50 pt-12">
            <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md dark:bg-black/30">
                <CardHeader>
                  <CardTitle>
                    The Internet and Web's Inception at CERN
                  </CardTitle>
                  <CardDescription>
                    Sr. Tim Berners Lee (not actual photo)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/tim-berners-lee.png"
                    alt="Tim Berners-Lee inventing the Web as seen by AI"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    The roots of the internet date back to the late 1960s with
                    ARPANET, but the World Wide Web as we know it was born at
                    CERN in 1989, thanks to Tim Berners-Lee. He developed the
                    foundational technologies of the web: HTML, HTTP, and URLs,
                    setting the stage for a true digital revolution.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md dark:bg-black/30">
                <CardHeader>
                  <CardTitle>
                    The Rise of Netscape and Mosaic's Legacy
                  </CardTitle>
                  <CardDescription>
                    Just a bunch of kids casually inventing the future
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/mosaic-and-netscape.png"
                    alt="Mosaic being invented by college students"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    In the early 1990s, a group from the University of Illinois
                    Urbana-Champaign, creators of the Mosaic browser, embarked
                    on a new venture. Marc Andreessen, a key member, co-founded
                    Netscape Communications. Netscape Navigator, heavily
                    influenced by Mosaic, quickly rose to prominence for its
                    user-friendly interface and innovative features. Similarly,
                    Microsoft’s entry into the browser market with Internet
                    Explorer also stemmed from Mosaic's technology, through a
                    licensing deal with Spyglass.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md dark:bg-black/30">
                <CardHeader>
                  <CardTitle>
                    Microsoft's Foray and the Intensification of the Browser
                    Wars
                  </CardTitle>
                  <CardDescription>
                    Bill Gates inventing the plague that was IE
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/gates-internet-explorer.png"
                    alt="Tim Berners-Lee inventing the Web as seen by AI"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    Microsoft, initially underestimating the internet's
                    potential, responded to Netscape's success by developing
                    Internet Explorer. Integrated into Windows, IE gained a
                    massive distribution advantage. The ensuing competition,
                    known as the browser wars, was not just a business rivalry
                    but a clash of ideologies in the digital age.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md dark:bg-black/30">
                <CardHeader>
                  <CardTitle>
                    Gates’ Directive and the Cutthroat Tactics; The Dot-Com
                    Bubble's Role
                  </CardTitle>
                  <CardDescription>
                    Ruthless Bill Gates is ruthless
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/destruction-of-netscape-by-microsoft.png"
                    alt="Tim Berners-Lee inventing the Web as seen by AI"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    Bill Gates, recognizing the threat posed by Netscape,
                    reportedly directed Microsoft to focus on neutralizing this
                    competitor by any means. This aggressive stance was
                    emblematic of Microsoft's determination to dominate the web
                    browser market, leveraging its OS monopoly.
                  </p>
                  <p>
                    This epochal battle unfolded during the dot-com bubble, a
                    period of speculative investment and rapid growth in
                    internet-based companies. This economic frenzy created an
                    environment where stakes were incredibly high, and the
                    browser became the gateway to digital fortunes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md dark:bg-black/30">
                <CardHeader>
                  <CardTitle>Antitrust Lawsuit Against Microsoft</CardTitle>
                  <CardDescription>
                    Just think how much better the world would be if they
                    actually did do this and broke up Microsoft...
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/antitrust-lawsuit.png"
                    alt="Tim Berners-Lee inventing the Web as seen by AI"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    Microsoft's tactics, especially the bundling of IE with
                    Windows, led to a high-profile antitrust lawsuit. Accused of
                    monopolistic practices, Microsoft faced intense legal and
                    public scrutiny. The trial, featuring Gates' testimony, was
                    a landmark in the tech industry, highlighting the complex
                    interplay of technology, business ethics, and regulation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md dark:bg-black/30">
                <CardHeader>
                  <CardTitle>Stagnation and the Aftermath</CardTitle>
                  <CardDescription>
                    Microsoft almost killed the web. 7 years of stagnation
                    followed.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/stagnation.png"
                    alt="Tim Berners-Lee inventing the Web as seen by AI"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    Post the lawsuit and Netscape's decline, the web experienced
                    a stagnation phase. With IE's dominance, there was little
                    innovation, a period often referred to as a "dark age" for
                    the web, coinciding with the burst of the dot-com bubble.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md dark:bg-black/30">
                <CardHeader>
                  <CardTitle>The Legacy and Renewed Innovation</CardTitle>
                  <CardDescription>
                    Google to the rescue, but remember: don't be a fanboy!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/new-hope-chrome.png"
                    alt="Tim Berners-Lee inventing the Web as seen by AI"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    The browser wars and their aftermath had far-reaching
                    implications. They spurred advancements in web technologies,
                    albeit interspersed with periods of stagnation and monopoly.
                    The eventual resurgence of competition, with players like
                    Mozilla Firefox (an evolution of Netscape) and Google
                    Chrome, revitalized the browser landscape, ushering in an
                    era of rapid innovation and diverse web experiences.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-1 relative flex h-full flex-col rounded-md border-opacity-10 bg-card/75 text-left shadow-md md:col-span-2 dark:bg-black/30">
                <CardHeader>
                  <CardTitle>Would you like to know more?</CardTitle>
                  <CardDescription>
                    Download: The true story of the Internet
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-2 text-sm text-muted-foreground">
                  <img
                    src="/resources/the-first-browser-war/download.png"
                    alt="Tim Berners-Lee inventing the Web as seen by AI"
                    className="mx-auto rounded-md"
                  />
                  <p>
                    This is a great documentary about that period. The first
                    episod is about the first browser war. Watch it, it's really
                    good!
                  </p>
                  <p>
                    Try to not get distracted by the way the presenter moves
                    when he speaks.
                  </p>
                  <div className="flex-1"></div>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://www.youtube.com/watch?v=Gh6N1uPjGno"
                    target="_blank"
                    className="w-full">
                    <Button variant="outline" className="w-full">
                      <span className="text-destructive/75">
                        <MonitorPlayIcon className="mr-2 h-6 w-6" />
                      </span>
                      Watch it on YouTube
                    </Button>
                  </a>
                </CardFooter>
              </Card>
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
              href="https://maybe.works/blogs/browser-wars-the-history-of-browsers-and-chromium-victory"
              target="_blank">
              maybe.works
            </a>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/resources/the-first-browser-war")({
  component: Article,
});
