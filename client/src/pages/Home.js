import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Transition } from "semantic-ui-react";
import gql from "graphql-tag";
// import { AuthContext } from '../context/auth';
import PostCard from "../components/PostCard";
// import PostForm from '../components/PostForm';

function Home() {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <>loading posts</>
        ) : (
          data?.getPosts &&
          data?.getPosts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>{/* <PostForm /> */}</Grid.Column>
        <Transition.Group>
          <Grid.Column style={{ marginBottom: 20 }}>
            {/* <PostCard /> */}
          </Grid.Column>
        </Transition.Group>
      </Grid.Row>
    </Grid>
  );
}
const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      username
      createdAt
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export default Home;
