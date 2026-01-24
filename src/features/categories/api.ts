import { ApiSchemas } from "@/shared/api/schema";
import { CONFIG } from "@/shared/model/config";

export async function get_categories(
  locale: string
): Promise<ApiSchemas["CategorySchema"][]> {
  const res = await fetch(CONFIG.API_BASE_URL + "/api/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": locale,
    },
  })
  const data = await res.json()
  return data
}
