import React, { useContext } from 'react';
import './Pricing.scss';
import AnimatedHeader from '../../ui/AnimatedHeader/AnimatedHeader';
import { Table } from 'antd';
import { AppContext } from '../../Routes';

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

  return (
    <>
      <div
        style={{ background: `#${logoColors[index]}` }}
        className="flex center page"
      >
        <AnimatedHeader title="Pricing" />
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
