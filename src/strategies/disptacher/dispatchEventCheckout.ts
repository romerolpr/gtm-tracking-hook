import {
  Checkout,
  createCheckoutData,
} from "@modules/partners/gtm/view/hooks/tracking/events/checkout";

export function dispatchEventCheckout(payload: Checkout) {
  return createCheckoutData(payload);
}
