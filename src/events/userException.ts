import { Event } from "../../../../domain/data/entities/event";
import { toFixedPrice } from "../../../utils/priceToFixed";

export type UserExeption = {
  fatal: boolean;
  step: string;
  description: string;
  value?: number;
};

export function createUserExeptionData(
  data?: UserExeption
): Event<UserExeption> {
  const price = toFixedPrice(data?.value || 0);
  return {
    event: "exception",
    event_details: {
      step: data?.step || "",
      description: data?.description || "",
      value: price,
      fatal: data?.fatal || Boolean(false),
    } as UserExeption,
  };
}
