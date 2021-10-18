import { Form, Input, Button } from "antd";

type LoginProps = {
  onLogin: () => void;
};

export const Login = ({ onLogin }: LoginProps) => {
  return (
    <Form onFinish={onLogin}>
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Authenticate
        </Button>
      </Form.Item>
    </Form>
  );
};
