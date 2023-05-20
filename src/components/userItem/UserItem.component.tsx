import User from "@/types/User";
import React from "react";
import styles from "./UserItem.module.scss";
import { Avatar, Card, Divider } from "antd";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
interface Props {
  user: User;
}

const UserItem = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.userImageContainer}>
          <Avatar src={props.user?.profileImageUrl} alt="user-profile-image" size={64} />
        </div>
        <div className={styles.userDetailsContainer}>
          <div className={styles.header}>
            <div className={styles.channelDetails}>
              <p className={`ellipsis ${styles.name}`}>{props.user?.fullName}</p>
            </div>
          </div>
        </div>
        <div className={styles.miscInfoContainer}>
          <div className={styles.miscInfo}>
            <p>
              <strong>Email Address:</strong> {props.user?.email}
            </p>
            <div>
              {props.user?.phoneNumber && (
                <>
                  <strong>Phone: </strong>
                  {formatPhoneNumber(props.user?.phoneNumber)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
