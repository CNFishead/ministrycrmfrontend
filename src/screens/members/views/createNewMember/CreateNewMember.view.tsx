import React from "react";
import styles from "./CreateNewMember.module.scss";
import { Card, DatePicker, Divider, Form, Input, InputNumber, Radio, Select, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import createMember from "@/redux/actions/member/createMember";
import PhotoUpload from "@/components/photoUpload/PhotoUpload.component";
import { states } from "@/data/states";
import { countries } from "@/data/countries";
import Link from "next/link";

const CreateNewMember = () => {
  const [form] = Form.useForm();
  const [createFamilyModal, setCreateFamilyModal] = React.useState(true);
  const dispatch = useDispatch();
  const {
    selectedMinistry: { ministry },
    mainMinistry: { ministry: mainMinistry },
  } = useSelector((state: RootState) => state.ministry);

  const onFinish = (values: any) => {
    // ministry, if their isnt a selectedMinistry, then use the mainMinistry
    const ministryId = ministry ? ministry._id : mainMinistry._id;
    dispatch(createMember({ ...values, ministry: ministryId }) as any);
  };

  return (
    <div className={styles.container}>
      <Form
        form={form}
        layout="vertical"
        className={styles.contentContainer}
        onFinish={() => onFinish(form.getFieldsValue())}
        initialValues={{
          // set the default values for the form
          sex: "male",
          maritalStatus: "single",
          "location.country": "United States",
          "location.state": "TN",
          role: "member",
          isActive: true,
        }}
      >
        <Divider orientation="center">
          <Tooltip title={`Easily identify Members from their profile photo!`}>Profile Photo</Tooltip>
        </Divider>
        <div className={styles.imageUploadContainer}>
          <div className={styles.imageContainer}>
            <PhotoUpload
              name="profileImageUrl"
              listType="picture-card"
              isAvatar={true}
              form={form}
              action={`${process.env.API_URL}/upload`}
              default={form.getFieldsValue().profileImageUrl}
              placeholder="Upload a profile photo"
            />
          </div>
        </div>
        <Divider orientation="center">Member Information</Divider>
        {/* firstName and lastName should be on the same line */}
        <div className={styles.nameContainer}>
          <Form.Item
            name="firstName"
            className={styles.inputParent}
            rules={[{ required: true, message: "Please enter a first name" }]}
            label="First Name"
          >
            <Input type="text" placeholder="First Name" className={`${styles.input} ${styles.addon}`} />
          </Form.Item>
          <Form.Item name="lastName" className={styles.inputParent} label="Last Name">
            <Input type="text" placeholder="Last Name" className={styles.input} />
          </Form.Item>
          <Form.Item name="birthday" className={styles.inputParent} label="Birthday">
            <DatePicker placeholder="Birthday" className={styles.input} />
          </Form.Item>
          <Form.Item name="email" className={styles.inputParent} label="Email Address">
            <Input type="text" className={styles.input} />
          </Form.Item>
          <Form.Item name="sex" className={styles.inputParent} label="Sex">
            <Select placeholder="Sex/Gender" className={styles.input}>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="phoneNumber" className={styles.inputParent} label="Phone Number">
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
            />
          </Form.Item>
          <Form.Item name="maritalStatus" className={styles.inputParent} label="Marital Status">
            <Select placeholder="Marital Status" className={styles.input}>
              <Select.Option value="single">Single</Select.Option>
              <Select.Option value="married">Married</Select.Option>
              <Select.Option value="divorced">Divorced</Select.Option>
              <Select.Option value="widowed">Widowed</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className={styles.addressContainer}>
          {/* address information */}
          <Divider orientation="center">Address Information</Divider>
          <Form.Item name={["location", "address"]} className={styles.inputParent} label="Address">
            <Input type="text" placeholder="Address" className={styles.input} />
          </Form.Item>
          <Form.Item name={["location", "address2"]} className={styles.inputParent} label="Address Cont.">
            <Input type="text" placeholder="Address Continued" className={styles.input} />
          </Form.Item>
          <Form.Item name={["location", "city"]} className={styles.inputParent} label="City">
            <Input type="text" placeholder="City" className={styles.input} />
          </Form.Item>
          <Form.Item name={["location", "state"]} className={styles.inputParent} label="State">
            <Select
              placeholder="State"
              showSearch
              className={styles.input}
              filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
              options={states.map((state) => ({ label: `${state.name} (${state.abbreviation})`, value: state.abbreviation }))}
              optionFilterProp="children"
            ></Select>
          </Form.Item>
          <Form.Item name={["location", "zipCode"]} className={styles.inputParent} label="Zip Code">
            <Input type="text" placeholder="Zip Code" className={styles.input} />
          </Form.Item>
          <Form.Item name={["location", "country"]} className={styles.inputParent} label="Country">
            <Select
              placeholder="Country"
              showSearch
              className={styles.input}
              filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
              options={countries.map((country) => ({ label: `${country}`, value: country }))}
              optionFilterProp="children"
              allowClear={true}
            ></Select>
          </Form.Item>
        </div>
        {/* family information */}
        <Divider orientation="center">Family Information</Divider>
        <div className={styles.nameContainer}>
          <Form.Item name="family" className={styles.inputParent}>
            <Input type="text" placeholder="Family" addonBefore="Family" className={styles.input} />
          </Form.Item>
        </div>
        <p className={styles.mutedText}>
          Associates this member with a family, This is an optional step, but is recommended for better organization. if the member is a
          child, its required for them to be associated with a family, with at least one adult. If the family does not exist, you can create
          one by clicking <span onClick={() => setCreateFamilyModal(true)} className={styles.spanLink}>here</span>
        </p>
        {/* membership information */}
        <Divider orientation="center">Membership Information</Divider>
        <div className={styles.nameContainer}>
          <Form.Item name="role" className={styles.inputParent} label="Role in The Church">
            <Select placeholder="Role" className={styles.input}>
              <Select.Option value="member">Member</Select.Option>
              <Select.Option value="leader">Leader</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="isActive" className={styles.inputParent + " " + styles.radioContainer} label="Active Member">
            <Radio.Group className={styles.radioGroup}>
              <Radio value={true}>Active</Radio>
              <Radio value={false}>Inactive</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default CreateNewMember;
