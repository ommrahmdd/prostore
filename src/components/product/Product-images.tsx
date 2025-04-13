"use client";
import { useState } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProductImages({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <Image
        src={images[currentImage]}
        alt="product image"
        width={1000}
        height={1000}
      />
      <div className="flex items-center gap-2">
        {images?.map((image, index) => (
          <div
            key={index}
            className={cn(
              "p-2 border cursor-pointer hover:opacity-75",
              currentImage === index && "border-orange-600"
            )}
            role="button"
            onClick={() => setCurrentImage(index)}
          >
            <Image src={image} alt="product image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
}
