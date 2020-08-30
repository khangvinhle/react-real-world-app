import React, { Component } from "react"
import { Typography, Divider } from "antd"
const { Title } = Typography

class GlobalFeedContainer extends Component {
  render() {
    return (
      <div className="globalFeedContainer" >
        <div className="article">
          <Title level={4}>
            article 1
      </Title>
          <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
        </div>

        <Divider />

      </div>
    )
  }
}

export default GlobalFeedContainer
