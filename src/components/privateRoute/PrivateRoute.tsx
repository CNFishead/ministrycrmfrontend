import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

//make a type with children as a prop
type Props = {
  children: React.ReactNode;
  permissions: string[];
};
/**
 * @description - A private route component that checks if the user is logged in and has the required permission to access the route
 * @param {Component} children - React children, in this case, the component to be rendered
 * @param {String} permissions - The permission to be checked against the user's permissions
 *
 * @returns {JSX.Element}
 *
 * @author Austin Howard
 * @since 1.0.0
 * @version 1.0.2
 * @lastModified 2/14/2023
 * @lastModifiedBy Austin Howard
 */
const PrivateRoute = (props: Props) => {
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  // if the user is not logged in, redirect to the login page
  if (!user && typeof window !== "undefined") router.push("/auth/login");

  if (user) {
    const hasPermission = props.permissions.some((permission: string) => user[permission]);
    if (typeof window !== "undefined" && !hasPermission) router.push("/");
  }
  if (!user && typeof window !== "undefined") {
    return <></>;
  } else return <>{props.children}</>;
};

export default PrivateRoute;
