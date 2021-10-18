import { Row, Col, Divider, Card } from "antd";

import Countdown from "antd/lib/statistic/Countdown";
const { Meta } = Card;

type PaymentProps = {
  onPay: () => void;
};

export const Payment = ({ onPay }: PaymentProps) => {
  const dealine = Date.now() + 1000000;

  return (
    <Row>
      <Col>
        <Countdown
          title="Time to payment expire"
          value={dealine}
          onFinish={() => {
            // alert("uups, seu tempo acabou");
          }}
        />

        <Divider />

        <Row gutter={16}>
          <Col>
            <Card
              onClick={onPay}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="money.png" />}
            >
              <Meta title="Money" description="the classic way" />
            </Card>
          </Col>

          <Col>
            <Card
              onClick={onPay}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="card.png" />}
            >
              <Meta title="Card" description="secure payment" />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
