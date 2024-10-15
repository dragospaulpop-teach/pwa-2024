import { ThemeToggle } from "@/components/theme-toggle";

import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <>
      <motion.nav
        className="flex items-center justify-between bg-accent p-2 shadow-md"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <div className="flex-none flex items-center gap-2 justify-between w-full">
          <ThemeToggle />
          <h1>PWA 2024</h1>
          <img src="/elephant.png" alt="logo" className="w-10 h-10" />
        </div>
      </motion.nav>
    </>
  );
}
