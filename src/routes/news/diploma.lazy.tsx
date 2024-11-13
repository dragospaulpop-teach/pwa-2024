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
import { Separator } from "@/components/ui/separator";
import UnorderedList from "@/components/unordered-list";

import { createLazyFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  AlertCircleIcon,
  CodeIcon,
  CogIcon,
  DatabaseIcon,
  FileTextIcon,
  LinkedinIcon,
  ListIcon,
  MonitorIcon,
  MousePointer2Icon,
  PaletteIcon,
  SearchIcon,
  ServerIcon,
  SparklesIcon,
  TestTubeIcon,
  UsersIcon,
} from "lucide-react";
import { useRef } from "react";

export const Route = createLazyFileRoute("/news/diploma")({
  component: DiplomaPage,
});

function DiplomaPage() {
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
              className="absolute inset-0 -mt-[64px] bg-[url('/news/bg-diploma.webp')] bg-cover bg-no-repeat"
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
                    Diploma mentorship
                  </h1>
                  <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                    Just a few words about myself, my mentorship program and how
                    things are going to play out.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full bg-background/50 pt-12">
            <div className="container mx-auto space-y-4">
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Who I am</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    I'm Dragos-Paul Pop
                    <a
                      href="https://www.linkedin.com/in/dragospaulpop/"
                      target="_blank">
                      <Badge variant="link">
                        <LinkedinIcon className="h-3 w-3" />
                      </Badge>
                    </a>
                    , a full stack developer with a passion for building things
                    that help increase productivity or showcase interesting
                    data.
                  </p>
                  <p>
                    I've been working as a web developer since 2006, and as a
                    teacher since 2007 (with a break between 2015 and 2022).
                  </p>
                  <p>
                    My experience lies in the web development space, but I've
                    also been working with{" "}
                    <a href="https://flutter.dev/" target="_blank">
                      <Badge variant="link">Flutter</Badge>
                    </a>{" "}
                    for a little over a year now. I've also played with{" "}
                    <a href="https://reactnative.dev/" target="_blank">
                      <Badge variant="link">React Native</Badge>
                    </a>
                    .
                  </p>
                  <p>
                    Most of my projects are{" "}
                    <a href="https://vuejs.org/" target="_blank">
                      <Badge variant="link">Vue.js (v2)</Badge>
                    </a>{" "}
                    and{" "}
                    <a href="https://feathersjs.com/" target="_blank">
                      <Badge variant="link">Feathers.js (v4)</Badge>
                    </a>{" "}
                    based, but I've started my web dev carrier using{" "}
                    <a href="https://www.php.net/" target="_blank">
                      <Badge variant="link">PHP</Badge>
                    </a>
                    . I still maintain a few{" "}
                    <a href="https://laravel.com/" target="_blank">
                      <Badge variant="link">Laravel</Badge>
                    </a>{" "}
                    projects.
                  </p>
                  <p>
                    I'm a one-man team, so that means I do all of the following:
                  </p>
                  <UnorderedList inside className="list-none">
                    <li>
                      <SearchIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        Business Analysis:{" "}
                      </strong>
                      Talking to the client to understand their needs and
                      translating them into technical requirements. I usually
                      write everything in{" "}
                      <a href="https://notion.so" target="_blank">
                        <Badge variant="link">Notion</Badge>
                      </a>
                      .
                    </li>
                    <li>
                      <ListIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        Project Management:{" "}
                      </strong>
                      Managing the project from start to finish, including
                      planning, scheduling, and monitoring. I like using{" "}
                      <a href="https://notion.so" target="_blank">
                        <Badge variant="link">Notion</Badge>
                      </a>{" "}
                      for this, although I've used{" "}
                      <a
                        href="https://www.atlassian.com/software/jira"
                        target="_blank">
                        <Badge variant="link">Jira</Badge>
                      </a>{" "}
                      in the past. I also use{" "}
                      <a href="https://asana.com/" target="_blank">
                        <Badge variant="link">Asana</Badge>
                      </a>
                      .
                    </li>
                    <li>
                      <CogIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        System Architecture:{" "}
                      </strong>
                      Designing the system architecture, including the database,
                      APIs, and frontend. A great tool for this is{" "}
                      <a href="https://www.eraser.io/" target="_blank">
                        <Badge variant="link">Eraser</Badge>
                      </a>{" "}
                      because it offers great diagram features.
                    </li>
                    <li>
                      <ServerIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        DevOps & SysOps:{" "}
                      </strong>
                      Setting up the development and production environments,
                      including the setup and management of the necessary
                      infrastructure. I use{" "}
                      <a href="https://www.docker.com/" target="_blank">
                        <Badge variant="link">Docker</Badge>
                      </a>{" "}
                      for this. I know my way around a Linux server and I'm
                      comfortable using the command line. I use{" "}
                      <a href="https://nginx.org/" target="_blank">
                        <Badge variant="link">nginx</Badge>
                      </a>{" "}
                      for reverse proxying and serving static files. I also use{" "}
                      <a href="https://pm2.keymetrics.io/" target="_blank">
                        <Badge variant="link">PM2</Badge>
                      </a>{" "}
                      to keep my Node.js services running.
                    </li>
                    <li>
                      <PaletteIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">UI/UX Design: </strong>
                      While{" "}
                      <span className="text-destructive">
                        I'm not a designer
                      </span>
                      , I also have to tackle this issue. I preffer using UI
                      libraries to help me build apps. I've used{" "}
                      <a href="https://vuetifyjs.com/" target="_blank">
                        <Badge variant="link">Vuetify</Badge>
                      </a>{" "}
                      for this in most of my apps. Since dabbing into the React
                      ecosystem I've been playing with{" "}
                      <a href="https://ui.shadcn.com" target="_blank">
                        <Badge variant="link">ShadCN</Badge>
                      </a>{" "}
                      ,{" "}
                      <a href="https://www.framer.com/motion/" target="_blank">
                        <Badge variant="link">Framer Motion</Badge>
                      </a>{" "}
                      and{" "}
                      <a href="https://tailwindcss.com/" target="_blank">
                        <Badge variant="link">Tailwind CSS</Badge>
                      </a>
                      .
                    </li>
                    <li>
                      <MonitorIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        Frontend Development:{" "}
                      </strong>
                      Building the frontend, including the UI/UX implementation.
                      I've started with{" "}
                      <a href="https://jquery.com/" target="_blank">
                        <Badge variant="link">jQuery</Badge>
                      </a>
                      , moved on to{" "}
                      <a href="https://vuejs.org/" target="_blank">
                        <Badge variant="link">Vue.js</Badge>
                      </a>{" "}
                      (with{" "}
                      <a href="https://vuex.vuejs.org/" target="_blank">
                        <Badge variant="link">Vuex</Badge>
                      </a>{" "}
                      and{" "}
                      <a href="https://router.vuejs.org/" target="_blank">
                        <Badge variant="link">Vue Router</Badge>
                      </a>
                      ) and now I'm playing with{" "}
                      <a href="https://reactjs.org/" target="_blank">
                        <Badge variant="link">React</Badge>
                      </a>{" "}
                      (with{" "}
                      <a href="https://reactrouter.com/" target="_blank">
                        <Badge variant="link">React Router</Badge>
                      </a>
                      ,{" "}
                      <a href="https://tanstack.com/query/v4" target="_blank">
                        <Badge variant="link">Tanstack Query</Badge>
                      </a>
                      ,{" "}
                      <a href="https://tanstack.com/router/v1" target="_blank">
                        <Badge variant="link">Tanstack Router</Badge>
                      </a>
                      ).
                    </li>
                    <li>
                      <CodeIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        Backend Development:{" "}
                      </strong>
                      Building the backend, including the APIs. I've started
                      with{" "}
                      <a href="https://www.php.net/" target="_blank">
                        <Badge variant="link">PHP</Badge>
                      </a>
                      , I've built my own backend framework (router, orm, form
                      buolder etc. which I never released), moved on to{" "}
                      <a href="https://laravel.com/" target="_blank">
                        <Badge variant="link">Laravel</Badge>
                      </a>
                      and then switched to{" "}
                      <a href="https://nodejs.org/" target="_blank">
                        <Badge variant="link">Node.js</Badge>
                      </a>
                      . I used{" "}
                      <a href="https://feathersjs.com/" target="_blank">
                        <Badge variant="link">Feathers.js</Badge>
                      </a>{" "}
                      in a lot of my projects, but also{" "}
                      <a href="https://expressjs.com/" target="_blank">
                        <Badge variant="link">Express.js</Badge>
                      </a>{" "}
                      for smaller projects. Now I'm playing with{" "}
                      <a href="https://hono.dev/" target="_blank">
                        <Badge variant="link">Hono</Badge>
                      </a>{" "}
                      and{" "}
                      <a href="https://elysiajs.com/" target="_blank">
                        <Badge variant="link">Elysia</Badge>
                      </a>
                      . I'm also currently working on my first{" "}
                      <a href="https://nextjs.org/" target="_blank">
                        <Badge variant="link">Next.js</Badge>
                      </a>{" "}
                      project. I'm also trying out{" "}
                      <a href="https://bun.sh/" target="_blank">
                        <Badge variant="link">Bun</Badge>
                      </a>{" "}
                      as a Node replacement because it's blazing fast. I loved
                      using{" "}
                      <a
                        href="https://laravel.com/docs/eloquent"
                        target="_blank">
                        <Badge variant="link">Eloquent ORM</Badge>
                      </a>{" "}
                      in Laravel and{" "}
                      <a href="https://mongoosejs.com/" target="_blank">
                        <Badge variant="link">Mongoose</Badge>
                      </a>{" "}
                      with Feathers.js. Currently my favorite ORM is{" "}
                      <a href="https://drizzle.dev/" target="_blank">
                        <Badge variant="link">Drizzle</Badge>
                      </a>{" "}
                      .
                    </li>
                    <li>
                      <MousePointer2Icon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">Automation: </strong>
                      Writing automation scripts using to help people save time
                      on boring and repetitive tasks. I mainly use{" "}
                      <a href="https://pptr.dev/" target="_blank">
                        <Badge variant="link">Puppeteer</Badge>
                      </a>{" "}
                      for this.
                    </li>
                    <li>
                      <DatabaseIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        Database Design & Management:{" "}
                      </strong>
                      Designing and managing the database. I've started with{" "}
                      <a href="https://www.mysql.com/" target="_blank">
                        <Badge variant="link">MySQL</Badge>
                      </a>{" "}
                      and{" "}
                      <a href="https://mariadb.org/" target="_blank">
                        <Badge variant="link">MariaDB</Badge>
                      </a>
                      , but now I'm playing with{" "}
                      <a href="https://www.postgresql.org/" target="_blank">
                        <Badge variant="link">PostgreSQL</Badge>
                      </a>
                      . I've also used{" "}
                      <a href="https://www.mongodb.com/" target="_blank">
                        <Badge variant="link">MongoDB</Badge>
                      </a>
                      in a lot of my projects.{" "}
                      <a href="https://firebase.google.com/" target="_blank">
                        <Badge variant="link">Firebase</Badge>
                      </a>{" "}
                      has also been in the mix and so has{" "}
                      <a href="https://supabase.com/" target="_blank">
                        <Badge variant="link">Supabase</Badge>
                      </a>
                      .
                    </li>
                    <li>
                      <TestTubeIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        Quality Assurance:{" "}
                      </strong>
                      Testing the application to ensure it meets the
                      requirements and is free of bugs. I use{" "}
                      <a href="https://pptr.dev/" target="_blank">
                        <Badge variant="link">Puppeteer</Badge>
                      </a>{" "}
                      for automated testing and{" "}
                      <a href="https://www.postman.com/" target="_blank">
                        <Badge variant="link">Postman</Badge>
                      </a>{" "}
                      and{" "}
                      <a href="https://www.thunderclient.com/" target="_blank">
                        <Badge variant="link">Thunder Client</Badge>
                      </a>{" "}
                      (the VSCode extension) for manual testing.
                    </li>
                    <li>
                      <FileTextIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">
                        Technical Writing:{" "}
                      </strong>
                      Writing technical documentation for the application. I use{" "}
                      <a href="https://www.notion.so/" target="_blank">
                        <Badge variant="link">Notion</Badge>
                      </a>{" "}
                      for this. Might be one of the least liked tasks, buth i
                      really do like to build very thorough documentation.
                    </li>
                    <li>
                      <UsersIcon
                        className="mr-2 inline-block h-4 w-4 text-chart-2"
                        strokeWidth="2"
                        absoluteStrokeWidth
                      />
                      <strong className="text-chart-2">Training: </strong>
                      Training the client's team to use the application. I guess
                      this comes from my teaching side.
                    </li>
                  </UnorderedList>
                  <p>
                    I didn't metion this entire list just to brag 🤔 , I did it
                    because it's what's expected of you when you build your
                    diploma project. You'll be wearing all of these hats when
                    you write your thesis and develop your app. Knowing this
                    from the get-go and understanding all of these roles will
                    help you better organize yourself.
                  </p>
                  <p>
                    I'm not a certified expert in all of these areas, but I've
                    been around the block enough times to know what I'm talking
                    about.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>What I'm offering</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    <span className="inline-block text-amber-500">
                      <SparklesIcon
                        className="mr-2 inline-block h-4 w-4"
                        color="currentColor"
                      />
                    </span>
                    Free
                    <span className="inline-block text-amber-500">
                      <SparklesIcon
                        className="mx-2 inline-block h-4 w-4"
                        color="currentColor"
                      />
                    </span>
                    mentorship while you work on your diploma project.
                  </p>
                  <p>Access to my knowledge and experience.</p>
                  <p>
                    Guidance and feedback on your project, so you can learn and
                    grow.
                  </p>
                  <p>
                    A sounding board for your ideas and a fresh set of eyes to
                    review your work.
                  </p>
                  <p>
                    Weekly online meetings to keep you on track and make sure
                    you're on the right path.
                  </p>
                  <Alert>
                    <AlertCircleIcon className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      I ain't gonna babysit you.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>What I'm hoping you are</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Ambitious, hardworking, and willing to learn. You should be
                    open to feedback and criticism, and be willing to change
                    course if necessary.
                  </p>
                  <p>Passionate about technology and innovation.</p>
                  <p>Not eager to cut corners.</p>
                  <p>
                    Aware of the importance of self-study and continuous
                    improvement.
                  </p>
                  <p>
                    Able to put up with my jokes and sarcasm (or at least
                    pretend to).
                  </p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>Where do we start?</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Choose me as your official mentor and join the Teams group.
                  </p>
                  <p>
                    We'll start the online meetings on Sunday, November 17th,
                    2024, 11:00 AM Bucharest time.
                  </p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <a
                    href="https://teams.microsoft.com/l/team/19%3A1STy8oiZwU3NkTcF1rz7D5fTmTcENXAWmXxfUquWPB01%40thread.tacv2/conversations?groupId=b5ef3caa-8a74-423d-a5d9-efbdd6df7c5c&tenantId=7bbeaf15-9f85-4dfb-b4ff-d9207107cd7d"
                    target="_blank">
                    <Button variant="outline">Join the Teams group</Button>
                  </a>
                </CardFooter>
              </Card>
              <Card className="text-left">
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-bold">
                    Q: What should I choose as the title for my project?
                  </p>
                  <p>
                    A: The title should be both concise and encompasing for the
                    work you'll be doing. Assuming you are building software, it
                    is expected of you that you'll describe the entire process,
                    from start to finish. That pretty much covers that entire
                    list of roles described eralier. So, you'll be: designing,
                    developing and deploying an app. That covers the technical
                    aspects. For the business side, you should describe what you
                    are building and who's the beneficiary. An example for a
                    title might be: "Designing, developing and deploying a
                    software solution for the management of orders in the XYZ
                    restaurant".
                  </p>
                  <p className="font-bold">
                    Q: Is the title set in stone? Can I change it later?
                  </p>
                  <p>
                    A: The title is not set in stone starting now. The final
                    title is the one that you provide when you enroll for the
                    diploma exam after you graduate.
                  </p>
                </CardContent>
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
            <a href="https://unsplash.com/@rutmiit?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              RUT MIIT
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/person-holding-black-academic-hat-oTglG1D4hRA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
