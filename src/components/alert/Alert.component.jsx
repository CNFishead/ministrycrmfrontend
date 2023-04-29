import React from "react";
import { useSelector } from "react-redux";
import styles from "./Alert.module.scss";
import { Alert } from "antd";


export default () => {
  // App State
  const { alerts } = useSelector((state) => state.alert);
  return (
    <div className={styles.alertWrapper}>
      {alerts.map((alert) => (
        <Alert key={alert.id} className={`alert`} type={alert.alertType} description={alert.message} showIcon />
      ))}
    </div>
  );
};
