import React from "react";
import "antd/dist/antd.css";
import { Table, Space, Modal, Button } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const showDeleteConfirm =(id) => () => {
	console.log(id)
  confirm({
    title: 'Do you Want to delete this e-invoice?',
    icon: <ExclamationCircleOutlined />,
    content: 'Invoice ID: ' + id,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

const data = [
  {
    key: "1",
    invoiceId: "EBWASP1002",
    date: "2022-02-07",
    supplierName: "Ebusiness Software Services Pty Ltd",
    supplierCountry: "AU",
    customerName: "Awolako Enterprises Pty Ltd",
    customerCountry: "AU",
    taxableAmount: 100,
    taxAmount: 10,
  },
  {
    key: "2",
    invoiceId: "EBWASP1002",
    date: "2022-02-07",
    supplierName: "Ebusiness Software Services Pty Ltd",
    supplierCountry: "AU",
    customerName: "Awolako Enterprises Pty Ltd",
    customerCountry: "AU",
    taxableAmount: 100,
    taxAmount: 10,
  },
];

const InvoiceTable = () => {
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "invoiceId",
      key: "invoiceId",
    },
    {
      title: "Issue Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Supplier",
      dataIndex: "supplierName",
      key: "supplierName",
    },
    {
      title: "Supplier Country",
      key: "supplierCountry",
      dataIndex: "supplierCountry",
    },
    {
      title: "Customer",
      key: "customerName",
      dataIndex: "customerName",
    },
    {
      title: "Customer Country",
      key: "customerCountry",
      dataIndex: "customerCountry",
    },
    {
      title: "Taxable Amount",
      key: "taxableAmount",
      dataIndex: "taxableAmount",
    },
    {
      title: "Tax Amount",
      key: "taxAmount",
      dataIndex: "taxAmount",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button>View</Button>
          <Button>Download</Button>
          <Button onClick={showDeleteConfirm(record.invoiceId)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default InvoiceTable;
