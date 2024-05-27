"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// import Image_1 from "../../public/photos/1.JPG";
// import Image_2 from "../../public/photos/2.JPG";
// import Image_3 from "../../public/photos/3.JPG";
// import Image_4 from "../../public/photos/4.JPG";
// import Image_5 from "../../public/photos/5.JPG";
// import Image_6 from "../../public/photos/6.JPG";
// import Image_7 from "../../public/photos/7.JPG";
// import Image_8 from "../../public/photos/8.JPG";
// import Image_9 from "../../public/photos/9.JPG";
// import Image_10 from "../../public/photos/10.JPG";
// import Image_11 from "../../public/photos/11.JPG";
// import Image_12 from "../../public/photos/12.JPG";

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
