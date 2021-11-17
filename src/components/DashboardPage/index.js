import React from 'react';
import { CoinPriceGraphs } from './CoinPriceGraphs';
import { Col, Row, Typography } from 'antd';
// import { DashboardCardDetails } from './DashboardCardDetails';
// import { MinimalCardTransactionsTable } from '../card-transactions/MinimalCardTransactionsTable';
// import { MinimalTransactionTable } from '../transactions/MinimalTransactionTable';
// import { CoinPortfolio } from './CoinPortfolio';
// import { AccountVerification } from './AccountVerification';
// import i18n from 'meteor/universe:i18n';
// import { useTracker } from 'meteor/react-meteor-data';
// import { UserCards } from './userCards';

// const T = i18n.createComponent();
const { Title } = Typography;

export const DashboardPage = (props) => {
  // const {
  //   userCard,
  // } = useTracker(() => {
  //   Meteor.subscribe('userCards.find.all');

  //   return {
  //     userCard: UserCards.findOne(),
  //   };
  // }, []);

  return (
    <>
      <Row gutter={[16, 16]}>
        {/* <Col span={24}>
          <CoinPriceGraphs />
        </Col> */}
        {/* <Col span={24} md={12}>
          <div className="dashboardComponent">
            <Title level={4}
              className="dashboardComponentHeader">dashboard.headers.portfolio</Title>
            <CoinPortfolio />
          </div>
        </Col> */}
        {/* <Col span={24} md={12} hidden={!userCard}> */}
        {/* <Col span={24} md={12} >
          <div className="dashboardComponent">
            <DashboardCardDetails />
          </div>
        </Col>
        <Col span={24} md={8}>
          <div className="dashboardComponent">
            <Title level={4}
              className="dashboardComponentHeader">dashboard.headers.activity</Title>
            <MinimalTransactionTable />
          </div>
        </Col>
        <Col span={24} md={8}>
          <div className="dashboardComponent">
            <Title level={4}
              className="dashboardComponentHeader">dashboard.headers.cardTransaction</Title>
            <MinimalCardTransactionsTable />
          </div>
        </Col>
        <Col span={24} md={8}>
          <div className="dashboardComponent">
            <Title level={4}
              className="dashboardComponentHeader">dashboard.headers.verification</Title>
            <AccountVerification />
          </div>
        </Col> */}
      </Row>
    </>
  );
};
