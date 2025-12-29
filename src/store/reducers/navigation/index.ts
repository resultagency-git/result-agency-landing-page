import { ActionWorkSpaceProps } from "./props";

const INITIAL_STATE = {};

export default function reducer(
  state = INITIAL_STATE,
  action: ActionWorkSpaceProps
) {
  if (action.type === "SET_CLINIC_WORKSPACE") {
    return action.navigation;
  }

  return state;
}
