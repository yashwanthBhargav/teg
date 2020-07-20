import * as React from "react";
import { UserAuth } from "../custom-types";
import { USER_AUTH_KEY } from "./local-storage";
import { DEFAULT_USER_AUTH } from "./consts";
/** Custom types */
/** Utils */
const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = React.useState(initialState);
  const setAuthStatus = (userAuth: UserAuth) => {
    window.localStorage.setItem(USER_AUTH_KEY, JSON.stringify(userAuth));
    setAuth(userAuth);
  };
  const setUnauthStatus = () => {
    window.localStorage.clear();
    setAuth(DEFAULT_USER_AUTH);
  };
  return {
    auth,
    setAuthStatus,
    setUnauthStatus,
  };
};
export default useAuthHandler;
