import React from "react";
import styles from "./ForgotPassword.module.scss";
import { Button, Form, Image, Input } from "antd";
import Link from "next/link";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { useDispatch } from "react-redux";
import { setAlert } from "@/redux/actions/alert";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    setLoading(true);
    // fire off the request to the api
    try {
      const { data } = await axios.post("/auth/forgot-password", values);
      console.log(data);
      setLoading(false);
      dispatch(setAlert("email sent", "success") as any);
    } catch (error) {
      setLoading(false);
      console.log(error);
      errorHandler(error, dispatch);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src="/images/ShepherdsCMSLogo.png" width={125} height={125} preview={false} />
          {/* <p className={styles.logoText}>Shepherd's CRM</p> */}
        </div>
        <p className={styles.text}>Forgot your password? Enter your email to reset it.</p>
        <div className={styles.formContainer}>
          <Form className={styles.form} form={form}>
            <Form.Item
              className={styles.inputContainer}
              name="userId"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
            >
              <Input name="userId" type="email" prefix={"Email"} />
            </Form.Item>
            <div className={styles.buttonContainer}>
              <Button
                className={styles.button}
                // icon={<LockFilled />}
                onClick={() => onFinish(form.getFieldsValue())}
                loading={loading}
              >
                Reset Password
              </Button>
            </div>
          </Form>
          <div className={styles.forgotPasswordContainer}>
            <Link href="/auth/login">
              <p className={styles.forgotPassword}>Already a member?</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
