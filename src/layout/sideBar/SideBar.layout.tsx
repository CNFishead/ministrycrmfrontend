import React from "react";
import styles from "./SideBar.module.scss";
import { navigation } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSideBar } from "@/redux/actions/interface/toggleSideBar";
import { useSelector } from "react-redux";

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
          src="/images/TruthcastingSaltLogo.png"
          width={20}
          height={50}
          className={styles.logo + " " + styles.saltLogo}
          style={{
            objectFit: "contain",
          }}
          alt="logo"
        />

        <Image
          src="/images/TruthcastingLogo.png"
          width={160}
          height={50}
          className={styles.logo + " " + styles.truthcastingLogo}
          style={{
            objectFit: "contain",
          }}
          alt="logo"
        />
      </div>

      {Object.values(navigation).map((item) => {
        return (
          <div key={item.title} className={`${styles.group}`}>
            <h2 className={styles.header}>{item.title}</h2>
            <div className={styles.links}>
              {item.links &&
                Object.values(item.links).map((subItem) => {
                  return (
                    <Link
                      key={subItem.title}
                      href={subItem.link}
                      className={`${styles.link} ${props?.page?.title === subItem.title && styles.active}`}
                    >
                      <span className={styles.icon}>{subItem.icon}</span>
                      <span className={styles.text}>{subItem.title}</span>
                    </Link>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SideBar;
