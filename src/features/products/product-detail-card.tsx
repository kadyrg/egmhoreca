import { ProductDetail } from "./model/api";
import { ProductImageCarousel } from "./product-detail-image";
import { ProductInformation } from "./product-information";

export function ProductDetailCard({ product }: { product: ProductDetail }) {
  return (
    <section className="w-full flex flex-col sm:px-5">
      <div className="w-full flex flex-col lg:flex-row max-w-2xl lg:max-w-6xl mx-auto sm:py-5 md:py-8 lg:py-12">
        <ProductImageCarousel
          images={product.images}
          mainImage={product.mainImage}
        />
        <ProductInformation product={product} />
      </div>
    </section>
  );
}
