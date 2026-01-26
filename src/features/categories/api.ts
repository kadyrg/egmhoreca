import { ApiSchemas } from "@/shared/api/schema";
import { CONFIG } from "@/shared/model/config";
import { notFound } from "next/navigation";

export async function get_categories(
  locale: string,
): Promise<ApiSchemas["CategorySchema"][]> {
  const res = await fetch(CONFIG.API_BASE_URL + "/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  });
  const data = await res.json();
  return data;
}

export async function getCategory(locale: string, slug: string) {
  const res = await fetch(`${CONFIG.API_BASE_URL}/api/categories/${slug}`, {
    method: "GET",
    headers: {
      "Accept-Language": locale,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    return notFound();
  }
  const data: ApiSchemas["CategoryTitleSchema"] = await res.json();
  return data;
}

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
    },
  );
  if (!res.ok) {
    return notFound();
  }
  const data: ApiSchemas["SubCategorySchema"][] = await res.json();
  return data;
}
