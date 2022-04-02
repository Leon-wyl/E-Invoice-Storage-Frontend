import { Form, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import '../App.css'
import styles from '../components/Login.module.css';

const Register = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
		<div className="App">
			<header className="App-header">
				<div className={styles.bg}>
					<div className={styles.title}>
						<h1>E-Invoice System Registeration</h1>
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
								label="Username"
								name="username"
								rules={[{ required: true, message: 'Please input your email!' }]}
							>
								<Input />
							</Form.Item>

							<Form.Item
								label="Password"
								name="password"
								rules={[{ required: true, message: 'Please input your password!' }]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
								<Button type="primary" htmlType="submit" style={{borderRadius: 5}}>
									Register
								</Button>
							</Form.Item>
						</Form>
					</div>
				</header>
			</div>
  );
};

export default Register;