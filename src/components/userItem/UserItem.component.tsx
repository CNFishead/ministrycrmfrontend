import User from "@/types/User";
import React from "react";
import styles from "./UserItem.module.scss";

interface Props {
  user: User;
}

const UserItem = (props: Props) => {
  return <div className={styles.container}></div>;
};

export default UserItem;
