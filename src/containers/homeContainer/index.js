import React, { Component } from 'react';
import { Layout, Row, Col, Tabs } from "antd"

import GlobalFeedContainer from "./globalFeedContainer"
import YourFeedContainer from "./yourFeedContainer"

const { Footer, Header, Content } = Layout
const { TabPane } = Tabs

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

        <Content style={{margin: "auto 1em"}}>
          <Row>
            <Col span={15}>
              <Tabs defaultActiveKey="1">
                <TabPane key="1" tab="Your Feed">
                  <YourFeedContainer />
                </TabPane>
                <TabPane key="2" tab="Global Feed">
                  <GlobalFeedContainer />
                </TabPane>
              </Tabs>
            </Col>
            <Col span={4}></Col>
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
