import React, { useContext } from "react";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";
function PostCard({
  post: { id, body, username, likeCount, commentCount, likes, createdAt },
}) {
  const likePost = () => {};
  const commentOnPost = () => {};
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <LikeButton user={user} post={{ id, likes, likeCount }} /> */}
        {/* <MyPopup content="Comment on post"> */}
        <Button
          as="div"
          onClick={likePost}
          labelPosition="right"
          to={`/posts/${id}`}
        >
          <Button color="teal" basic>
            <Icon name="heart" />
          </Button>
          <Label basic color="teal" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button
          labelPosition="right"
          as="div"
          to={`/posts/${id}`}
          onClick={commentOnPost}
        >
          <Button color="blue" basic>
            <Icon name="comments" />
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
        {/* </MyPopup> */}
        {/* {user && user.username === username && <DeleteButton postId={id} />} */}
      </Card.Content>
    </Card>
  );
}
export default PostCard;
