import { Event } from "../../../../domain/data/entities/event";

export type SelectItem = {
  item_list_id?: number;
  item_list_name?: string;
  items: {
    item_name: string;
    item_id: string;
    price: number;
    item_brand?: string;
    item_category: string;
    item_list_name?: string;
    item_list_id?: string;
    index?: number;
    quantity?: number;
  }[];
};

export function createSelectItemData(data?: SelectItem): Event<SelectItem> {
  return {
    event: "select_item",
    ecommerce: {
      item_list_id: data?.item_list_id || 0,
      item_list_name: data?.item_list_name || "",
      items: data?.items?.map((item) => ({
        ...item,
        item_brand: item?.item_brand || "vale-saude-b2c",
        quantity: item?.quantity || 1,
        index: item?.index || 1,
      })),
    } as SelectItem,
  };
}
