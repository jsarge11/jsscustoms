import React, { useContext, useState } from 'react';
import './GetYours.scss';
import AnimatedHeader from '../../ui/AnimatedHeader/AnimatedHeader';
import { Steps } from 'antd';
import { AppContext } from '../../Routes';
import { GetYoursForm } from './Form/GetYoursForm';
import { CustomArtworkInput } from './CustomArtworkInput/CustomArtworkInput';

const { Step } = Steps;

const GetYours = () => {
  const [progress, setProgress] = useState(1);
  const global = useContext(AppContext);
  const { index, logoColors } = global;

  function switchForm() {
    switch (progress) {
      case 0:
        return <GetYoursForm setProgress={setProgress} />;
      case 1:
        return <CustomArtworkInput setProgress={setProgress} />;
      default:
        return <div />;
    }
  }

  return (
    <>
      <div
        className="flex center page"
        style={{ background: `#${logoColors[index]}` }}
      >
        <AnimatedHeader title="Get Yours" />
      </div>
      <div
        style={{
          display: 'flex',
          marginLeft: '10%',
          marginTop: '5%',
        }}
      >
        <div style={{ padding: '5%', height: '80%', marginRight: '10%' }}>
          <Steps
            style={{ height: 400, marginTop: -50 }}
            current={progress}
            direction="vertical"
          >
            <Step title="Enter your information." step />
            <Step title="Comments / submit your request." step />
            {/* <Step title="Verification and processing." step /> */}
          </Steps>
        </div>
        {switchForm()}
      </div>
    </>
  );
};
export default GetYours;
