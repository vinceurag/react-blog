/* @flow */
import * as React from 'react';
import axios from 'axios';
import ArticleContent from './ArticleContent'
import { Link } from 'react-router-dom';

type State = {
  articles: Array<Object>
}

class Home extends React.Component<{}, State> {
  constructor() {
    super();

    this.state = { articles: [] };
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    axios.get("http://192.168.130.241:4000/api/articles")
      .then(resp => {
        this.setState({ articles: resp.data });
      });
  }

  renderArticles() {
    return this.state.articles.map(article => {
      return(
        <ArticleContent
          title={article.title}
          content={article.content}
          key={article.id}
          id={article.id}
          hasLink={true}
        />
      );
    })
  }

  render() {
    return (
      <div>
        <h1>BlogShit</h1>
        <hr/>
        {this.renderArticles()}
        <Link to="/new">New Shit</Link>
      </div>
    );
  }
}

export default Home;
