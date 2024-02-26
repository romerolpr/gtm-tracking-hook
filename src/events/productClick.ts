import { CurrencyValues } from "../../../../domain/data/entities/checkoutValues";
import { Event } from "../../../../domain/data/entities/event";

export type ProductClick = {
  currencyCode?: CurrencyValues;
  actionField?: {
    list: string;
  };
  products: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    brand: string;
    category: string;
    variant: string;
    quantity: number;
    discount: number;
  }[];
};

export function createProductClickData(
  data?: ProductClick
): Event<ProductClick> {
  return {
    event: "productClick",
    ecommerce: {
      click: {
        actionField: {
          list: data?.actionField?.list || "home",
        },
        currencyCode: data?.currencyCode || "BRL",
        products: data?.products,
      } as ProductClick,
    },
  };
}
