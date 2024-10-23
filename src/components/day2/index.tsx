import Card1 from "@/components/day2/cards/card1";
import Card2 from "@/components/day2/cards/card2";
import Card3 from "@/components/day2/cards/card3";
import Card4 from "@/components/day2/cards/card4";
import Card5 from "@/components/day2/cards/card5";
import Card6 from "@/components/day2/cards/card6";
import Intro from "@/components/day2/cards/intro";
import Outro from "@/components/day2/cards/outro";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function Day2() {
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
    <div className="flex flex-col items-center justify-center">
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
      <Carousel className="w-full max-w-[calc(100%-200px)]" setApi={setApi}>
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
            <Outro />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
