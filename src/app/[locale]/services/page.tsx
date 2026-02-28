import { Button } from "@/shared/ui/kit/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared/ui/kit/carousel";
import { Separator } from "@/shared/ui/kit/separator";
import { Home } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Home");

  return {
    title: t("meta-title"),
    description: t("meta-description"),
    openGraph: {
      title: t("meta-title"),
      description: t("meta-description"),
    },
  };
}

const data = [
  { title: "dsfdsfds", icon: Home },
  { title: "dsfdsfds", icon: Home },
  { title: "dsfdsfds", icon: Home },
  { title: "dsfdsfds", icon: Home },
];

export default async function Services() {
  return (
    <>
      <section className="relative text-background">
        <Image
          src={"/banner1.jpg"}
          alt={""}
          width={1920}
          height={1080}
          className="w-full h-170 object-cover brightness-50"
        />
        <div className="absolute top-3/7 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 xl:gap-6 max-w-2xl">
          <div className="space-y-1 lg:space-y-2 xl:space-y-3">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl text-balance font-semibold text-center">
              Our services
            </h2>
            <h4 className="text-center leading-6 text-balance lg:text-lg md:leading-7">
              La Conti Grup, ne dedicam furnizarii de solutii complete pentru
              echiparea si intretinerea afacerilor din domeniul HORECA. De la
              consultanta specializata si vanzare de echipamente profesionale,
              pana la servicii de mentenanta si reparatii, ne asiguram ca
              afacerea ta functioneaza fara intreruperi.
            </h4>
          </div>
          <Button size={"lg"} className=" rounded-full">
            Learn more
          </Button>
        </div>
      </section>
      <section className="space-y-3 py-2 max-w-[88rem] mx-auto">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="py-2"
        >
          <CarouselContent className="ml-4 mr-6">
            {data.map((item, index) => (
              <CarouselItem key={index} className="basis-1/1 sm:basis-1/4 pl-1">
                <Button
                  variant={"secondary"}
                  className="w-full rounded-full h-12 text-base [&_svg:not([class*='size-'])]:size-5 hover:bg-zinc-200"
                >
                  <item.icon />
                  {item.title}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Separator className="w-full !h-0.1 bg-linear-to-r from-background via-border to-background" />
        <div className="grid grid-cols-1 bg-accent rounded-3xl">
          <div>fdsfds</div>
        </div>
      </section>
    </>
  );
}
