export type CartProduct = {
  id: number;
  title: string;
  slug: string;
  mainImage: string;
  brandTitle: string | null;
  price: string;
  qty: number;
  attrItemId: number | null;
};
