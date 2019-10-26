import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser"

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {}
    };
  }

  getBlogItem() {
    axios
      .get(
        `https://jordan.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
      )
      .then(response => {
        this.setState({
          blogItem: response.data.portfolio_blog
        });
      })
      .catch(error => {
        console.log("getBlogItem error", error);
      });
  }

  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    const {
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.blogItem;

    return (
      <div className="blog-container">
        <div className="content-container">
          <h1>{title}</h1>

          {featured_image_url ?
          <div className="featured-image-wrapper">
            <img src={featured_image_url} />
          </div> : null}

          <div className="content">{ReactHtmlParser(content)}</div>
        </div>
      </div>
    );
  }
}
