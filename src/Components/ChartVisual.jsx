import React from "react";
import { Row, Col } from "antd";
import LineChart from "../Chart/LineChart";
import PieChart from "../Chart/PieChart";
import BarChart from "../Chart/BarChart";

const ChartVisual = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <LineChart />
      </Col>
      <Col span={12}>
        <PieChart />
      </Col>
      <Col span={24}>
        <BarChart />
      </Col>
    </Row>
  );
};

export default ChartVisual;