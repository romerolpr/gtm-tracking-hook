import { Events } from "@modules/partners/gtm/domain/data/entities/eventsTypes";
import { AddToCart } from "@modules/partners/gtm/view/hooks/tracking/events/addToCart";
import { Checkout } from "@modules/partners/gtm/view/hooks/tracking/events/checkout";
import { CheckoutOption } from "@modules/partners/gtm/view/hooks/tracking/events/checkoutOption";
import { PageView } from "@modules/partners/gtm/view/hooks/tracking/events/pageView";
import { ProductClick } from "@modules/partners/gtm/view/hooks/tracking/events/productClick";
import { Purchase } from "@modules/partners/gtm/view/hooks/tracking/events/purchase";
import { UserInteraction } from "@modules/partners/gtm/view/hooks/tracking/events/userInteraction";
import { User } from "src/core/domain/data/entities/User";
import { AddToCartGA4 } from "../events/addToCartGA4";
import { ProductImpression } from "../events/productImpression";
import { SelectItem } from "../events/seletItem";
import { UserExeption } from "../events/userException";
import { ViewItemList } from "../events/viewItemList";
import { ViewItemListGAU } from "../events/viewItemListGAU";
import { dispatchEventAddToCart } from "./disptacher/dispatchEventAddToCart";
import { dispatchEventAddToCartGA4 } from "./disptacher/dispatchEventAddToCartGA4";
import { dispatchEventCheckout } from "./disptacher/dispatchEventCheckout";
import { dispatchEventCheckoutOption } from "./disptacher/dispatchEventCheckoutOption";
import { dispatchEventUserException } from "./disptacher/dispatchEventException";
import { dispatchEventPageView } from "./disptacher/dispatchEventPageView";
import { dispatchEventProductClick } from "./disptacher/dispatchEventProductClick";
import { dispatchEventProductImpression } from "./disptacher/dispatchEventProductImpression";
import { dispatchEventPurchase } from "./disptacher/dispatchEventPurchase";
import { dispatchEventUserInteraction } from "./disptacher/dispatchEventUserInteraction";
import { dispatchEventViewItemListGA4 } from "./disptacher/dispatchEventViewItemList";
import { dispatchEventViewItemList } from "./disptacher/dispatchEventViewItemListGAU";
import { dispatchSelectItem } from "./disptacher/dispatchSelectItem";

function createEventStrategies() {
  function createEventCheckoutDispatcher(data: Checkout) {
    const event = dispatchEventCheckout(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventCheckoutOptionDispatcher(data: CheckoutOption) {
    const event = dispatchEventCheckoutOption(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventPurchaseDispatcher(data: Purchase) {
    const event = dispatchEventPurchase(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventUserInteractionDispatcher(data: UserInteraction) {
    const event = dispatchEventUserInteraction(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventPageViewDispatcher(data: PageView, user?: User) {
    const event = dispatchEventPageView(data, user);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventAddToCartDispatcher(data: AddToCart) {
    const event = dispatchEventAddToCart(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventProductClickDispatcher(data: ProductClick) {
    const event = dispatchEventProductClick(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventProductImpressionDispatcher(data: ProductImpression) {
    const event = dispatchEventProductImpression(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventViewItemListGAUDispatcher(data: ViewItemListGAU) {
    const event = dispatchEventViewItemList(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventViewItemListDispatcher(data: ViewItemList) {
    const event = dispatchEventViewItemListGA4(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventUserExceptionDispatcher(data: UserExeption) {
    const event = dispatchEventUserException(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventSelectItemDispatcher(data: SelectItem) {
    const event = dispatchSelectItem(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  function createEventAddToCardGA4Dispatcher(data: AddToCartGA4) {
    const event = dispatchEventAddToCartGA4(data);

    if (window?.dataLayer) {
      window.dataLayer.push(event);
    }
  }

  return {
    // E-commerce
    [Events.CHECKOUT]: (data: Checkout) => createEventCheckoutDispatcher(data),
    [Events.CHECKOUT_OPTION]: (data: CheckoutOption) =>
      createEventCheckoutOptionDispatcher(data),
    [Events.PURCHASE]: (data: Purchase) => createEventPurchaseDispatcher(data),
    [Events.ADD_TO_CART]: (data: AddToCart) =>
      createEventAddToCartDispatcher(data),
    [Events.ADD_TO_CART_GA4]: (data: AddToCartGA4) =>
      createEventAddToCardGA4Dispatcher(data),
    [Events.PRODUCT_CLICK]: (data: ProductClick) =>
      createEventProductClickDispatcher(data),
    [Events.PRODUCT_IMPRESSION]: (data: ProductImpression) =>
      createEventProductImpressionDispatcher(data),
    [Events.VIEW_ITEM_LIST_GAU]: (data: ViewItemListGAU) =>
      createEventViewItemListGAUDispatcher(data),
    [Events.VIEW_ITEM_LIST]: (data: ViewItemList) =>
      createEventViewItemListDispatcher(data),
    [Events.SELECT_ITEM]: (data: SelectItem) =>
      createEventSelectItemDispatcher(data),

    // Interaction
    [Events.USER_INTERACTION]: (data: UserInteraction) =>
      createEventUserInteractionDispatcher(data),

    // Page View
    [Events.PAGE_VIEW]: (data: PageView, user?: User) =>
      createEventPageViewDispatcher(data, user),

    [Events.EXCEPTION]: (data: UserExeption) =>
      createEventUserExceptionDispatcher(data),
  };
}

const eventStrategies = createEventStrategies();

export default eventStrategies;
