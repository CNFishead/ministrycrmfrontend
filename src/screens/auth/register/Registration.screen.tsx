import React from "react";
import styles from "./Registration.module.scss";
import { Button, Col, Form, Row } from "antd";
import Link from "next/link";
import Loader from "@/components/loader/Loader.component";
import UserInformation from "./components/userInformation/UserInformation.form";
import { errorHandler } from "@/utils/errorHandler";
import { useDispatch } from "react-redux";

const Registration = () => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState("");
  const [form] = Form.useForm();
  console.log(form.getFieldsValue());

  const steps = [
    {
      component: (
        <>
          <UserInformation form={form} />
        </>
      ),
      nextButtonText: "Next",
      headerText: "Welcome to Shepherds CMS!",
      subHeaderText:
        "Shepherd's CMS is a content management system that allows you to create, edit, and delete content that matters to your church. The platform is designed to be simple and easy to use, so that you can focus on what matters most. Bringing people to Jesus.",
      helperText: "Lets get started by getting some information about you.",
      // check if the form is valid
      nextButtonDisabled: !form.getFieldValue("user.firstName"),
      hideBackButton: true,
      nextButtonAction: () => {},
      hideButtons: false,
    },
  ];

  const confirmRegistration = async () => {
    setLoading("confirm");
    try {
      await form.validateFields();
      // check if passwords match
      const { password, confirmPassword } = form.getFieldsValue();
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch, undefined, true);
    }
    setLoading("");
  };

  return (
    <Row className={styles.container}>
      <Col span={12} className={styles.leftContainer}>
        <div className={styles.registrationScreenContainer}>
          <div className={styles.signupFormWrapper}>
            <div className={styles.signupFormContainer} id="sign-up-form-container">
              {loading && loading !== "" ? <Loader /> : steps[activeStep].component}
              {loading === "" && !steps[activeStep].hideButtons && (
                <div className={styles.signupButtons}>
                  {!steps[activeStep].hideBackButton && (
                    <Button className={styles.backButton} onClick={() => setActiveStep(activeStep - 1)}>
                      Back
                    </Button>
                  )}
                  <Button
                    className={styles.nextButton}
                    disabled={steps[activeStep].nextButtonDisabled}
                    onClick={steps[activeStep].nextButtonAction || (() => setActiveStep(activeStep + 1))}
                  >
                    {steps[activeStep].nextButtonText}
                  </Button>
                </div>
              )}
            </div>
            <div className={styles.signupFooterContainer}>
              <p className={styles.signupFooterText}>
                Already have an account?{" "}
                <Link href="/login" className="sign-up-footer-link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col span={12} className={styles.rightContainer}>
        <div className={styles.backgroundImageContainer}></div>
        <div className={styles.welcomeContainer}>
          <h1 className={styles.welcomeTitle}> {steps[activeStep].headerText}</h1>
          <p className={styles.signupHelperText}>{steps[activeStep].subHeaderText}</p>
          {loading === "" && <p className={styles.welcomeText}>{steps[activeStep].helperText}</p>}
        </div>
      </Col>
    </Row>
  );
};

export default Registration;
