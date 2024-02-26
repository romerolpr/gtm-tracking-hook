import {
  createUserExeptionData,
  UserExeption,
} from "../../events/userException";

export function dispatchEventUserException(payload: UserExeption) {
  return createUserExeptionData(payload);
}
