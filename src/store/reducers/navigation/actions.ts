/* eslint-disable import/prefer-default-export */

import { ActionWorkSpaceProps, StoreNavigation } from "./props";

export function setStoreNavigation(
  navigation: StoreNavigation
): ActionWorkSpaceProps {
  return {
    navigation,
    type: "SET_NAVIGATION",
  };
}
