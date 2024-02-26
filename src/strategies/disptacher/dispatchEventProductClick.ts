import {
  ProductClick,
  createProductClickData,
} from "@modules/partners/gtm/view/hooks/tracking/events/productClick";

export function dispatchEventProductClick(payload: ProductClick) {
  return createProductClickData(payload);
}
