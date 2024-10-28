import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronLeftIcon, MenuSquareIcon } from "lucide-react";
import { useState } from "react";

interface Step {
  id: string;
  title: string;
  description: string;
  path: string;
}

interface CourseSteps {
  [course: string]: {
    [lab: string]: Step[];
  };
}

const steps: CourseSteps = {
  pwa: {
    lab1: [
      {
        id: "intro",
        title: "Intro",
        description: "Overview of the lab",
        path: "/labs/pwa/lab1/intro",
      },
      {
        id: "step1",
        title: "Theory",
        description: "What is a Web Server?",
        path: "/labs/pwa/lab1/step1",
      },
      {
        id: "step2",
        title: "Theory",
        description: "The Anatomy of a URL",
        path: "/labs/pwa/lab1/step2",
      },
      {
        id: "step3",
        title: "Theory",
        description: "The Request-Response Model",
        path: "/labs/pwa/lab1/step3",
      },
      {
        id: "step4",
        title: "Theory",
        description: "Request - HTTP Verbs",
        path: "/labs/pwa/lab1/step4",
      },
      {
        id: "step5",
        title: "Theory",
        description: "Request - HTTP Headers",
        path: "/labs/pwa/lab1/step5",
      },
      {
        id: "step6",
        title: "Theory",
        description: "Response - Status codes",
        path: "/labs/pwa/lab1/step6",
      },
      {
        id: "step7",
        title: "Theory",
        description: "Apache Configuration",
        path: "/labs/pwa/lab1/step7",
      },
      {
        id: "step8",
        title: "Theory",
        description: "PHP Configuration",
        path: "/labs/pwa/lab1/step8",
      },
      {
        id: "step9",
        title: "Theory",
        description: "PHP: Interpreted vs. Compiled Languages",
        path: "/labs/pwa/lab1/step9",
      },
      {
        id: "outro",
        title: "Outro",
        description: "k thx bye",
        path: "/labs/pwa/lab1/outro",
      },
    ],
    lab2: [
      {
        id: "intro",
        title: "Practice",
        description: "Overview",
        path: "/labs/pwa/lab2/intro",
      },
      {
        id: "step1",
        title: "Practice",
        description: "Configuring Apache (Virtual Hosts)",
        path: "/labs/pwa/lab2/step1",
      },
      {
        id: "step2",
        title: "Practice",
        description: "Update your hosts file",
        path: "/labs/pwa/lab2/step2",
      },
      {
        id: "step3",
        title: "Practice",
        description: "Create the application root folder",
        path: "/labs/pwa/lab2/step3",
      },
      {
        id: "step4",
        title: "Practice",
        description: "Edit PHP settings",
        path: "/labs/pwa/lab2/step4",
      },
      {
        id: "step5",
        title: "Practice",
        description: "Creating a Dynamic PHP Homepage",
        path: "/labs/pwa/lab2/step5",
      },
      {
        id: "step6",
        title: "Practice",
        description: "Testing and Expanding",
        path: "/labs/pwa/lab2/step6",
      },
      {
        id: "step7",
        title: "Practice",
        description: "Expanding the Bookstore with More Arrays",
        path: "/labs/pwa/lab2/step7",
      },
      {
        id: "step8",
        title: "Practice",
        description: "Create Arrays for Book Information",
        path: "/labs/pwa/lab2/step8",
      },
      {
        id: "step9",
        title: "Practice",
        description: "Display Each Book Using the Arrays",
        path: "/labs/pwa/lab2/step9",
      },
      {
        id: "step10",
        title: "Practice",
        description: "Styling the Book List (Optional)",
        path: "/labs/pwa/lab2/step10",
      },
      {
        id: "step11",
        title: "Practice",
        description: "Creating a Multidimensional Associative Array",
        path: "/labs/pwa/lab2/step11",
      },
      {
        id: "step12",
        title: "Practice",
        description: "Display Books Using the Multidimensional Array",
        path: "/labs/pwa/lab2/step12",
      },
      {
        id: "step13",
        title: "Practice",
        description: "Hands-On Exercises",
        path: "/labs/pwa/lab2/step13",
      },
      {
        id: "step14",
        title: "Practice",
        description: "Bonus task",
        path: "/labs/pwa/lab2/step14",
      },
      {
        id: "step15",
        title: "Practice",
        description: "Using alternative statements for Cleaner Code",
        path: "/labs/pwa/lab2/step15",
      },
      {
        id: "step16",
        title: "Practice",
        description: "Modularizing the Code with include or require",
        path: "/labs/pwa/lab2/step16",
      },
      {
        id: "step17",
        title: "Practice",
        description: "Moving Data to a JSON File",
        path: "/labs/pwa/lab2/step17",
      },
      {
        id: "step18",
        title: "Practice",
        description: " Load and Parse JSON in PHP",
        path: "/labs/pwa/lab2/step18",
      },
      {
        id: "step19",
        title: "Practice",
        description: "Hands-On Exercises",
        path: "/labs/pwa/lab2/step19",
      },
      {
        id: "outro",
        title: "Outro",
        description: "k thx bye",
        path: "/labs/pwa/lab2/outro",
      },
    ],
    lab3: [
      {
        id: "intro",
        title: "Practice",
        description: "Overview",
        path: "/labs/pwa/lab3/intro",
      },
      {
        id: "step1",
        title: "Practice",
        description: "Update the Books Data to Include Categories",
        path: "/labs/pwa/lab3/step1",
      },
      {
        id: "step2",
        title: "Practice",
        description: "Display the Category for Each Book",
        path: "/labs/pwa/lab3/step2",
      },
      {
        id: "step3",
        title: "Practice",
        description: "Make the Category Name a Link",
        path: "/labs/pwa/lab3/step3",
      },
      {
        id: "step4",
        title: "Practice",
        description: "Create Category Pages",
        path: "/labs/pwa/lab3/step4",
      },
      {
        id: "step5",
        title: "Practice",
        description: "Add a Form with a Dropdown on the Index Page",
        path: "/labs/pwa/lab3/step5",
      },
      {
        id: "step6",
        title: "Practice",
        description: "Exercises",
        path: "/labs/pwa/lab3/step6",
      },
      {
        id: "outro",
        title: "Outro",
        description: "k thx bye",
        path: "/labs/pwa/lab3/outro",
      },
    ],
  },
};

interface LabLayoutProps {
  children: React.ReactNode;
  step: string;
  lab: string;
  course: string;
}

export function LabLayout({ children, step, lab, course }: LabLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const currentStepIndex = steps[course][lab].findIndex((s) => s.id === step);
  const previousStep = steps[course][lab][currentStepIndex - 1]?.path ?? null;
  const nextStep = steps[course][lab][currentStepIndex + 1]?.path ?? null;

  return (
    <div className="relative h-full pb-8">
      <div className="absolute inset-0 -mt-[64px] bg-[url('/bg-labs.webp')] bg-cover bg-no-repeat opacity-50" />
      <div className="relative flex h-full max-h-full min-h-0 gap-4 overflow-y-auto p-4 backdrop-blur-sm">
        <motion.div
          layout
          className={cn(
            "sticky top-0 hidden max-h-full max-w-[25%] flex-col gap-2 overflow-y-auto p-2 md:flex",
            isMenuOpen ? "min-w-[200px]" : "min-w-max",
          )}>
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <motion.div layout>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <ChevronLeftIcon
                  className={cn(
                    "h-4 w-4 transition-transform",
                    !isMenuOpen && "rotate-180",
                  )}
                />
              </Button>
            </motion.div>
            {isMenuOpen && (
              <motion.span
                layout
                className="text-lg font-bold"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>
                Lab steps
              </motion.span>
            )}
          </h2>
          {steps[course][lab].map((step, index) => (
            <motion.div layout key={step.id}>
              <Link
                to={step.path}
                className={cn(
                  "grid grid-cols-[24px_1fr] items-center rounded-md bg-background p-2 text-foreground",
                  index < currentStepIndex && "text-foreground",
                  index === currentStepIndex &&
                    "text-foreground shadow-md outline outline-1 outline-muted-foreground",
                  isMenuOpen && "gap-2",
                )}>
                <motion.div
                  layout
                  className={cn(
                    "flex aspect-square w-6 items-center justify-center rounded-full bg-secondary text-sm text-secondary-foreground",
                    index <= currentStepIndex &&
                      "bg-primary text-primary-foreground",
                  )}>
                  {index}
                </motion.div>
                {isMenuOpen && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={cn(
                      "line-clamp-1 text-sm italic",
                      index === currentStepIndex && "font-bold",
                    )}>
                    {step.description}
                  </motion.div>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          layout
          className="container relative mx-auto flex flex-1 flex-col gap-4">
          {children}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between gap-2 p-4">
        {previousStep && (
          <Link to={previousStep}>
            <Button variant="outline">Previous</Button>
          </Link>
        )}
        <div className="flex-1" />
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <MenuSquareIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Lab steps</SheetTitle>
                <SheetDescription>Track your progress</SheetDescription>
              </SheetHeader>
              <div className="flex max-h-full w-full flex-col gap-2 overflow-y-auto p-2">
                {steps[course][lab].map((step, index) => (
                  <Link
                    to={step.path}
                    key={step.id}
                    className={cn(
                      "grid grid-cols-[24px_1fr] items-center gap-2 rounded-md bg-background p-2 text-foreground",
                      index < currentStepIndex && "text-foreground",
                      index === currentStepIndex &&
                        "text-foreground shadow-md outline outline-1 outline-muted-foreground",
                    )}>
                    <div
                      className={cn(
                        "flex aspect-square w-6 items-center justify-center rounded-full bg-secondary text-sm text-secondary-foreground",
                        index <= currentStepIndex &&
                          "bg-primary text-primary-foreground",
                      )}>
                      {index}
                    </div>
                    <div
                      className={cn(
                        "line-clamp-1 text-sm italic",
                        index === currentStepIndex && "font-bold",
                      )}>
                      {step.description}
                    </div>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1" />
        {nextStep && (
          <Link to={nextStep}>
            <Button variant="default">Next</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
