import { ApiSchemas } from "@/shared/api/schema";
import { CONFIG } from "@/shared/model/config";
import { notFound } from "next/navigation";

export type Product = {
  id: number;
  title: string;
  slug: string;
  mainImage: string;
  price: string;
  categorySlug: string;
};

export async function getSubCategories(locale: string, categorySlug: string) {
  const res = await fetch(
    `${CONFIG.API_BASE_URL}/api/sub_categories/?category_slug=${categorySlug}`,
    {
      headers: {
        "Accept-Language": locale,
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: {
        tags: [`${locale}/sub_categories/?category_slug=${categorySlug}`],
      },
    },
  );
  if (!res.ok) {
    return notFound();
  }
  const data: ApiSchemas["SubCategorySchema"][] = await res.json();
  return data;
}
