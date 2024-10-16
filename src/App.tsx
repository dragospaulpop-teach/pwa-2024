import NavBar from "@/components/navbar";
import { Toaster } from "sonner";
import Day1 from "./components/day1/index";
import { useTheme } from "./components/theme-provider";

function App() {
  const { lightOrDark } = useTheme();
  return (
    <div className="h-full">
      <NavBar />
      <div className="container mx-auto p-4 flex items-center justify-center h-[calc(100vh-56px)] overflow-y-auto">
        <Day1 />
      </div>
      <Toaster richColors theme={lightOrDark} />
    </div>
  );
}

export default App;
