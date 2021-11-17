import React, { useState } from 'react';
import { Input, Select, Space, Table, Typography, Popconfirm, Button} from 'antd';
import { useTracker } from 'meteor/react-meteor-data';
import { CardTransactions } from '../../../api/card-transactions/card-transactions';
import { isMobile } from '../../../api/helpers';
import { Meteor } from 'meteor/meteor';

const columnsNonAdmin= [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
  {
    title: 'Credit',
    dataIndex: 'creditText',
    key: 'creditText'
  },
  {
    title: 'Debit',
    dataIndex: 'debitText',
    key: 'debitText'
  },
  {
    title: 'Total',
    dataIndex: 'totalText',
    key: 'totalText'
  },
  {
    title: 'Transaction',
    dataIndex: 'transactionId',
    key: 'transactionId'
  },
  {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: 'Type',
    dataIndex: 'transactionType',
    key: 'transactionType',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

export const CardTransactionTable = (props) => {
  const [datesRange, setDatesRange] = useState();
  const [text, setText] = useState();
  const getMillisDay = 1000 * 60 * 60 * 24;

  const simplifiedView = props.simplifiedView || false;
  const isAdmin = props.isAdmin || false;

  

  const dateFilters = [{
    key: 'oneweek',
    value: '1 week',
    millis: (getMillisDay * 7),
  },
    {
      key: 'onemonth',
      value: '1 month',
      millis: (getMillisDay * 30),
    },
    {
      key: 'threemonths',
      value: '3 months',
      millis: (getMillisDay * 30 * 3),
    },
    {
      key: 'sixmonths',
      value: '6 months',
      millis: (getMillisDay * 30 * 6),
    }];

  const { transactions } = useTracker(() => {
    let datesInMillis = -1;
    if (datesRange) {
      let options = dateFilters.filter((d) => d.key === datesRange);
      if (options && options[0]) {
        datesInMillis = options[0].millis;
      }
    }

    Meteor.subscribe('cardtransactions');
    let query = props?.userCardId ? { userCardId: props.userCardId } : {};
    if (datesInMillis > 0) {
      query.transactionDate = {
        $gte: new Date().getTime() - datesInMillis,
      };
    }
    if (text) {
      query['$or'] = [{
        transactionId: {
          '$regex': text,
          '$options': 'i',
        }
      },
        {
          description: {
            '$regex': text,
            '$options': 'i',
          }
        }];
    }
    // console.log(datesRange, datesInMillis, query);
    const res = CardTransactions.find(query, {})
      .fetch()
      .map(tr => ({
        ...tr,
        date: tr.transactionDate && new Date(tr.transactionDate).toLocaleString(),
        creditText: tr.creditAmount ? tr.creditAmount + ' ' + tr.creditCurrency : '',
        debitText: tr.debitAmount ? tr.debitAmount + ' ' + tr.debitCurrency : '',
        totalText: tr.totalAmount ? tr.totalAmount + ' ' + tr.totalCurrency : '',
        key: tr['_id'],
      }));
    return {
      transactions: res
    };
  }, [props?.userCardId, datesRange, text]);

  const handleChange = (val) => {
    // console.log(val);
    setDatesRange(val);
  };

  const deleteTr = (key) =>
  {
    Meteor.subscribe('cardtransactions');
    Meteor.call('cardtransactions.deleteTransaction', key);
    console.log('Deleting transaction: ' + key); 
  }

  // const handleSelect = (val) => {
  //   console.log('handleSelect', val);
  //   // setDatesRange(val);
  // };
  let columns = [...columnsNonAdmin]
  if(isAdmin){columns.push(
    {
    title: 'Action',
    key: 'delete',
    render: (text, record) => 
    {  
    return <>
      <Popconfirm placement="top" title="Are you sure?" onConfirm={() => deleteTr(record.key)} okText="Yes" cancelText="No">
        <Button danger = {true}> Delete </Button>
      </Popconfirm>
    </>  
    }
  }
  )}

  return (
    <>
      <Space direction="vertical" size="large" style={{
        marginTop: '1em',
        marginBottom: '1em',
        width: isMobile() ? '100%' : '70%'
      }}>
        
        <Select value={datesRange} onChange={handleChange}
                style={isMobile() ? { width: '80%' } : { width: '50%' }}>
          {dateFilters.map((filter) => (
            <Select.Option key={filter.key} value={filter.key}>
              {filter.value}
            </Select.Option>
          ))}
        </Select>
        <Input onChange={(e) => setText(e.target.value)} placeholder="Enter text"
        ></Input>
      </Space>
      <Table dataSource={transactions} columns={columns} scroll={isMobile() ? { x: 900 } : {}}/>
      {/*{isObjectEmpty(transactions) && <div>No results found</div>}*/}
    </>
  );
};

