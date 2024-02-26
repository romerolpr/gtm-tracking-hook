import { CheckoutOptions } from "../../../../domain/data/entities/checkoutOptions";
import { CurrencyValues } from "../../../../domain/data/entities/checkoutValues";
import { Event } from "../../../../domain/data/entities/event";
import { FlowOptions } from "../../../../domain/data/entities/flowOptions";
import { toFixedPrice } from "../../../utils/priceToFixed";

export type Checkout = {
  currencyCode?: CurrencyValues;
  value?: number;
  actionField: {
    step: string;
    action?: string;
    option?: FlowOptions | CheckoutOptions;
  };
  products: {
    id: string | number;
    name: string;
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

export function createCheckoutData(data?: Checkout): Event<Checkout> {
  const price = toFixedPrice(data?.value || 0);
  return {
    event: "checkout",
    ecommerce: {
      checkout: {
        currencyCode: data?.currencyCode || "BRL",
        value: price,
        actionField: {
          step: data?.actionField.step || "",
          action: data?.actionField?.action || "checkout",
          option: data?.actionField?.option || "",
        },
        products: data?.products,
      } as Checkout,
    },
  };
}
