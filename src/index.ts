import sendEvent from "./strategies";

/**
 * @deprecated Consider using sendEvent import directly instead
 * @example
 * ...
 * sendEvent.purchase(...)
 */
export function useGTracking() {
  return { sendEvent };
}

export default sendEvent;
