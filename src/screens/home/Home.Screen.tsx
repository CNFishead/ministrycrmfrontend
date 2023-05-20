import React from "react";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Home = () => {
  const {
    selectedMinistry: { ministry },
  } = useSelector((state: RootState) => state.ministry);
  return (
    <div className={styles.container}>
      <div className={styles.dynamicBackgroundContainer} style={{ backgroundImage: `url(${ministry?.ministryImageUrl}` }}></div>
      Home
    </div>
  );
};

export default Home;
