import React from "react";
import styles from "./AccountDetails.module.scss";
import UserDetails from "./views/user_details/UserDetails.view";
import MinistryDetails from "./views/ministry_details/MinistryDetails.view";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import getMe from "@/redux/actions/user/getMe";
import axios from "@/utils/axios";

const AccountDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <UserDetails  />
      </div>
      <div className={styles.contentContainer}>
        {/* <MinistryDetails ministry={user?.ministry} loading={loading || false} updateLoading={updateLoading || false} dispatch={dispatch} /> */}
      </div>
    </div>
  );
};

export default AccountDetails;
