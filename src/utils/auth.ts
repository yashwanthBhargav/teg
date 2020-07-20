import { USER_AUTH_KEY } from "./local-storage";
import {
    DEFAULT_USER_AUTH
} from "./consts";
import { UserAuth } from "../custom-types";
/** Return user auth object from local storage value */
export const getStoredUserAuth = (): UserAuth => {
    const auth = window.localStorage.getItem(USER_AUTH_KEY);
    if (auth) {
        return JSON.parse(auth);
    }
    return DEFAULT_USER_AUTH;
};