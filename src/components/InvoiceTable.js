import React, { useRef } from "react";
import "antd/dist/antd.css";
import { Table, Space, Modal, Button, Input, Form, notification } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { deleteExistedData } from "../pages/api";
import {sendInvoiceData } from "../pages/api";

const { confirm } = Modal;

const downloadInvoice = (id) => () => {
  axios
    .get("https://invoice-storage.herokuapp.com/download/v2", {
      params: { invoiceId: id },
    })
    .then((res) => {
      if (!res) {
        return;
      }
      let url = window.URL.createObjectURL(
        new Blob([res.data], { type: "text/xml" })
      );
      let a = document.createElement("a");
      a.href = url;
      let content = id;
      a.setAttribute("download", content);
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    });
};

const InvoiceTable = (props) => {
  const { data, setNeedToLoad } = props;
  const emailRef = useRef("");

  const showDeleteConfirm = (id) => () => {
    confirm({
      title: "Do you Want to delete this e-invoice?",
      icon: <ExclamationCircleOutlined />,
      content: "Invoice ID: " + id,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const deleteData = async (id) => {
          await deleteExistedData(id);
          setNeedToLoad(true);
        };
        deleteData(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const showSend = (id) => () => {
    confirm({
      title: "Please enter the receiver's email",
      content: (
        <Form.Item label="Email:" name="name">
          <Input
            onChange={({ target: { value } }) => {
              emailRef.current = value;
            }}
            placeholder="abc@123.com"
          />
        </Form.Item>
      ),
      okText: "Send",
      cancelText: "Cancel",
      onOk() {
        const sendInvoice = async (id) => {
          const data = await sendInvoiceData(id);
					if (data.status === 202) {
						notification['success']({
							message: 'Success',
							description:
								`Invoice (${id}) sent successfully.`,
						});
					} else {
						notification['error']({
							message: 'Error',
							description:
								`Invoice (${id}) not sent.`,
						});
					}
				}
        sendInvoice(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

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
          <Button onClick={showSend(record.id)}>Send</Button>
          <Button onClick={downloadInvoice(record.id)}>Download</Button>
          <Button onClick={showDeleteConfirm(record.id)}>Delete</Button>
        </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default InvoiceTable;
