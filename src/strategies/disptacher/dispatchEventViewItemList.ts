import {
  ViewItemList,
  createViewItemListData,
} from "@modules/partners/gtm/view/hooks/tracking/events/viewItemList";

export function dispatchEventViewItemListGA4(payload: ViewItemList) {
  return createViewItemListData(payload);
}
