import NavBar from "@/components/navbar";
import Day1 from "./components/day1/index";

function App() {
  return (
    <div className="h-full">
      <NavBar />
      <div className="container mx-auto p-4 flex items-center justify-center h-full">
        <Day1 />
      </div>
    </div>
  );
}

export default App;
