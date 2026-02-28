"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { cn } from "@/shared/lib/css";
import React from "react";
import { ProductImage } from "./model/api";

export function ProductImageCarousel({
  mainImage,
  images,
}: {
  mainImage: string;
  images: ProductImage[];
}) {
  const allImages = useMemo(() => {
    const mainImgObj = { id: "main", image: mainImage };
    const filteredImages = images.filter((i) => i.image !== mainImage);
    return [mainImgObj, ...filteredImages];
  }, [mainImage, images]);

  const [selectedId, setSelectedId] = useState(allImages[0].id);
  const selectedImage = allImages.find((i) => i.id === selectedId)!;

  return (
    <div className="flex flex-col sm:flex-row-reverse w-full ">
      <div className="w-full">
        <SelectedProductImage src={selectedImage.image} alt="image" />
      </div>
      <div className="overflow-x-auto scrollbar-hide flex py-2 sm:py-0 sm:flex-col items-center sm:px-2 gap-2 sm:aspect-1/5 shrink-0">
        {allImages.map((item) => (
          <ProductImageThumbnail
            key={item.id}
            src={item.image}
            alt="image"
            isActive={item.id === selectedId}
            onMouseOver={() => setSelectedId(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

function ProductImageThumbnailComponent({
  isActive,
  src,
  alt,
  className,
  ...props
}: React.ComponentProps<typeof Image> & { isActive?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={80}
      height={80}
      className={cn(
        "object-contain w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-background rounded-sm p-1 first:ml-2 last:mr-2 sm:first:ml-0 sm:last:mr-0 aspect-square border-1 border-transparent",
        className,
        isActive && "border-foreground",
      )}
      {...props}
    />
  );
}

const ProductImageThumbnail = React.memo(ProductImageThumbnailComponent);

const SelectedProductImage = React.memo(function SelectedProductImage({
  className,
  alt,
  src,
  ...props
}: React.ComponentProps<typeof Image>) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      className={cn(
        "aspect-5/6 lg:rounded-2xl object-contain p-2 bg-background w-full bg-accent",
        className,
      )}
      {...props}
    />
  );
});
