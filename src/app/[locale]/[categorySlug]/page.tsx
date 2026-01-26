import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { cn } from "@/shared/lib/css";
import { Link } from "@/shared/i18n/navigation";
import { getCategory } from "@/features/categories";
import { getSubCategories } from "@/features/sub-categories";

interface Props {
  params: Promise<{ locale: string; categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, categorySlug } = await params;

  setRequestLocale(locale);

  const data = await getCategory(locale, categorySlug);

  return {
    title: data.title,
    description: "",
    openGraph: {
      title: data.title,
      description: "",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { locale, categorySlug } = await params;

  setRequestLocale(locale);

  const data = await getSubCategories(locale, categorySlug);

  return (
    <section className="flex justify-center max-w-[90rem] mx-auto min-h-screen">
      <div>
        {/* {data.map((item) => (
          <ProductsList key={item.id} data={item.products} title={item.title} />
        ))} */}
      </div>
      <div className="hidden lg:block px-4">
        <div className="sticky top-11 h-[calc(100vh-44px)] flex flex-col gap-5 justify-center">
          {data.map((item) => (
            <Link
              key={item.id}
              className={cn(
                "font-semibold text-foreground/70 hover:text-foreground cursor-pointer transition-all truncate",
              )}
              href={`#${item.id}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
