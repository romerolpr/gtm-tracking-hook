import {
  AddToCart,
  createAddToCartData,
} from "@modules/partners/gtm/view/hooks/tracking/events/addToCart";

export function dispatchEventAddToCart(payload: AddToCart) {
  return createAddToCartData(payload);
}
