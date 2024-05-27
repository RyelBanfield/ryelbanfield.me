"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import Image_1 from "@/assets/photos/1.jpg";
import Image_2 from "@/assets/photos/2.jpg";
import Image_3 from "@/assets/photos/3.jpg";
import Image_4 from "@/assets/photos/4.jpg";
import Image_5 from "@/assets/photos/5.jpg";
import Image_6 from "@/assets/photos/6.jpg";
import Image_7 from "@/assets/photos/7.jpg";
import Image_8 from "@/assets/photos/8.jpg";
import Image_9 from "@/assets/photos/9.jpg";
import Image_10 from "@/assets/photos/10.jpg";
import Image_11 from "@/assets/photos/11.jpg";
import Image_12 from "@/assets/photos/12.jpg";
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
                src={Image_1}
                alt=""
                className="col-span-1 h-80 w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_2}
                alt=""
                className="col-span-2 h-80 w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_3}
                alt=""
                className="col-span-2 h-80 w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_4}
                alt=""
                className="col-span-1 h-80 w-full rounded object-cover"
                placeholder="blur"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="grid h-[652px] grid-rows-4 gap-3">
              <Image
                src={Image_5}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_6}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_7}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_8}
                alt=""
                className="row-span-1 h-full w-full rounded object-cover"
                placeholder="blur"
              />
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="grid h-[652px] grid-cols-4 grid-rows-4 gap-3">
              <Image
                src={Image_9}
                alt=""
                className="col-span-2 row-span-2 h-full w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_10}
                alt=""
                className="col-span-2 row-span-1 h-full w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_11}
                alt=""
                className="col-span-2 row-span-3 h-full w-full rounded object-cover"
                placeholder="blur"
              />
              <Image
                src={Image_12}
                alt=""
                className="col-span-2 row-span-2 h-full w-full rounded object-cover"
                placeholder="blur"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PhotoGrid;
