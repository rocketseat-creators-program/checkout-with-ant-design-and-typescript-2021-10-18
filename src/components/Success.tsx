import { Result } from "antd";

export const Success = () => {
  return (
    <Result
      status="success"
      title="Successfully Purchased"
      subTitle="Order number: 2017182818828182881 - The delivery information will be sent for your email"
    />
  );
};
