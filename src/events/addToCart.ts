import { CurrencyValues } from "../../../../domain/data/entities/checkoutValues";
import { Event } from "../../../../domain/data/entities/event";
import { toFixedPrice } from "../../../utils/priceToFixed";

export type AddToCart = {
  value?: number;
  currencyCode?: CurrencyValues;
  products: {
    id?: string;
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

export function createAddToCartData(data?: AddToCart): Event<AddToCart> {
  const price = toFixedPrice(data?.value || 0);
  return {
    event: "addToCart",
    ecommerce: {
      add: {
        value: price,
        currencyCode: data?.currencyCode || "BRL",
        products: data?.products,
      } as AddToCart,
    },
  };
}
