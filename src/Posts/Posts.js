import React, { Component } from 'react';
import { Query} from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

export default class Post extends Component {
  render() {
    return (
      <div>
        <ul>
          <Query query={POSTS_QUERY}>
              {({loading, data}) => {
                if (loading) return 'Loading...';
                const { posts } = data;
                return posts.map(post => (
                  <li key={post.id} >
                    <Link to={`/post/${post.id}`}>
                      <h1>{post.title}</h1>
                    </Link>
                  </li>
                ));
              }}
            </Query>
          </ul>
      </div>
    )
  }
}

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
