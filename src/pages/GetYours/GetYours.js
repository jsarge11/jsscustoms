import React, { useContext, useState, useEffect } from 'react';
import './GetYours.scss';
import AnimatedHeader from '../../ui/AnimatedHeader/AnimatedHeader';
import { Steps } from 'antd';
import { AppContext } from '../../Routes';
import { GetYoursForm } from './Form/GetYoursForm';
import { CustomArtworkInput } from './CustomArtworkInput/CustomArtworkInput';
import headerBar from '../../assets/headerbar.png';

const { Step } = Steps;

const GetYours = () => {
  const [progress, setProgress] = useState(0);
  const global = useContext(AppContext);
  const { index, logoColors } = global;

  useEffect(() => {
    window.scrollY = 0;
  }, [progress]);

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
        style={{
          background: `#f6f6f6`,
          overflow: 'hidden',
          position: 'relative',
        }}
        className="flex center page header-bar"
      >
        <AnimatedHeader title="Get Yours" />
        <img
          className={'header-image'}
          src={headerBar}
          alt="logos and drawings"
        />
      </div>
      <br />
      <br />
      <div id="form-wrapper">
        <div id="step-wrapper">
          <Steps current={progress} direction="vertical">
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
