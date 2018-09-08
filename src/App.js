import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

// Connecting our site to the Graphql API
const client = new ApolloClient({
  uri: 'https://api-uswest.graphcms.com/v1/cjlqqizlv108r01f86ez3t5xa/master'
});

// Writing a query
const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;

// Running our query outside of React
// client.query({
//   query: testQuery
// }).then(res => console.log(res));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Query query={POSTS_QUERY}>
            {({loading, data}) => {
              if (loading) return 'Loading...';
              const { posts } = data;
              return posts.map(post => <h1 key={post.id}>{post.title}</h1>);
            }}
          </Query>
        </div>
      </ApolloProvider>  
    );
  }
}

export default App;
