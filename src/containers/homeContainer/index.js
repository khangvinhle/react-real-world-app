import React, { Component } from 'react';
import { Layout, Typography, Divider, Row, Col } from "antd"

const { Footer, Header, Content } = Layout
const { Title } = Typography

class HomeContainer extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <div className="logo" style={{ width: "fit-content", height: "100%", display: "flex" }}>
            <a href="https://www.yubico.com/" target="blank">
              <img src="https://www.yubico.com/wp-content/uploads/2019/11/yubico-circle-y-mark-128x128-transp.png" alt="" style={{ width: "50px", height: "50px", margin: "auto" }} />
            </a>
            <h1 style={{ color: "whitesmoke", marginLeft: "8px" }}>Yubico</h1>
          </div>
        </Header>

        <Content>
          <Row>
            <Col span={12}>
              <div className="article">
                <Title level={4}>
                  article 1
            </Title>
                <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              </div>

              <Divider />
              <div className="article">
                <Title level={4}>
                  article 1
            </Title>
                <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              </div>

              <Divider />
              <div className="article">
                <Title level={4}>
                  article 1
            </Title>
                <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              </div>

              <Divider />
              <div className="article">
                <Title level={4}>
                  article 1
            </Title>
                <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              </div>

              <Divider />
              <div className="article">
                <Title level={4}>
                  article 1
            </Title>
                <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              </div>

              <Divider />
              <div className="article">
                <Title level={4}>
                  article 1
            </Title>
                <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
              </div>

              <Divider />

            </Col>
            <Col span={12}></Col>
          </Row>
        </Content>

        <Footer style={{ backgroundColor: "#325F74", textAlign: "center" }}>
          <a href="https://www.yubico.com/products/" target="blank" style={{ textDecoration: "none", color: "yellowgreen" }}>
            See out products now!
          </a>
        </Footer>
      </Layout>
    );
  }
}

export default HomeContainer;
