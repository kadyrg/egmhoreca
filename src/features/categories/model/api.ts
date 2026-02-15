import { ApiSchemas } from "@/shared/api/schema";
import { CONFIG } from "@/shared/model/config";
import { notFound } from "next/navigation";

export async function get_categories(
  locale: string,
): Promise<ApiSchemas["CategorySchema"][]> {
  const res = await fetch(CONFIG.API_BASE_URL + "/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
    cache: "force-cache",
    next: {
      tags: [`${locale}/categories`],
    },
  });
  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  return data;
}

export async function getCategory(locale: string, slug: string) {
  const res = await fetch(CONFIG.API_BASE_URL + `/categories/${slug}`, {
    method: "GET",
    headers: {
      "Accept-Language": locale,
      "Content-Type": "application/json",
    },
    cache: "force-cache",
    next: {
      tags: [`${locale}/categories/${slug}`],
    },
  });
  if (!res.ok) {
    return notFound();
  }
  const data: ApiSchemas["CategoryTitleSchema"] = await res.json();
  return data;
}
