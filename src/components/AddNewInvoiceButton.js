import React from "react";
import "antd/dist/antd.css";
import { Upload, message, Button } from "antd";
import { FileAddOutlined } from "@ant-design/icons";
import { getInvoiceData } from "../pages/api";

const AddNewInvoiceButton = (props) => {
  const { setInvoiceData } = props

  const UploadProps = {
    name: "file",
    action: "https://simplee-invoicing.herokuapp.com/upload/v2",
    headers: {
      authorization: "authorization-text",
    },
    async onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        console.log("sdfasdfsdf")
        message.success(`${info.file.name} file uploaded successfully`);
        const data = await getInvoiceData();
        setInvoiceData(data);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Upload {...UploadProps} maxCount={1}>
      <Button onClick={() => {}} type="primary" size="large">
        <FileAddOutlined /> Add New Invoice
      </Button>
    </Upload>
  );
};

export default AddNewInvoiceButton;
