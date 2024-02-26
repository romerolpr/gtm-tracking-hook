import {
  createPurchaseData,
  Purchase,
} from "@modules/partners/gtm/view/hooks/tracking/events/purchase";

export function dispatchEventPurchase(payload: Purchase) {
  return createPurchaseData(payload);
}
