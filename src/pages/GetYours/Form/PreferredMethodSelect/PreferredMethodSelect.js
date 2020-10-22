import React, { useContext } from 'react';
import { Select, Tooltip } from 'antd';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { AppContext } from '../../../../Routes';
const { Option } = Select;
export const PreferredMethodSelect = () => {
  const global = useContext(AppContext);
  const { preferredMethod, setPreferredMethod } = global;
  return (
    <>
      <p>
        Preferred Contact Method:{' '}
        <Tooltip title="We will contact you to verify your item is exactly the way you want it.">
          <QuestionCircleTwoTone />
        </Tooltip>
      </p>{' '}
      &nbsp;
      <Select
        defaultValue={preferredMethod}
        style={{ width: 300 }}
        onChange={setPreferredMethod}
      >
        <Option value="email">Email</Option>
        <Option value="phone">Phone Number</Option>
        <Option value="instagram">Instagram</Option>
      </Select>
    </>
  );
};
