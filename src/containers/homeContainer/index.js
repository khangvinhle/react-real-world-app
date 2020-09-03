import React, { Component } from "react";
import { Layout, Row, Col, Tabs } from "antd";

import GlobalFeedContainer from "./globalFeedContainer";
import YourFeedContainer from "./yourFeedContainer";

import "./index.css";

const { Footer, Header, Content } = Layout;
const { TabPane } = Tabs;

class HomeContainer extends Component {
  handleTabChanged = (activeKey) => {
    alert(activeKey);
  };

  render() {
    return (
      <Layout>
        <Header>
          <div
            className="logo"
            style={{ width: "fit-content", height: "100%", display: "flex" }}
          >
            <a href="https://www.yubico.com/" target="blank">
              <img
                src="https://www.yubico.com/wp-content/uploads/2019/11/yubico-circle-y-mark-128x128-transp.png"
                alt=""
                style={{ width: "50px", height: "50px", margin: "auto" }}
              />
            </a>
            <h1 style={{ color: "whitesmoke", marginLeft: "8px" }}>Yubico</h1>
          </div>
        </Header>

        <Content style={{ margin: "1em" }}>
          <Row>
            <Col
              span={15}
              style={{ borderRight: "1px solid #0000003b", padding: "1em" }}
            >
              <Tabs
                defaultActiveKey="1"
                centered={true}
                animated={true}
                size="large"
                onChange={this.handleTabChanged}
              >
                <TabPane key="your-feed" tab="Your Feed">
                  <YourFeedContainer />
                </TabPane>
                <TabPane key="global-feed" tab="Global Feed">
                  <GlobalFeedContainer />
                </TabPane>
              </Tabs>
            </Col>
            <Col
              span={9}
              style={{ borderLeft: "1px solid #0000003b", padding: "1em" }}
            >
              {" "}
              Tags{" "}
            </Col>
          </Row>
        </Content>

        <Footer
          style={{
            backgroundColor: "#325F74",
            textAlign: "center",
            marginTop: "0.5em",
          }}
        >
          <a
            href="https://www.yubico.com/products/"
            target="blank"
            style={{ textDecoration: "none", color: "yellowgreen" }}
          >
            See out products now!
          </a>
        </Footer>
      </Layout>
    );
  }
}

export default HomeContainer;
