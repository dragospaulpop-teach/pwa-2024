import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createLazyFileRoute } from "@tanstack/react-router";
import { BookOpen, FileText, Newspaper } from "lucide-react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-[100dvh] backdrop-blur-sm">
      <main className="">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background/0  mb-4">
          <div className="container px-4 md:px-6 mx-auto">
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
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="news"
          className="w-full py-12 md:py-24 lg:py-32 bg-background/50  mb-4 shadow-md"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Latest News
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-card/75">
                  <CardHeader>
                    <CardTitle>News Article {i}</CardTitle>
                    <CardDescription>
                      Published on {new Date().toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      This is a brief preview of the news article. Click to read
                      more.
                    </p>
                    <Button className="mt-4" variant="outline">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button>View All News</Button>
            </div>
          </div>
        </section>
        <section
          id="labs"
          className="w-full py-12 md:py-24 lg:py-32 bg-background/0  mb-4"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Lab Exercises
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-card/75">
                  <CardHeader>
                    <CardTitle>Lab Exercise {i}</CardTitle>
                    <CardDescription>Difficulty: Intermediate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Practice your skills with this hands-on lab exercise.</p>
                    <Button className="mt-4" variant="outline">
                      Start Lab
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button>View All Labs</Button>
            </div>
          </div>
        </section>
        <section
          id="resources"
          className="w-full py-12 md:py-24 lg:py-32 bg-background/50  mb-4 shadow-md"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Resources
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card/75">
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <FileText className="h-12 w-12 mb-4" />
                  <p>
                    Access comprehensive documentation for various technologies
                    and frameworks.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Browse Docs
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-card/75">
                <CardHeader>
                  <CardTitle>Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <BookOpen className="h-12 w-12 mb-4" />
                  <p>
                    Watch video tutorials on web and mobile development topics.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-card/75">
                <CardHeader>
                  <CardTitle>Community Forum</CardTitle>
                </CardHeader>
                <CardContent>
                  <Newspaper className="h-12 w-12 mb-4" />
                  <p>
                    Join discussions and get help from the developer community.
                  </p>
                  <Button className="mt-4" variant="outline">
                    Join Forum
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <Button>View All Resources</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-background/25 ">
        <p className="text-xs text-muted-foreground">© 2024 Dragos-Paul Pop</p>
        <Separator orientation="vertical" className="h-4" />
        <p className="text-xs text-muted-foreground">
          Photo by{" "}
          <a href="https://unsplash.com/@chen93?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Chen
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/a-desk-with-a-computer-and-speakers-on-it-Qtu3hGinLF8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
