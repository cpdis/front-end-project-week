import { userConstants } from "../constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_:
      return { registering: true };
    case userConstants.REGISTER_:
      return {};
    case userConstants.REGISTER_:
      return {};
    default:
      return state;
  }
}
