import { getCategory } from "@/features/categories";
import { ProductsList } from "@/features/products";
import {
  getSubCategories,
  SubCategoriesSidebar,
} from "@/features/sub-categories";
import { TypographyH3 } from "@/shared/ui/kit/typography";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string; categorySlug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, categorySlug } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("Category");

  const data = await getCategory(locale, categorySlug);

  return {
    title: t("meta-title", { categoryTitle: data.title }),
    description: t("meta-description", { categoryTitle: data.title }),
    openGraph: {
      title: t("meta-title", { categoryTitle: data.title }),
      description: t("meta-description", { categoryTitle: data.title }),
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
        {data.map((item) => (
          <div
            key={item.id}
            id={String(item.id)}
            className="scroll-offset py-8 scroll-mt-24"
          >
            <div className="px-5">
              <div className="max-w-[90rem] mx-auto">
                <TypographyH3 className="my-3">{item.title}</TypographyH3>
              </div>
            </div>
            <ProductsList locale={locale} subCategorySlug={item.slug} />
          </div>
        ))}
      </div>
      <div className="hidden lg:block px-4">
        <SubCategoriesSidebar data={data} />
      </div>
    </section>
  );
}
