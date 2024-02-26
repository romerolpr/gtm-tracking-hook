import {
  CheckoutOption,
  createCheckoutOptionData,
} from "@modules/partners/gtm/view/hooks/tracking/events/checkoutOption";

export function dispatchEventCheckoutOption(payload: CheckoutOption) {
  return createCheckoutOptionData(payload);
}
