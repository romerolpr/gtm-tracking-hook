import {
  AddToCartGA4,
  createAddToCartGA4Data,
} from "../../events/addToCartGA4";

export function dispatchEventAddToCartGA4(payload: AddToCartGA4) {
  return createAddToCartGA4Data(payload);
}
