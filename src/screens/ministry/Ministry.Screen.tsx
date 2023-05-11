import React from "react";
import styles from "./Ministry.module.scss";
import SearchWrapper from "@/layout/searchWrapper/SearchWrapper.layout";
import { AiOutlineUpload } from "react-icons/ai";

const Ministry = () => {
  return (
    <div className={styles.container}>
      <SearchWrapper
        buttons={[
          {
            icon: <AiOutlineUpload className={styles.icon} />,
            onClick: () => {
              // setUploadModalOpen(true);
            },
            type: "primary",
          },
        ]}
        filters={[
          {
            label: "Private",
            key: "isPublic;false",
          },
          {
            label: "Public",
            key: "isPublic;true",
          },
          {
            label: "Password Protected",
            key: "isPasswordProtected;true",
          },
          {
            label: "Paywall Protected",
            key: "isPaywallProtected;true",
          },
        ]}
        placeholder="Search for videos"
        queryKey="video-library"
        // total={totalData?.total}
      >
        <p>Hi</p>
      </SearchWrapper>
    </div>
  );
};

export default Ministry;
