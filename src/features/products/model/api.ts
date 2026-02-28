import { ApiSchemas } from "@/shared/api/schema";
import { CONFIG } from "@/shared/model/config";
import { notFound } from "next/navigation";

export type ProductDetail = {
  id: number;
  title: string;
  description: string | null;
  brandTitle: string | null;
  mainImage: string;
  images: ProductImage[];
  price: string | null;
  oldPrice: string | null;
  stock: number | null;
  attribute: ProductAttribute | null;
};

type AttributeItem = {
  id: number;
  title: string;
  price: string | null;
  oldPrice: string | null;
  stock: number;
};

type ProductAttribute = {
  title: string;
  items: AttributeItem[];
};

export type ProductImage = {
  id: number;
  image: string;
};

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

export async function getProductDetail(locale: string, slug: string) {
  const res = await fetch(CONFIG.API_BASE_URL + `/products/${slug}`, {
    headers: {
      "Accept-Language": locale,
      "Content-Type": "application/json",
    },
    // cache: "force-cache",
    next: {
      tags: [`${locale}/products/${slug}`],
    },
  });
  if (!res.ok) {
    return notFound();
  }
  const data: ProductDetail = await res.json();
  return data;
}
