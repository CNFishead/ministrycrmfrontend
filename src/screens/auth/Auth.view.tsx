import styles from "./Auth.module.scss";
import Image from "next/image";
// import { Button } from 'antd'
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAbsoluteUrl } from "@/utils/getAbsoluteUrl";
import { Input, Form, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, LockFilled } from "@ant-design/icons";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import login from "@/redux/actions/auth/login";
type Props = {
  fullUrl?: string;
};

const Auth = (props: Props) => {
  const [form] = Form.useForm();
  const router = useRouter();
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // check if the user is logged in
    // if they are, redirect them to the dashboard
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  const onFinish = (values: any) => {
    // console.log("Success:", values);
    // dispatch the login action
    dispatch(login(values) as any);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* <div className={styles.logoContainer}>
          <p className={styles.logoText}>Shepherd's CRM</p>
        </div> */}
        <p className={styles.text}>
          <span>Welcome</span>
          <br />
          Please login to your admin panel to continue
        </p>
        <div className={styles.formContainer}>
          <Form className={styles.form} form={form}>
            <div className={styles.inputContainer}>
              <Input placeholder="input Email" name="email" type="email" />
            </div>
            <div className={styles.inputContainer}>
              {/* label */}
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="input password"
                  name="password"
                  iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  // disalbe the browser from auto completing the password
                  autoComplete="new-password"
                />
              </Form.Item>
            </div>
            <div className={styles.buttonContainer}>
              <Button className={styles.button} icon={<LockFilled />} onClick={onFinish}>
                Login
              </Button>
            </div>
          </Form>
          <div className={styles.forgotPasswordContainer}>
            <Link href="/forgot-password">
              <p className={styles.forgotPassword}>Forgot Password?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
