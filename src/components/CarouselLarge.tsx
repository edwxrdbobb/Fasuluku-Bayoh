"use client";

import React from "react";
import {cn} from "@/lib/utils";
import {Carousel} from "@/components/ui/carousel-large";
// Import portrait images
import portrait1 from "@/assets/PORTRAIT/BG101224.jpg";
import portrait2 from "@/assets/PORTRAIT/BG101246.jpg";
import portrait3 from "@/assets/PORTRAIT/BG101253.jpg";
import portrait4 from "@/assets/PORTRAIT/FAS02935.jpg";
import portrait5 from "@/assets/PORTRAIT/FAS02966.jpg";
import portrait6 from "@/assets/PORTRAIT/FAS03029.jpg";
import portrait7 from "@/assets/PORTRAIT/IMG_5959.jpg";
import portrait8 from "@/assets/PORTRAIT/IMG_5993.jpg";
import portrait9 from "@/assets/PORTRAIT/IMG_8519.jpg";
import portrait10 from "@/assets/PORTRAIT/IMG_8527.jpg";
import portrait11 from "@/assets/PORTRAIT/IMG_8532.jpg";

export function CarouselDemo() {

  const slideData = [
    {
      title: "Portrait 1",
      button: "View Portrait",
      src: portrait1,
    },
    {
      title: "Portrait 2",
      button: "View Portrait",
      src: portrait2,
    },
    {
      title: "Portrait 3",
      button: "View Portrait",
      src: portrait3,
    },
    {
      title: "Portrait 4",
      button: "View Portrait",
      src: portrait4,
    },
    {
      title: "Portrait 5",
      button: "View Portrait",
      src: portrait5,
    },
    {
      title: "Portrait 6",
      button: "View Portrait",
      src: portrait6,
    },
    {
      title: "Portrait 7",
      button: "View Portrait",
      src: portrait7,
    },
    {
      title: "Portrait 8",
      button: "View Portrait",
      src: portrait8,
    },
    {
      title: "Portrait 9",
      button: "View Portrait",
      src: portrait9,
    },
    {
      title: "Portrait 10",
      button: "View Portrait",
      src: portrait10,
    },
    {
      title: "Portrait 11",
      button: "View Portrait",
      src: portrait11,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
