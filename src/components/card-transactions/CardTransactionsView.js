import React from 'react';
import { CardTransactionTable } from './CardTransactionTable';
import { Typography } from 'antd';

export const CardTransactionView = (props) => {
  return (
    <>
      <Typography.Title level={2}>Card Transactions</Typography.Title>
      <CardTransactionTable/>
    </>
  );
};

