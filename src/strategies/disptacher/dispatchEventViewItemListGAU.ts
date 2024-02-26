import {
  ViewItemListGAU,
  createViewItemListGAUData,
} from "@modules/partners/gtm/view/hooks/tracking/events/viewItemListGAU";

export function dispatchEventViewItemList(payload: ViewItemListGAU) {
  return createViewItemListGAUData(payload);
}
