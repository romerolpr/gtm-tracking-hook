import { Event } from "../../../../domain/data/entities/event";

export type ViewItemListGAU = {
  products: {
    name: string;
    id?: string;
    price: number;
    originalPrice: number;
    brand: string;
    category: string;
    list: string;
    variant: string;
    quantity: number;
    discount: number;
  }[];
};

export function createViewItemListGAUData(
  data?: ViewItemListGAU
): Event<ViewItemListGAU> {
  return {
    event: "viewItemList",
    ecommerce: {
      products: data?.products,
    } as ViewItemListGAU,
  };
}
