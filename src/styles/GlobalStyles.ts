import { browserName } from "react-device-detect";

export const isNavigatorSafari = browserName === "Mobile Safari";
export const isNavigatorChrome = browserName === "Chrome";
