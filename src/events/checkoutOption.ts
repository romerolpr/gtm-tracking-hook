import { CheckoutOptions } from "../../../../domain/data/entities/checkoutOptions";
import { Event } from "../../../../domain/data/entities/event";
import { FlowOptions } from "../../../../domain/data/entities/flowOptions";

export type CheckoutOption = {
  actionField: {
    step: string;
    option?: FlowOptions | CheckoutOptions;
  };
};

export function createCheckoutOptionData(
  data?: CheckoutOption
): Event<CheckoutOption> {
  return {
    event: "checkoutOption",
    ecommerce: {
      checkout_option: {
        actionField: {
          step: data?.actionField.step || "",
          option: data?.actionField?.option || "",
        },
      } as CheckoutOption,
    },
  };
}
