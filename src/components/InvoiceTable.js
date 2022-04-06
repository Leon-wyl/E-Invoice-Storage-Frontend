import React from "react";
import "antd/dist/antd.css";
import { Table, Space, Modal, Button } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const { confirm } = Modal;

const showDeleteConfirm = (id) => () => {
  confirm({
    title: "Do you Want to delete this e-invoice?",
    icon: <ExclamationCircleOutlined />,
    content: "Invoice ID: " + id,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const downloadInvoice = (id) => () => {
  axios
    .get("http://127.0.0.1:5000/download/v2", {
      params: { invoiceId: id },
    })
    .then((res) => {
      if (!res) {
        return;
      }
			let url = window.URL.createObjectURL(new Blob([res.data],
        {type: 'text/xml'}))
      let a = document.createElement('a')
      a.href= url
      let content = id
      a.setAttribute('download', content)
      document.body.appendChild(a)
      a.click()
      URL.revokeObjectURL(a.href)
      document.body.removeChild(a)
    });
};

const InvoiceTable = (props) => {
  const data = props.data;
  console.log(data);
  const columns = [
    {
      title: "Invoice ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Issue Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Supplier",
      dataIndex: "supplier",
      key: "supplier",
    },
    {
      title: "Supplier Country",
      key: "supplierCountry",
      dataIndex: "supplierCountry",
    },
    {
      title: "Customer",
      key: "customer",
      dataIndex: "customer",
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
          <Button onClick={downloadInvoice(record.id)}>Download</Button>
          <Button onClick={showDeleteConfirm(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default InvoiceTable;
