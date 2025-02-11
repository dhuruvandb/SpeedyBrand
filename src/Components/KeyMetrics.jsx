import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import convertNumber from "../utils/convertNumberToWords";
import metrics from "../Data/SampleData.json";

export default function KeyMetrics() {
  const { totalUsers, activeUsers, totalStreams, revenue, topArtist } =
    metrics.keyMetrics;

  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <Card style={{ background: "#FF6F61", color: "#fff" }}>
          <Statistic
            title="Total Users"
            value={convertNumber(totalUsers)}
            valueStyle={{ color: "#fff" }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ background: "#6B5B95", color: "#fff" }}>
          <Statistic
            title="Active Users"
            value={convertNumber(activeUsers)}
            valueStyle={{ color: "#fff" }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ background: "#88B04B", color: "#fff" }}>
          <Statistic
            title="Total Streams"
            value={convertNumber(totalStreams)}
            valueStyle={{ color: "#fff" }}
          />
        </Card>
      </Col>
      <Col span={6}>
        <Card style={{ background: "#FFA500", color: "#fff" }}>
          <Statistic
            title="Total Revenue"
            value={`$${convertNumber(revenue)}`}
            valueStyle={{ color: "#fff" }}
          />
        </Card>
      </Col>
      <Col span={24}>
        <Card style={{ background: "#92A8D1", color: "#fff" }}>
          <Statistic
            title="Top Artist of this Month"
            value={topArtist}
            valueStyle={{ color: "#fff" }}
          />
        </Card>
      </Col>
    </Row>
  );
}
