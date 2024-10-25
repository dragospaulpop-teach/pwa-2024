import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { BookOpen, FlaskConical, Home, Menu, Newspaper } from "lucide-react";

export default function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex w-[250px] flex-col sm:w-[300px]"
      >
        <SheetHeader className="">
          <SheetTitle>PWA 2024</SheetTitle>

          <SheetDescription className="sr-only">App menu</SheetDescription>
        </SheetHeader>
        <Separator />
        <nav className="mt-0 flex flex-grow flex-col space-y-4">
          <Link
            href="/"
            className="flex items-center justify-between rounded-md p-2 text-lg hover:bg-muted"
          >
            Home
            <Home className="h-5 w-5" />
          </Link>
          <Link
            href="/labs"
            className="flex items-center justify-between rounded-md p-2 text-lg hover:bg-muted"
          >
            Labs
            <FlaskConical className="h-5 w-5" />
          </Link>
          <Link
            href="/news"
            className="flex items-center justify-between rounded-md p-2 text-lg hover:bg-muted"
          >
            News
            <Newspaper className="h-5 w-5" />
          </Link>
          <Link
            href="/resources"
            className="flex items-center justify-between rounded-md p-2 text-lg hover:bg-muted"
          >
            Resources
            <BookOpen className="h-5 w-5" />
          </Link>

          <Separator />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
