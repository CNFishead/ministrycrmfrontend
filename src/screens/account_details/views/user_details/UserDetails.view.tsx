import React from "react";
import styles from "./UserDetails.module.scss";
import { Button, Form, Input, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import getMe from "@/redux/actions/user/getMe";
import { RootState } from "@/redux/store";
import User from "@/types/User";
import { FaSave } from "react-icons/fa";
import updateUser from "@/redux/actions/user/updateUser";

const UserDetails = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {
    userDetails: { user = {} as User },
    userUpdate: { loading },
  } = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    // if the user object is empty
    // by checking if the keys length is less than 1
    if (Object.keys(user).length < 1) {
      // get the user data
      dispatch(getMe() as any);
    }
    if (user) {
      // set the form values
      form.setFieldsValue({ ...user });
    }
  }, [user]);

  const onFinish = (values: any) => {
    dispatch(updateUser(values) as any);
  };
  return (
    <div className={styles.container}>
      <Form form={form} layout="vertical" className={styles.contentContainer} onFinish={() => onFinish(form.getFieldsValue())}>
        {/* firstName and lastName should be on the same line */}
        <div className={styles.nameContainer}>
          <Form.Item name="firstName" className={styles.inputParent}>
            <Input type="text" placeholder="First Name" addonBefore="First Name" className={styles.input} />
          </Form.Item>
          <Form.Item name="lastName" className={styles.inputParent}>
            <Input type="text" placeholder="Last Name" addonBefore="Last Name" className={styles.input} />
          </Form.Item>
        </div>
        <Form.Item name="username" className={styles.inputParent}>
          <Input type="text" placeholder="Username" addonBefore="username" className={styles.input} />
        </Form.Item>
        <Form.Item name="email" className={styles.inputParent}>
          <Input type="text" addonBefore="Email" className={styles.input} />
        </Form.Item>
        <Form.Item name="phoneNumber" className={styles.inputParent}>
          <InputNumber
            style={{ width: "100%" }}
            className={styles.input}
            controls={false}
            formatter={(value: any) => {
              const phoneNumber = value.replace(/[^\d]/g, "");
              const phoneNumberLength = phoneNumber.length;
              if (phoneNumberLength < 4) {
                return phoneNumber;
              } else if (phoneNumberLength < 7) {
                return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
              }
              return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
            }}
            parser={(value: any) => value.replace(/[^\d]/g, "")}
            placeholder="Enter Phone Number"
            addonBefore="Phone Number"
          />
        </Form.Item>
        <div className={styles.buttonContainer}>
          <Form.Item>
            <Button htmlType="submit" type="primary" className={styles.button} loading={loading} icon={<FaSave />}>
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default UserDetails;
