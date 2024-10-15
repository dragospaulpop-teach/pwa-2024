import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card1 from "./cards/card1";
import Intro from "./cards/intro";

export default function Day1() {
  return (
    <Carousel className="w-full max-w-2xl">
      <CarouselContent>
        <CarouselItem>
          <Intro />
        </CarouselItem>
        <CarouselItem>
          <Card1 />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
