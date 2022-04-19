import { Form, Input, Button, Modal } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  let navigate = useNavigate();

  const onFinish = async (values) => {
    const response = await axios({
      method: "post",
      url: "https://simplee-invoicing.herokuapp.com/register",
      headers: {},
      data: {
        name: values.name,
        username: values.username,
        password: values.password,
      },
    }).catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        Modal.error({
          title: "Register Error",
          content: error.response.data,
        });
      } else if (error.request) {
        Modal.error({
          title: "Register Error",
          content: error.request,
        });
      } else {
        Modal.error({
          title: "Register Error",
          content: error.message,
        });
      }
      return Promise.reject(error);
    });

    navigate("/invoicepage");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onClickLogin = () => {
    navigate("/login");
  };

  return (
    // <div className="App">
    // 	<header className="App-header">
    <div className={styles.bg}>
      <div>
        <div className={styles.title}>
          <h1>E-Invoice System Register</h1>
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="login"
            valuePropName="login"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <a onClick={onClickLogin}>Has an account? Go back to Login!</a>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ borderRadius: 5 }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      {/* // 	</header> */}
    </div>
  );
};

export default Register;
