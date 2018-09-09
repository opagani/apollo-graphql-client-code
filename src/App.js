import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import logo from './logo.svg';
import './App.css';

// Connecting our site to the Graphql API
const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjlqqizlv108r01f86ez3t5xa/master'
});

// Running our query outside of React
// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>  
    );
  }
}

export default App;
