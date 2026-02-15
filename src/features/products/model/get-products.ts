import { ApiSchemas } from "@/shared/api/schema";
import { CONFIG } from "@/shared/model/config";
import { notFound } from "next/navigation";

export async function getProducts({
  locale,
  subCategorySlug,
}: {
  locale: string;
  subCategorySlug: string;
}) {
  const res = await fetch(
    CONFIG.API_BASE_URL + `/products?sub_category_slug=${subCategorySlug}`,
    {
      headers: {
        "Accept-Language": locale,
        "Content-Type": "application/json",
      },
      cache: "force-cache",
      next: {
        tags: [`${locale}/products?sub_category_slug=${subCategorySlug}`],
      },
    },
  );

  if (!res.ok) {
    return notFound();
  }

  const data: ApiSchemas["ProductSchema"][] = await res.json();
  return data;
}
