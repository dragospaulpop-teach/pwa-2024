import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Card1 from "./cards/card1";
import Card10 from "./cards/card10";
import Card11 from "./cards/card11";
import Card12 from "./cards/card12";
import Card13 from "./cards/card13";
import Card14 from "./cards/card14";
import Card15 from "./cards/card15";
import Card16 from "./cards/card16";
import Card17 from "./cards/card17";
import Card18 from "./cards/card18";
import Card19 from "./cards/card19";
import Card2 from "./cards/card2";
import Card20 from "./cards/card20";
import Card21 from "./cards/card21";
import Card22 from "./cards/card22";
import Card23 from "./cards/card23";
import Card24 from "./cards/card24";
import Card25 from "./cards/card25";
import Card26 from "./cards/card26";
import Card27 from "./cards/card27";
import Card28 from "./cards/card28";
import Card29 from "./cards/card29";
import Card3 from "./cards/card3";
import Card4 from "./cards/card4";
import Card5 from "./cards/card5";
import Card6 from "./cards/card6";
import Card7 from "./cards/card7";
import Card8 from "./cards/card8";
import Card9 from "./cards/card9";
import Intro from "./cards/intro";
import Outro from "./cards/outro";

export default function Day1() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-2 mb-4 w-full">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`flex-grow h-2 rounded-full cursor-pointer border border-muted ${
              index === current - 1 ? "bg-primary" : "bg-card"
            }`}
          />
        ))}
      </div>
      <Carousel className="w-full max-w-2xl" setApi={setApi}>
        <CarouselContent>
          <CarouselItem className="flex justify-center items-center">
            <Intro />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card1 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card2 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card3 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card4 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card5 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card6 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card7 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card8 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card9 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card10 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card11 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card12 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card13 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card14 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card15 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card16 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card17 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card18 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card19 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card20 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card21 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card22 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card23 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card24 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card25 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card26 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card27 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card28 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Card29 />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Outro />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
