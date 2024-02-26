import {
  createPageViewData,
  PageView,
} from "@modules/partners/gtm/view/hooks/tracking/events/pageView";
import { User } from "src/core/domain/data/entities/User";

export function dispatchEventPageView(payload: PageView, user?: User) {
  return createPageViewData(payload, user);
}
