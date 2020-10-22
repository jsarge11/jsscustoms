import React, { useContext, useState } from 'react';
import { Form, Input, Alert, Button } from 'antd';
import { PreferredMethodSelect } from './PreferredMethodSelect/PreferredMethodSelect';
import { AppContext, CustomerContext } from '../../../Routes';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const nameArray = ['First', 'Last'];
export const GetYoursForm = (props) => {
  const global = useContext(AppContext);
  const { preferredMethod } = global;

  console.log(preferredMethod);

  const customerInfo = useContext(CustomerContext);
  const { info, setInfo } = customerInfo;
  const { setProgress } = props;
  const [form] = Form.useForm();
  const switchContactType = () => {
    switch (preferredMethod) {
      case 'email':
        return <EmailForm />;
      case 'phone':
        return <PhoneNumberForm />;
      case 'instagram':
        return <InstagramForm />;
      default:
        return (
          <>
            <Alert
              message="Choose a preferred contact method."
              type="info"
              showIcon
            />
          </>
        );
    }
  };
  const mappedNames = nameArray.map((item) => {
    const lowerCase = item.toLowerCase();
    let name = `${lowerCase}-name`;
    return (
      <Form.Item
        initialValue={info[name]}
        name={name}
        label={<span>{item} Name</span>}
        rules={[
          {
            required: true,
            message: `Please enter your ${lowerCase} name.`,
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    );
  });
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="Contact"
      scrollToFirstError
      onFinish={(values) => {
        setProgress(1);
        setInfo(values);
      }}
    >
      {mappedNames}
      <PreferredMethodSelect />
      <br />
      <br />
      {switchContactType(preferredMethod)}
      {preferredMethod ? <NextButton /> : null}
    </Form>
  );
};

const PhoneNumberForm = () => {
  const global = useContext(CustomerContext);
  const { info } = global;
  return (
    <>
      <Form.Item
        initialValue={info['phone']}
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please enter your phone number.',
          },
        ]}
      >
        <Input addonBefore={'+1'} />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Phone Number"
        dependencies={['phone']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your phone number.',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('phone') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                'The two phone numbers that you entered do not match.'
              );
            },
          }),
        ]}
      >
        <Input addonBefore={'+1'} />
      </Form.Item>
    </>
  );
};
const EmailForm = () => {
  return (
    <>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            message: 'Please enter a valid email.',
          },
          {
            required: true,
            message: 'Please enter your email.',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Email"
        dependencies={['email']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your email.',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('email') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                'The two emails that you entered do not match.'
              );
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};
const InstagramForm = () => {
  return (
    <>
      <Form.Item
        name="instagram"
        label="Instagram"
        rules={[
          {
            required: true,
            message: 'Please enter your Instagram username.',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Instagram username"
        dependencies={['username']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your username.',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('instagram') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                'The two usernames that you entered do not match.'
              );
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
};
const NextButton = (props) => {
  return (
    <>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Next
        </Button>
      </Form.Item>
    </>
  );
};
