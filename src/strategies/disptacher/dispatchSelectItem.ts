import { SelectItem, createSelectItemData } from "../../events/seletItem";

export function dispatchSelectItem(payload: SelectItem) {
  return createSelectItemData(payload);
}
