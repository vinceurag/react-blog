import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class EditArticle extends Component {
  constructor() {
    super();

    this.state =  { title: '', content: '', redirect: false };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://192.168.130.241:4000/api/articles/${id}`)
      .then(resp => {
        this.setState(resp.data)
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.match.params.id;
    const params = { article: this.state };
    axios.put(`http://192.168.130.241:4000/api/articles/${id}`, params)
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
            <h1>Edit Article</h1>
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

export default EditArticle;
