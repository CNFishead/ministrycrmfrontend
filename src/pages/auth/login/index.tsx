import Auth from "@/screens/auth/login/Login.view";
import Meta from "@/components/meta/Meta.component";
import cookie from "cookie";
import axios from "@/utils/axios";

export default function AuthScreen() {
  return (
    <>
      <Meta title="Shepherd | Login" />
      <Auth />
    </>
  );
}

// getServerSideProps to authenticate the user
export const getServerSideProps = async (ctx: any) => {
  // check for a token in the url
  const token = ctx.query.token;
  console.log(`token: ${token}`);
  if (token) {
    // attempt to find the user by making a request to the api
    try {
      const { data } = await axios.post(`/api/getMe`, token);
      console.log(data);
      // if the user is found, create a cookie with the user data
      ctx.res.setHeader(
        "Set-Cookie",
        cookie.serialize("user", JSON.stringify(data), {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7, // 1 week
          sameSite: "strict",
          path: "/",
        })
      );
    } catch (error) {
      // on error console log the error, do nothing
      // console.log(error);
    }
  }
  // redirect the user to the homepage
  return {
    props: {},
  };
};
