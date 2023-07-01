import React, { useEffect } from "react";
import styles from "./CreateNewMember.module.scss";
import { Button, Card, Col, DatePicker, Divider, Form, Input, InputNumber, Radio, Row, Select, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import createMember from "@/redux/actions/member/createMember";
import PhotoUpload from "@/components/photoUpload/PhotoUpload.component";
import { states } from "@/data/states";
import { countries } from "@/data/countries";
import Link from "next/link";
import CreateFamilyModal from "@/screens/family/modal/CreateFamilyModal.modal";
import FamilyType from "@/types/FamilyType";
import getFamiliesAction from "@/redux/actions/family/getFamilies.action";
import { useRouter } from "next/router";

const CreateNewMember = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [timer, setTimer] = React.useState<any>(null); // timer for the search bar
  const [createFamilyModal, setCreateFamilyModal] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    selectedMinistry: { ministry },
    mainMinistry: { ministry: mainMinistry },
  } = useSelector((state: RootState) => state.ministry);
  const {
    createMember: { success: createSuccess },
  } = useSelector((state: RootState) => state.member);
  const {
    listFamilies: { families, loading },
  } = useSelector((state: RootState) => state.family);
  const onFinish = (values: any) => {
    // ministry, if their isnt a selectedMinistry, then use the mainMinistry
    const ministryId = ministry ? ministry._id : mainMinistry._id;
    dispatch(createMember({ ...values, ministry: ministryId }) as any);
    if(createSuccess && createSuccess !== null) {
      form.resetFields();
      // go back to the members page
      router.push("/members");
    }
  };

  const onSearch = (val: string) => {
    // if val is an empty string, then dont search
    if (val === "") return;
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        dispatch(getFamiliesAction({ keyword: val }) as any);
      }, 1000) as any // wait 1000ms before searching
    );
  };
  return (
    <div className={styles.container}>
      <CreateFamilyModal dispatch={dispatch} open={createFamilyModal} onClose={() => setCreateFamilyModal(false)} />
      <Form
        form={form}
        layout="vertical"
        className={styles.contentContainer}
        onFinish={() => onFinish(form.getFieldsValue())}
        initialValues={{
          // set the default values for the form
          sex: "male",
          maritalStatus: "single",
          location: {
            country: "United States",
            state: "Texas",
          },
          role: "member",
          isActive: true,
        }}
      >
        <Row gutter={16} justify={"space-evenly"}>
          <Col span={24}>
            <Divider orientation="center">
              <Tooltip title={`Easily identify Members from their profile photo!`}>Profile Photo</Tooltip>
            </Divider>
          </Col>
          <Col span={8}>
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
          </Col>
        </Row>
        {/* family information */}
        <Row gutter={16}>
          <Divider orientation="center">Family Information</Divider>
          <Col span={24}>
            <Form.Item name="family" className={styles.inputParent}>
              <Select
                showSearch
                placeholder="Select a family"
                optionFilterProp="children"
                onSearch={onSearch}
                // filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                className={styles.input}
                loading={loading}
              >
                {families?.map((family: FamilyType) => (
                  <Select.Option key={family._id} value={family._id}>
                    {family.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24} className={styles.mutedText}>
            Associates this member with a family, This is an optional step, but is recommended for better organization. if the member is a
            child, its required for them to be associated with a family, with at least one adult. If the family does not exist, you can
            create one by clicking{" "}
            <span onClick={() => setCreateFamilyModal(true)} className={styles.spanLink}>
              here
            </span>
          </Col>
        </Row>
        <Row className={styles.nameContainer} justify="space-evenly">
          <Col span={24}>
            <Divider orientation="center">Member Information</Divider>
          </Col>
          {/* firstName and lastName should be on the same line */}
          <Col span={8} lg={6} className={styles.inputParent}>
            <Form.Item name="firstName" rules={[{ required: true, message: "Please enter a first name" }]} label="First Name">
              <Input type="text" placeholder="First Name" className={`${styles.input} ${styles.addon}`} />
            </Form.Item>
          </Col>
          <Col span={8} lg={6} className={styles.inputParent}>
            <Form.Item name="lastName" label="Last Name">
              <Input type="text" placeholder="Last Name" className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={8} lg={6} className={styles.inputParent}>
            <Form.Item name="birthday" label="Birthday">
              <DatePicker placeholder="Birthday" className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={8} lg={6} className={styles.inputParent}>
            <Form.Item name="email" label="Email Address">
              <Input type="text" placeholder="example@test.com" className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name="sex" label="Sex">
              <Select placeholder="Sex/Gender" className={styles.input}>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name="phoneNumber" label="Phone Number">
              <InputNumber
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
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name="maritalStatus" label="Marital Status">
              <Select placeholder="Marital Status" className={styles.input}>
                <Select.Option value="single">Single</Select.Option>
                <Select.Option value="married">Married</Select.Option>
                <Select.Option value="divorced">Divorced</Select.Option>
                <Select.Option value="widowed">Widowed</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row className={styles.nameContainer}>
          {/* address information */}
          <Col span={24}>
            <Divider orientation="center">Address Information</Divider>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name={["location", "address"]} label="Address">
              <Input type="text" placeholder="Address" className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name={["location", "address2"]} label="Address Cont.">
              <Input type="text" placeholder="Address Continued" className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name={["location", "city"]} label="City">
              <Input type="text" placeholder="City" className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name={["location", "state"]} label="State">
              <Select
                placeholder="State"
                showSearch
                className={styles.input}
                filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                options={states.map((state) => ({ label: `${state.name} (${state.abbreviation})`, value: state.abbreviation }))}
                optionFilterProp="children"
              ></Select>
            </Form.Item>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name={["location", "zipCode"]} label="Zip Code">
              <Input type="text" placeholder="Zip Code" className={styles.input} />
            </Form.Item>
          </Col>
          <Col span={8} className={styles.inputParent}>
            <Form.Item name={["location", "country"]} label="Country">
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
          </Col>
        </Row>
        <Row className={styles.nameContainer}>
          {/* membership information */}
          <Col span={24}>
            <Divider orientation="center">Membership Information</Divider>
          </Col>
          <Col span={12} className={styles.inputParent}>
            <Form.Item name="role" label="Role in The Church">
              <Select placeholder="Role" className={styles.input}>
                <Select.Option value="member">Member</Select.Option>
                <Select.Option value="leader">Leader</Select.Option>
                <Select.Option value="staff">Staff</Select.Option>
                <Select.Option value="admin">Admin</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12} className={styles.inputParent}>
            <Form.Item name="isActive" className={styles.radioContainer} label="Active Member">
              <Radio.Group className={styles.radioGroup}>
                <Radio value={true}>Active</Radio>
                <Radio value={false}>Inactive</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row className={styles.buttonContainer}>
          <Col span={24}>
            <Button type="primary" htmlType="submit" className={styles.button}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateNewMember;
