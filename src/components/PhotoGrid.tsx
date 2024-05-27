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
                src={"/photo-grid/1.JPG"}
                alt=""
                className="col-span-1 h-80 w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/2.JPG"}
                alt=""
                className="col-span-2 h-80 w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/3.JPG"}
                alt=""
                className="col-span-2 h-80 w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/4.JPG"}
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
                src={"/photo-grid/5.JPG"}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/6.JPG"}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/7.JPG"}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/8.JPG"}
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
                src={"/photo-grid/9.JPG"}
                alt=""
                className="col-span-2 row-span-2 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/10.JPG"}
                alt=""
                className="col-span-2 row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/11.JPG"}
                alt=""
                className="col-span-2 row-span-1 h-full w-full rounded object-cover"
                width={500}
                height={500}
              />
              <Image
                src={"/photo-grid/12.JPG"}
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
