import React, { Component } from 'react';
import { Query} from 'react-apollo';
import gql from 'graphql-tag';

export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query 
        query={POST_QUERY}
        variables={{
          id: match.params.id
        }}
      >
        {({loading, data}) => {
          if (loading) return 'Loading...';
          const { post } = data;
          return <h1>{post.title}!</h1>
        }}
      </Query>
    )
  }
}

// Writing a query
const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;