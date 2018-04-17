/* @flow */
import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: number,
  title: string,
  content: string,
  hasLink: boolean
}

class ArticleContent extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.hasLink ?
          <Link to={`/show/${this.props.id}`}>
            <h3>{this.props.title}</h3>
          </Link>
          : <h3>{this.props.title}</h3>}
        <p>{this.props.content}</p>
        <Link to={`/edit/${this.props.id}`}>Edit</Link>
        <hr/>
      </div>
    );
  }
}

export default ArticleContent;
