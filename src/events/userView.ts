import { Components } from "../../../../domain/data/entities/components";
import { Event } from "../../../../domain/data/entities/event";
import { toFixedPrice } from "../../../utils/priceToFixed";

export type UserView = {
  component: Components;
  step: string;
  description: string;
  value?: number;
};

export function createUserViewData(data?: UserView): Event<UserView> {
  const price = toFixedPrice(data?.value || 0);
  return {
    event: "user_view",
    event_details: {
      component: data?.component || "",
      step: data?.step || "",
      description: data?.description || "",
      value: price,
    } as UserView,
  };
}
