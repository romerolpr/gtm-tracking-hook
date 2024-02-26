import { Subscription } from "@modules/checkout.old/domain/data/entities/subscription";
import { sanitize } from "@utils/gtm";
import { CurrencyValues } from "../../../../domain/data/entities/checkoutValues";
import { Event } from "../../../../domain/data/entities/event";
import { toFixedPrice } from "../../../utils/priceToFixed";

export type ProductImpression = {
  currencyCode?: CurrencyValues;
  impressions?: {
    id?: string;
    name: string;
    price: number;
    originalPrice: number;
    brand: string;
    category: string;
    variant: string;
    quantity: string;
  }[];
};

export function createProductImpressions(
  subscriptions: Subscription[],
  category?: string
): ProductImpression["impressions"] {
  return subscriptions.map(
    ({ programName, programId, price, promotionalPrice, hasDiscount }) => {
      const fixedPrice = hasDiscount
        ? toFixedPrice(promotionalPrice || 0)
        : toFixedPrice(price);

      return {
        id: String(programId),
        name: sanitize(programName),
        price: fixedPrice,
        originalPrice: Number(price.toFixed(2)),
        brand: "vale-saude-b2c",
        category: category || "home",
        variant: sanitize(programName),
        quantity: "1",
      };
    }
  );
}

export function createProductImpressionData(
  data?: ProductImpression
): Event<ProductImpression> {
  return {
    event: "productImpression",
    ecommerce: {
      currencyCode: data?.currencyCode || "BRL",
      impressions: data?.impressions,
    },
  };
}
