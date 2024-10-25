import Day1 from "@/components/day1/index";
import Day2 from "@/components/day2/index";
import NavBar from "@/components/navbar";
import { Toaster } from "sonner";

import { useTheme } from "@/components/theme-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  const { lightOrDark } = useTheme();
  return (
    <div className="h-full flex flex-col w-full">
      <NavBar />
      <div className="mx-auto p-4 flex items-center justify-center h-full min-h-0 overflow-y-auto flex-grow w-full">
        <Tabs
          defaultValue="day2"
          className="w-full h-full text-center flex flex-col min-h-0 overflow-y-auto"
        >
          <TabsList className="mx-auto">
            <TabsTrigger value="day1">Lab 1</TabsTrigger>
            <TabsTrigger value="day2">Lab 2</TabsTrigger>
          </TabsList>
          <TabsContent
            value="day1"
            className="text-left flex-grow min-h-0 overflow-y-auto"
          >
            <Day1 />
          </TabsContent>
          <TabsContent
            value="day2"
            className="text-left flex-grow min-h-0 overflow-y-auto"
          >
            <Day2 />
          </TabsContent>
        </Tabs>
      </div>
      <Toaster richColors theme={lightOrDark} />
    </div>
  );
}

export default App;
