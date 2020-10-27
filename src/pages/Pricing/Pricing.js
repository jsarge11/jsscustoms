import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import './Pricing.scss';
import AnimatedHeader from '../../ui/AnimatedHeader/AnimatedHeader';
import { Table } from 'antd';
import { AppContext } from '../../Routes';
import headerBar from '../../assets/headerbar.png';
const formatCurrency = (amt) => {
  return `Starting at $${amt}.00`;
};
const dataSource = [
  {
    key: 0,
    name: 'Air Force Ones®',
    bring: formatCurrency(70),
    pick: formatCurrency(190),
  },
  {
    key: 0,
    name: 'Slip on Vans®',
    bring: formatCurrency(70),
    pick: formatCurrency(130),
  },
  {
    key: 0,
    name: 'Converse®',
    bring: formatCurrency(70),
    pick: formatCurrency(130),
  },
  {
    key: 0,
    name: 'Hats',
    bring: formatCurrency(70),
    pick: formatCurrency(130),
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: '35%',
  },
  {
    title: 'Artwork',
    dataIndex: 'bring',
    key: 'bring',
  },
  {
    title: 'Artwork + Apparel',
    dataIndex: 'pick',
    key: 'pick',
  },
];
const Summary = () => (
  <>
    <br />
    <h3 className="black" style={{ width: '100%', padding: '0 15%' }}>
      There are two ways to purchase your custom apparel. <br />
      1) You provide the item, and I will do the artwork on your apparel. <br />
      2) We take the hassle out and acquire the item for you.
      <br /> <br /> * All customs include the prep & refinishing of the shoe so
      your new work of art lasts.
      <br /> <br /> The pricing above is for some common custom apparel,
      however, the possibilities are endless – please reach out if you want
      something not on this list.
    </h3>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);
const Pricing = () => {
  const global = useContext(AppContext);
  const { index, logoColors } = global;
  const imgRef = useRef();
  const [divHeight, setDivHeight] = useState(500);

  useLayoutEffect(() => {
    changeHeight();
  }, [imgRef]);

  const changeHeight = () => {
    if (imgRef && imgRef.current) {
      setDivHeight(imgRef.current.height);
    }
  };

  console.log(divHeight);
  // useLayoutEffect(() => {
  //   document.addEventListener('resize', changeHeight);
  //   return document.removeEventListener('resize', changeHeight);
  // }, []);

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
        <AnimatedHeader title="Pricing" />
        <img
          ref={imgRef}
          className={'header-image'}
          src={headerBar}
          alt="logos and drawings"
        />
      </div>
      <div>
        <div id="table-wrapper">
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </div>
        <Summary />
      </div>
    </>
  );
};
export default Pricing;
