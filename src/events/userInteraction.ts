import { Actions } from "../../../../domain/data/entities/actions";
import { Components } from "../../../../domain/data/entities/components";
import { Event } from "../../../../domain/data/entities/event";
import { toFixedPrice } from "../../../utils/priceToFixed";

export type UserInteraction = {
  component: Components;
  action?: Actions;
  step: string;
  description: string;
  value?: number;
};

export function createUserInteractionData(
  data?: UserInteraction
): Event<UserInteraction> {
  const price = toFixedPrice(data?.value || 0);
  return {
    event: "user_interaction",
    event_details: {
      component: data?.component || "",
      action: data?.action || "click",
      step: data?.step || "",
      description: data?.description || "",
      value: price,
    } as UserInteraction,
  };
}
