import React from 'react'
import styles from './CreateNewMinistry.module.scss'
import { Form, Input, Modal, Select } from 'antd'
import { Dispatch } from 'redux'

interface Props {
  open: boolean,
  dispatch?: Dispatch
}
const CreateNewMinistry = ({open}: Props) => {
  const [form] = Form.useForm()
  const onFinish = (values: any) => {
    console.log(values)
  }
  return (
    <Modal className={styles.container} open={open}>
      <div className={styles.modalHeader}>
      <h1>Create New Ministry</h1></div>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Ministry Name"
          name="name"
          rules={[{ required: true, message: "Please input the ministry name!" }]}
        >
          <Input placeholder="Enter the ministry name" />
        </Form.Item>
        <Form.Item
          label="Ministry Description"
          name="description"
          rules={[{ required: true, message: "Please input the ministry description!" }]}
        >
          <Input.TextArea placeholder="Enter the ministry description" />
        </Form.Item>
        <Form.Item
          label="Ministry Leader"
          name="leader"
          rules={[{ required: true, message: "Please input the ministry leader!" }]}
        >
          <Input placeholder="Enter the ministry leader" />
        </Form.Item>
        <Select placeholder="What type of ministry is this?">
          <Select.Option value="evangelism">Evangelism</Select.Option>
          <Select.Option value="prayer">Prayer</Select.Option>
          </Select>
        </Form>
    </Modal>
  )
}

export default CreateNewMinistry