import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class NewArticle extends Component {
  constructor() {
    super();

    this.state = { title: '', content: '', redirect: false };
  }

  handleSubmit(e) {
    e.preventDefault();
    const params = { article: this.state}
    axios.post("http://192.168.130.241:4000/api/articles", params)
    .then(resp => {
      this.setState({redirect: true})
    });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1>New Shit</h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
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
                value="New article"
                className="btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArticle;
