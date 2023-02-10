import React, { useContext } from 'react';
import { Row, Col, ListGroup } from 'reactstrap';
import { PostContext } from '../../context/PostContexp';
import PostItem from '../PostItem';

export default function PostList() {
  const posts = useContext(PostContext);
  return (
    <Row>
      <Col>
        <ListGroup>
          {posts?.map((el) => (
            <PostItem
              key={el.id}
              id={el.id}
              post={el}

            />

          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
