import { CurrencyValues } from "../../../../domain/data/entities/checkoutValues";
import { Event } from "../../../../domain/data/entities/event";
import { toFixedPrice } from "../../../utils/priceToFixed";

export type Purchase = {
  currencyCode?: CurrencyValues;
  actionField: {
    id?: string;
    revenue?: number;
    option?: string;
  };
  products: {
    id: string | number;
    name: string;
    price: number;
    originalPrice: number;
    brand?: string;
    category: string;
    list: string;
    variant: string;
    quantity: number;
    discount: number;
  }[];
};

export function createPurchaseData(data?: Purchase): Event<Purchase> {
  const price = toFixedPrice(data?.actionField.revenue || 0);
  return {
    event: "purchase",
    ecommerce: {
      purchase: {
        currencyCode: data?.currencyCode || "BRL",
        actionField: {
          id: data?.actionField.id || "",
          revenue: price,
          option: data?.actionField.option || "",
        },
        products: data?.products,
      } as Purchase,
    },
  };
}
