import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import KeyMetrics from "./Components/KeyMetrics";
import ChartVisual from "./Components/ChartVisual";
import RecentPlays from "./Components/RecentPlays";

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Layout
      className="App"
      style={{ background: "#141414", minHeight: "100vh" }}
    >
      <Header style={{ background: "#1f1f1f", padding: 0 }}>
        <div style={{ padding: "0 20px" }}>
          <Title
            level={2}
            style={{ color: "#1890ff", margin: 0, content: "center" }}
          >
            Streamify Analytics Dashboard
          </Title>
        </div>
      </Header>

      <Content style={{ padding: "20px", background: "#141414" }}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <KeyMetrics />
          </Col>

          <Col span={24} style={{ marginTop: "20px" }}>
            <ChartVisual />
          </Col>

          <Col span={24} style={{ marginTop: "20px" }}>
            <RecentPlays />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
