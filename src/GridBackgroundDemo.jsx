import { ColourfulText } from "../components/ui/colourful-text";
import { cn } from "../lib/util";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <div
      className="relative flex h-[30rem] w-full items-center justify-center bg-[#064cda]">
      <div
        className={cn(
            "absolute inset-0",
          "[background-size:50px_50px]",
          "[background-image:radial-gradient(white_1px,transparent_1px)]",
          
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#064cda]"></div>
       
      <p
        className="relative z-20  bg-white rounded-full p-8 text-center text-3xl font-bold  sm:text-7xl">

            Every <ColourfulText text="brand"/> Has a Story 
            <p> Let’s Make Yours <ColourfulText text="Unforgatable"/></p>
           
       
      </p>
    </div>
  );
}
