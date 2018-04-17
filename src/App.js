import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ShowArticle from './components/ShowArticle';
import EditArticle from './components/EditArticle';
import NewArticle from './components/NewArticle';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/show/:id" component={ShowArticle} />
            <Route path="/edit/:id" component={EditArticle} />
            <Route path="/new" component={NewArticle} />
          </Switch>
        </BrowserRouter>
    </div>
    );
  }
}

export default App;
