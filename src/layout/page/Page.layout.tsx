import Alert from "@/components/alert/Alert.component";
import Meta from "@/components/meta/Meta.component";
import Navbar from "../navbar/Navbar.layout";
import SideBar from "@/layout/sideBar/SideBar.layout";
import styles from "./Page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createConnection } from "@/redux/actions/Socket/createConnection";
import React, { useEffect } from "react";
import Animatable from "../animatable/Animatable.layout";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSideBar } from "@/redux/actions/interface/toggleSideBar";
import Image from "next/image";
import { RootState } from "@/redux/store";
import Control from "../control/Control.layout";
import logout from "@/redux/actions/auth/logout";
import { BiLogOutCircle } from "react-icons/bi";
import { AiFillControl } from "react-icons/ai";
import Auth from "@/screens/auth/Auth.view";
import { Route } from "antd/es/breadcrumb/Breadcrumb";
import User from "@/types/User";

//make a type with children as a prop
type Props = {
  children: React.ReactNode;
  pages: Array<{ title: string; link?: string; icon?: React.ReactNode }>;
  largeSideBar?: boolean;
  controlNav?: Array<{
    icon: React.ReactNode;
    children: React.ReactNode;
  }>;
  meta?: {
    title: string;
    description: string;
    keywords: string;
    url: string;
    image: string;
  };
  view?: string;
};

const Page = (props: Props) => {
  const dispatch = useDispatch();
  const {
    interface: { sidebarClosed, controlLayoutOpen },
  } = useSelector((state: RootState) => state.interface);
  // pull the user data from the redux store
  const { user: loggedInData = {} as User } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Meta
        title={props.meta?.title}
        description={props.meta?.description}
        keywords={props.meta?.keywords}
        url={props.meta?.url}
        image={props.meta?.image}
      />
      <div className={`${styles.container} ${!props.largeSideBar ? "" : styles.small} ${sidebarClosed && styles.sideBarActive}`}>
        {loggedInData ? (
          <>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <div
                  className={styles.hamburger}
                  onClick={() => {
                    // toggleSideBar();
                  }}
                >
                  <RxHamburgerMenu />
                </div>

                <Breadcrumb
                  className={styles.breadcrumb}
                  // itemRender={(route: any, params: any, routes: any, paths: any) => (
                  //   <Link
                  //     href={route.path}
                  //     className={`${routes[routes.length - 1].breadcrumbName === route.breadcrumbName && styles.active}`}
                  //   >
                  //     {route.breadcrumbName}
                  //   </Link>
                  // )}
                  items={
                    props.pages?.map((page) => {
                      return {
                        title: page.title,
                        href: page.link || "",
                      };
                    }) as any[]
                  }
                />
              </div>

              <div className={styles.headerRight}>
                <div className={styles.headerRight}>
                  <div className={styles.userContainer}>
                    <div className={styles.user}>
                      {/* <Image
                        src={loggedInData.profileImageUrl}
                        width={40}
                        height={40}
                        className={styles.profilePicture}
                        style={{
                          objectFit: "cover",
                        }}
                        alt="logo"
                      /> */}
                      <div className={styles.userInfo}>
                        {/* <h1>{loggedInData.profile.organizationName} </h1> */}
                        <p>
                          {loggedInData.firstName} {loggedInData.lastName}
                        </p>
                      </div>
                    </div>

                    <BiLogOutCircle
                      className={styles.logoutIcon}
                      onClick={() => {
                        logout();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.sideBar}>{props.pages && <SideBar page={props.pages[0]} large={props.largeSideBar} />}</div>
            <div
              className={`${styles.content} ${controlLayoutOpen && styles.controlContainerActive} ${
                props.controlNav && styles.controlBarActive
              }`}
            >
              {props.controlNav && (
                <>
                  <div className={styles.controlContainer}>
                    <Control navigation={props.controlNav} />
                  </div>
                  <div
                    className={styles.controlToggleBtn}
                    // onClick={() => toggleControlLayout()}
                  >
                    <AiFillControl />
                  </div>
                </>
              )}
              <div className={styles.childrenContainer}>
                <Alert />
                {props.children}
              </div>
            </div>
          </>
        ) : (
          <>
            <Alert />
            <Auth />
          </>
        )}
      </div>
    </>
  );
};

export default Page;
