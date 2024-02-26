import { User } from "src/core/domain/data/entities/User";
import packageJson from "../../../../../../../../package.json";
import { Event } from "../../../../domain/data/entities/event";

export type PageView = {
  pagePath: string;
  variation?: string;
  geoRegion?: string;
  pageID?: string;
  area?: "b2c";
  segment?: string;
  businessFront?: "vale-saude-b2c";
  category?: "vale-saude-b2c";
  subCategory?: string;
  environment?: string;
  platform?: string;
};

export const patternRandomPathID = "4xxx-yxxx-xxxxxxxxxxxx";

export function createPageViewData(
  data?: PageView,
  user?: User
): Event<PageView> {
  function mobileDeviceDetection(): boolean {
    if (navigator.platform.indexOf("Android") !== -1) return true;
    if (navigator.platform.indexOf("iPhone") !== -1) return true;

    return false;
  }

  const autoEnvironmentDetection = mobileDeviceDetection()
    ? navigator.platform
    : "web";

  return {
    event: "page_view",
    page: {
      pagePath: data?.pagePath || "",
      variation: data?.variation || "",
      geoRegion: data?.geoRegion || "",
      pageID: data?.pageID || "",
      area: data?.area || "b2c",
      segment: data?.segment || "ecommerce",
      businessFront: data?.businessFront || "vale-saude-b2c",
      category: data?.category || "vale-saude-b2c",
      subCategory: data?.subCategory || "",
      environment: data?.environment || autoEnvironmentDetection,
      platform:
        data?.platform ||
        navigator.platform ||
        `vida-v-web:${packageJson.version}`,
    },
    user,
  };
}
