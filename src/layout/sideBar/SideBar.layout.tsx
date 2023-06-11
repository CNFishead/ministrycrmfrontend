import React from "react";
import styles from "./SideBar.module.scss";
import { navigation } from "@/data/navigation";
import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSideBar } from "@/redux/actions/interface/toggleSideBar";
import { useSelector } from "react-redux";
import User from "@/types/User";

//make a type with children as a prop
type Props = {
  page: { title: string };
  large?: boolean;
};
const SideBar = (props: Props) => {
  const {
    interface: { sidebarClosed },
    // connectedUsers: { users },
  } = useSelector((state: any) => state.interface);
  const {
    selectedMinistry: { ministry },
  } = useSelector((state: any) => state.ministry);
  const { user } = useSelector((state: any) => state.auth);
  return (
    <div className={`${styles.container} ${!props.large ? "" : styles.small}`}>
      <div className={styles.logoContainer}>
        {sidebarClosed && (
          <div
            className={styles.hamburger}
            onClick={() => {
              toggleSideBar();
            }}
          >
            <RxHamburgerMenu />
          </div>
        )}

        <Image
          src="/images/ShepherdsCMSLogo.png"
          width={30}
          height={50}
          className={styles.logo + " " + styles.saltLogo}
          style={{
            objectFit: "contain",
          }}
          alt="logo"
        />

        <Image
          src={"/images/ShepherdsCMSLogo.png"}
          width={75}
          height={50}
          className={styles.logo + " " + styles.truthcastingLogo}
          style={{
            objectFit: "contain",
          }}
          alt="logo"
        />
        {!props.large && <p>Shepherds CMS</p>}
      </div>

      {Object.values(navigation({ user })).map((item: any, indx) => {
        return (
          <div key={indx + item.title}>
            {!item?.hidden && (
              <div key={item.title} className={`${styles.group}`}>
                <>
                  <h2 className={styles.header}>{item.title}</h2>
                  <div className={styles.links}>
                    {item.links &&
                      Object.values(item.links)
                        .filter((i: any) => !i.hidden)
                        .map((subItem: any, indx: number) => {
                          return (
                            <Link
                              key={subItem.title + indx}
                              href={subItem.link}
                              className={`${styles.link} ${props.page?.title === subItem.title && styles.active} ${
                                subItem.pulse && styles.pulse
                              }`}
                              onClick={() => toggleSideBar()}
                            >
                              <span className={styles.icon}>{subItem.icon}</span>
                              <span className={styles.text}>{subItem.title}</span>
                            </Link>
                          );
                        })}
                  </div>
                </>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default SideBar;
