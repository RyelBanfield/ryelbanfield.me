"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const PhotoGrid = () => {
  return (
    <div className="max-w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-3 gap-3">
              <Image
                src={"/photos/1.JPG"}
                alt=""
                className="col-span-1 h-80 w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/2.JPG"}
                alt=""
                className="col-span-2 h-80 w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/3.JPG"}
                alt=""
                className="col-span-2 h-80 w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/4.JPG"}
                alt=""
                className="col-span-1 h-80 w-full rounded object-cover"
                width={500}
                height={500}
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="grid h-[652px] grid-rows-4 gap-3">
              <Image
                src={"/photos/5.JPG"}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/6.JPG"}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/7.JPG"}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/8.JPG"}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="grid h-[652px] grid-cols-4 grid-rows-4 gap-3">
              <Image
                src={"/photos/9.JPG"}
                alt=""
                className="col-span-2 row-span-2 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/10.JPG"}
                alt=""
                className="col-span-2 row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/11.JPG"}
                alt=""
                className="col-span-2 row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photos/12.JPG"}
                alt=""
                className="col-span-4 row-span-2 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PhotoGrid;
