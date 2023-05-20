import "../styles/globals.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import { USER_LOGIN_SUCCESS } from "@/redux/constants/authConstants";
import setAuthToken from "../utils/setAuthToken";
import SocketWrapper from "@/layout/SocketWrapper.wrapper";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "../styles/nprogress.css";
import cookie from "cookie";
import User from "@/types/User";
import { SELECT_MINISTRY_SUCCESS } from "@/redux/constants/ministryConstants";

export default function MyApp({ Component, pageProps }: AppProps) {
  // show progress bar on route change
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());
  // console.log(`App started in ${process.env.ENV} mode`);

  const { user = {} as User } = store.getState().auth;
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
      minimum: 0.3,
      speed: 500,
      easing: "ease",
      trickle: true,
      trickleSpeed: 800,
    });
    // check the localStorage for a user object if it exists dispatch a login action
    // also use the cookie, cause it could be there.
    if (!user) {
      const localStorageUser = localStorage.getItem("user") || cookie.parse(document.cookie).user;
      const localStorageMinistry = localStorage.getItem("ministry");
      // set the user in store to the user object in localStorage
      store.dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: JSON.parse(localStorageUser),
      });
      // set the ministry in store to the ministry object in localStorage
      if (localStorageMinistry) {
        store.dispatch({
          type: SELECT_MINISTRY_SUCCESS,
          payload: JSON.parse(localStorageMinistry!),
        });
      }
      setAuthToken(JSON.parse(localStorageUser).token);
    }
    setAuthToken(user.token);
  }, [store, user]);

  return (
    <ReduxProvider store={store}>
      <SocketWrapper>
        <Component {...pageProps} />
      </SocketWrapper>
    </ReduxProvider>
  );
}
