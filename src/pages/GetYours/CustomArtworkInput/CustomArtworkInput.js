import React, { useContext } from 'react';
import { Input, Button, Tooltip, Alert } from 'antd';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { CustomerContext } from '../../../Routes';

const { TextArea } = Input;
export const CustomArtworkInput = (props) => {
  const { setProgress } = props;
  const global = useContext(CustomerContext);
  const {
    handleTextArea,
    submitForm,
    status: { success, loading },
  } = global;
  return (
    <div>
      <p>
        Comments: <span style={{ color: 'lightgrey' }}>(optional)</span>{' '}
        &nbsp;&nbsp;
        <Tooltip title="I will reach out to discuss your design, this form is just for anything else you'd like us to know.">
          <QuestionCircleTwoTone />
        </Tooltip>
      </p>

      {!success ? (
        <>
          <TextArea
            placeholder="Anything else I should know?"
            style={{ width: '100%' }}
            autoSize={{ minRows: 3 }}
            showCount
            maxLength={400}
            onChange={handleTextArea}
          />
          <br />
          <br />
          <br />
          <div style={{ display: 'flex' }}>
            <Button
              disabled={loading}
              type="primary"
              style={{ marginRight: 50 }}
              onClick={() => {
                setProgress(0);
              }}
            >
              Back
            </Button>
            <Button type="primary" onClick={submitForm} loading={loading}>
              Submit
            </Button>
          </div>
          <br />
          {success === false ? (
            <Alert
              type="error"
              message="Uh oh!"
              description="Something went wrong, please try again or reach out directly to scotty@jsscustoms.com"
            />
          ) : null}
        </>
      ) : (
        <Alert
          message="Success!"
          description="Thanks for your request! We will reach out to you within 24 hours!"
          type="success"
        />
      )}
    </div>
  );
};
