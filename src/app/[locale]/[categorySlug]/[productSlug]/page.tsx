// import { Metadata } from "next";
// import { setRequestLocale } from "next-intl/server";
import {
  ProductDetailCard,
  getProductDetail,
  // ProductsList
} from "@/features/products";

interface Props {
  params: Promise<{
    locale: string;
    categorySlug: string;
    productSlug: string;
  }>;
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { locale, productSlug } = await params;

//   setRequestLocale(locale);

//   const data = await getProductPageMetadata(locale, productSlug);

//   return {
//     title: data.title,
//     description: data.description,
//     openGraph: {
//       title: data.title,
//       description: data.description,
//     },
//   };
// }

export default async function ProductPage({ params }: Props) {
  const { locale, productSlug } = await params;

  const product = await getProductDetail(locale, productSlug);
  // const similarProducts = await getSimilarProducts(locale, productSlug);

  return (
    <>
      <ProductDetailCard product={product} />
      {/* <ProductsList data={similarProducts} title={"Similar products"} /> */}
    </>
  );
}
