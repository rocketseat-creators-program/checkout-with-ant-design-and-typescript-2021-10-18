import { Steps, Row, Col, Button } from "antd";
import { useState } from "react";
import "./App.css";
import {
  UserOutlined,
  SolutionOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Login } from "./components/Login";
import { Items } from "./components/Items";
import { Payment } from "./components/Payment";
import { Success } from "./components/Success";

const { Step } = Steps;

const App = () => {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => prev + 1);
  }

  const steps = [
    {
      title: "Login",
      icon: <UserOutlined />,
      content: () => <Login onLogin={next} />,
    },
    {
      title: "Check your items",
      icon: <SolutionOutlined />,
      content: () => <Items onNext={next} />,
    },
    {
      title: "Payment",
      icon: <CreditCardOutlined />,
      content: () => <Payment onPay={next} />,
    },
  ];

  const ContentToRender = steps[current]?.content;
  const isLastStep = current === steps.length;

  return (
    <Row justify="center" align="middle">
      <Col span={18} style={{ paddingTop: 30 }}>
        <Steps current={current}>
          {steps.map((step) => {
            return (
              <Step key={step.title} title={step.title} icon={step.icon} />
            );
          })}
        </Steps>

        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLastStep ? <Success /> : <ContentToRender />}
        </div>
      </Col>
    </Row>
  );
};

export default App;
