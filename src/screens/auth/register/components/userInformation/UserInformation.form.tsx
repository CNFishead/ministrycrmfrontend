import { Col, Form, Input, InputNumber, Row } from "antd";
import React from "react";

interface Props {
  // form any antd form
  form: any;
  // onFinish is any function, as this form may or may not submit
  onFinish?: () => void;
}
const UserInformation = (props: Props) => {
  return (
    <Form form={props.form} onFinish={props.onFinish}>
      <Row justify={'space-between'}>
        <Col span={11}>
          <Form.Item name={["user", "firstName"]} rules={[{ required: true, message: "Please enter your first name" }]}>
            <Input type="text" placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item name={["user", "lastName"]}>
            <Input type="text" placeholder="Last Name" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name={["user", "email"]}>
        <Input type="email" placeholder="Email Address" />
      </Form.Item>
      <Form.Item name={["user", "phoneNumber"]}>
        <InputNumber
          style={{ width: "100%" }}
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
          // addonBefore="Phone Number"
        />
      </Form.Item>
      <Form.Item name={["user", 'username']}>
        <Input type="text" placeholder="Username" />
      </Form.Item>
      <Form.Item name={["user", 'password']}>
       <Input type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item name={["user", 'confirmPassword']}>
        <Input type="password" placeholder="Confirm Password" />
      </Form.Item>
      <Form.Item name={["user", "sex"]}>

      </Form.Item>
      
    </Form>
  );
};

export default UserInformation;
