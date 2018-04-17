import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class ArticleForm extends Component {
  constructor() {
    super();

    this.state = { title: '', content: '' };
  }

  render() {
    const { handleSubmit, title } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1>{title}</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter title"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Content</label>
                <textarea
                  className="form-control"
                  placeholder="Enter content"
                  value={this.state.content}
                  onChange={(e) => this.setState({ content: e.target.value })}
                />
              </div>

              <input
                type="submit"
                value="Edit article"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleForm;
