import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/shared/i18n/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui/kit/button";

interface Props {
  params: Promise<{ locale: string }>;
}
export type Banner = {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  link: string;
};

const banners: Banner[] = [
  {
    id: 1,
    image: "/banner1.jpg",
    title: "Banner 1",
    subTitle: "Banner 1 Subtitle",
    link: "/",
  },
];

const subBanners: Banner[] = [
  {
    id: 1,
    image: "/banner1.jpg",
    title: "Banner 1",
    subTitle: "Banner 1 Subtitle",
    link: "/",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  setRequestLocale(locale);

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

function BannerComp({ banner }: { banner: Banner }) {
  return (
    <Link className="relative block" href={banner.link}>
      <Image
        src={banner.image}
        width={1920}
        height={1080}
        alt={banner.title}
        className="w-full h-170 object-cover"
      />
      <div className="absolute top-3/10 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 xl:gap-6 max-w-md">
        <div className="space-y-1 lg:space-y-2 xl:space-y-3">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl text-balance font-semibold text-center">
            {banner.title}
          </h2>
          <h4 className="text-center text-lg leading-6 text-balance md:text-xl xl:text-2xl md:leading-7">
            {banner.subTitle}
          </h4>
        </div>
        <Button size={"lg"} className=" rounded-full">
          Learn more
        </Button>
      </div>
    </Link>
  );
}

export default async function Home() {
  return (
    <>
      <section className="space-y-3">
        {banners.map((item) => (
          <BannerComp key={item.id} banner={item} />
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        {subBanners.map((item) => (
          <SubBannerComp key={item.id} banner={item} />
        ))}
      </section>
    </>
  );
}

function SubBannerComp({ banner }: { banner: Banner }) {
  return (
    <Link className="relative block" href={banner.link}>
      <Image
        src={banner.image}
        width={1920}
        height={1080}
        alt={banner.title}
        className="w-full h-120 object-cover"
      />
      <div className="absolute top-3/10 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 xl:gap-6 max-w-md">
        <div className="space-y-1 lg:space-y-2 xl:space-y-3">
          <h2 className="text-3xl lg:text-4xl text-balance font-semibold text-center">
            {banner.title}
          </h2>
          <h4 className="text-center text-lg leading-6 text-balance md:text-xl xl:text-2xl md:leading-7">
            {banner.subTitle}
          </h4>
        </div>
        <Button size={"lg"} className="text-base rounded-full">
          Learn more
        </Button>
      </div>
    </Link>
  );
}
