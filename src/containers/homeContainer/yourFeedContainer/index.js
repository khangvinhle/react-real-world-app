import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { fetchArticles } from "../../../actions/articleActions";
import { getUserFromLocalStorage } from "../../../utils/authUtils";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

class YourFeedContainer extends Component {
  componentDidMount() {
    const { fetchArticles, limit, offset } = this.props;
    fetchArticles({
      limit,
      offset,
      author: getUserFromLocalStorage().username,
    });
  }

  render() {
    const {
      articles,
      loading,
      limit,
      articlesCount,
      fetchArticles,
    } = this.props;

    return (
      <div className="yourFeedContainer">
        <List
          loading={loading}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (pageNumber, pageSize) => {
              fetchArticles({
                limit,
                offset: (pageNumber - 1) * limit,
                author: getUserFromLocalStorage().username,
              });
            },
            defaultPageSize: limit,
            total: articlesCount,
          }}
          dataSource={articles}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ article }) => {
  return {
    limit: article.limit,
    offset: article.offset,
    articlesCount: article.articlesCount,
    loading: article.loading,
    articles: article.articles,
  };
};

const mapDispatchToProps = {
  fetchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(YourFeedContainer);
