import { ThemeToggle } from "@/components/theme-toggle";

import SideMenu from "@/components/side-menu";
import TopMenu from "@/components/top-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <>
      <motion.nav
        className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between px-4 backdrop-blur-2xl  dark:from-inherit"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <div className="flex-none flex items-center gap-2 justify-between w-full">
          <SideMenu />

          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/logo.png" />
              <AvatarFallback>
                <p>PWA&amp;MAD</p>
              </AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-bold tracking-widest">PWA&MAD</h1>
          </div>

          <TopMenu />

          <ThemeToggle />
        </div>
      </motion.nav>
    </>
  );
}
