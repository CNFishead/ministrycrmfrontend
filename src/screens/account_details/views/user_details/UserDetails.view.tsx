import React from "react";
import styles from "./UserDetails.module.scss";
import { Form, Input } from "antd";
import Layout from "antd/es/layout/layout";
import { useDispatch, useSelector } from "react-redux";
import getMe from "@/redux/actions/user/getMe";
import { RootState } from "@/redux/store";
import User from "@/types/User";

const UserDetails = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {
    userDetails: { user = {} as User },
  } = useSelector((state: RootState) => state.user);
  React.useEffect(() => {
    // if the user object is empty
    if (Object.keys(user).length === 0) {
      // get the user data
      dispatch(getMe() as any);
    }
  }, [user]);
  return (
    <div className={styles.container}>
      <Form form={form} layout="vertical" className={styles.contentContainer}>
        {/* firstName and lastName should be on the same line */}
        <div className={styles.nameContainer}>
          <Form.Item name="firstName" className={styles.inputParent}>
            <Input type="text" placeholder="First Name" className={styles.input} />
          </Form.Item>
          <Form.Item name="lastName" className={styles.inputParent}>
            <Input type="text" placeholder="Last Name" className={styles.input} />
          </Form.Item>
        </div>
        <Form.Item name="username">
          <Input type="text" placeholder="Username" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Phone Number" name="phoneNumber">
          <Input type="text" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserDetails;
