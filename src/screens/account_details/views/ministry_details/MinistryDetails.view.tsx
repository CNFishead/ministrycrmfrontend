import React from "react";
import styles from "./MinistryDetails.module.scss";
import { Button, Card, Form, Input, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import getMe from "@/redux/actions/user/getMe";
import { RootState } from "@/redux/store";
import User from "@/types/User";
import { FaSave } from "react-icons/fa";
import updateUser from "@/redux/actions/user/updateUser";
import PhotoUpload from "@/components/photoUpload/PhotoUpload.component";
import Ministry from "@/types/Ministry";

interface Props {
  ministry?: Ministry;
  dispatch: any;
  updateLoading: boolean;
  loading: boolean;
}
const MinistryDetails = (props: Props) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (!props.ministry) return;
    // otherwise set form values
    form.setFieldsValue({ ...props.ministry });
  }, [props.ministry]);

  const onFinish = (values: any) => {
    props.dispatch(updateUser(values) as any);
  };

  if (props.loading) return <div>Loading...</div>;
  return (
    <Card title="Main Ministry Details" className={styles.container}>
      <Form form={form} layout="vertical" className={styles.contentContainer} onFinish={() => onFinish(form.getFieldsValue())}>
        <div className={styles.imageUploadContainer}>
          <div className={styles.imageContainer}>
            <PhotoUpload
              listType="picture-card"
              isAvatar={true}
              action={`${process.env.API_URL}/upload`}
              default={props.ministry?.ministryImageUrl}
              description="Upload a Ministry Banner"
            />
          </div>
        </div>
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
            <Button htmlType="submit" type="primary" className={styles.button} loading={props.updateLoading} icon={<FaSave />}>
              Save
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};

export default MinistryDetails;
