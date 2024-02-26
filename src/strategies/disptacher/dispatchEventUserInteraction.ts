import {
  createUserInteractionData,
  UserInteraction,
} from "@modules/partners/gtm/view/hooks/tracking/events/userInteraction";

export function dispatchEventUserInteraction(payload: UserInteraction) {
  return createUserInteractionData(payload);
}
