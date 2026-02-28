import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui/kit/carousel";
import { Link } from "@/shared/i18n/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui/kit/button";
import { ApiSchemas } from "@/shared/api/schema";
import { getProducts } from "./model/api";

export async function ProductsList({
  subCategorySlug,
  locale,
}: {
  subCategorySlug: string;
  locale: string;
}) {
  const products = await getProducts({ locale, subCategorySlug });

  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
        breakpoints: {
          "(min-width: 1024px)": {
            watchDrag: false,
            inViewThreshold: 1,
          },
        },
      }}
      className="w-full lg:px-5 mx-auto"
    >
      <CarouselContent className="ml-1 mr-4 max-w-[90rem] mx-auto lg:grid lg:grid-cols-3 lg:gap-4">
        {products.map((item) => (
          <CarouselItem
            key={item.slug}
            className="pl-3 lg:pl-0 basis-4/7 sm:basis-4/9 md:basis-4/10"
          >
            <ProductCard product={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function ProductCard({
  categorySlug,
  product,
}: {
  categorySlug?: string;
  product: ApiSchemas["ProductSchema"];
}) {
  return (
    <Link
      className="flex flex-col rounded-3xl overflow-hidden bg-accent"
      href={`/${categorySlug}/${product.slug}`}
    >
      <Image
        src={product.image || ""}
        alt={product.title}
        width={500}
        height={500}
        className="aspect-square object-contain h-full w-full p-3"
        unoptimized
      />
      <div className="w-full p-[10px] sm:p-3 md:p-4 lg:p-5 gap-2 flex flex-wrap sm:flex-nowrap justify-between items-end">
        <div className="w-full overflow-hidden">
          <div className="truncate font-medium sm:text-lg md:text-xl">
            {product.title}
          </div>
          <div className="font-medium sm:text-lg text-foreground/80">
            {product.price} RON {product.oldPrice && <span className="ml-2 text-base text-sm text-muted-foreground line-through">{product.oldPrice} RON</span>}
          </div>
        </div>
        <Button className="font-semibold w-full sm:w-fit sm:h-10 sm:px-6 rounded-full">
          View
        </Button>
      </div>
    </Link>
  );
}
