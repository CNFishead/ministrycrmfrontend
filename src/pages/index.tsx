import PageLayout from "@/layout/page/Page.layout";
import { navigation } from "@/data/navigation";
import { useMediaQuery } from "react-responsive";
import { store } from "@/redux/store";
import { checkAuthorization } from "@/components/privateRoute/PrivateRouteV2";
import { USER_LOGIN_SUCCESS } from "@/redux/constants/authConstants";
import User from "@/types/User";
import cookie from "cookie";
import { useSelector } from "react-redux";
import React from "react";

interface Props {
  isAuthenticated: boolean;
}
export default function Home(props: Props) {
  // get the size of the screen using react-responsive useMediaQuery hook
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { user = {} as User } = useSelector((state: any) => state.auth);
  React.useEffect(() => {
    // check if the user is authenticated
  }, [user]);
  return (
    <PageLayout pages={[navigation({ user }).home.links.home]} largeSideBar={isMobile}>
      <h1>Home</h1>
    </PageLayout>
  );
}

// use server side props to set the user in the store
export const getServerSideProps = async (ctx: any) => {
  // check the cookie for a user object if it exists dispatch a login action
  const cookies = cookie.parse(ctx.req.headers.cookie || "");
  const user = cookies.user;
  // console.log(`user: ${user}`);
  if (!user) {
    // if the necessary data is not found in the cookie, redirect the user to the login page
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  // check if the user has the correct permissions to access the page
  const isAuthorized = await checkAuthorization(JSON.parse(user), ["admin", "user"]);
  if (!isAuthorized) {
    // if the user does not have the correct permissions to access the page, redirect the user to the homepage
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
