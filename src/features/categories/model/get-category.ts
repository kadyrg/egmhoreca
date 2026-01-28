import { ApiSchemas } from "@/shared/api/schema";
import { CONFIG } from "@/shared/model/config";
import { notFound } from "next/navigation";

export async function getCategory(locale: string, slug: string) {
  const res = await fetch(`${CONFIG.API_BASE_URL}/api/categories/${slug}/`, {
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
