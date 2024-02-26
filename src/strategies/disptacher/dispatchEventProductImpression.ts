import {
  ProductImpression,
  createProductImpressionData,
} from "../../events/productImpression";

export function dispatchEventProductImpression(payload: ProductImpression) {
  return createProductImpressionData(payload);
}
