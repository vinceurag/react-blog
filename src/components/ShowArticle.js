import React, { Component } from 'react';
import axios from 'axios';
import ArticleContent from './ArticleContent'
import { Link } from 'react-router-dom';

class ShowArticle extends Component {
  constructor() {
    super();

    this.state = { title: '', content: '', id: null }
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://192.168.130.241:4000/api/articles/${id}`)
      .then(resp => {
        this.setState(resp.data)
      });
  }

  render() {
    return (
      <div>
        <ArticleContent
          title={this.state.title}
          content={this.state.content}
          id={this.state.id}
          hasLink={false}
        />

        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default ShowArticle;
