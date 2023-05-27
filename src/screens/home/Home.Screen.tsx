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
      Home
    </div>
  );
};

export default Home;
