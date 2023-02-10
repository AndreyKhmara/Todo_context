import React, { memo, useContext } from 'react';
import {
  ListGroupItem, Button,
} from 'reactstrap';
import { CallbackContext } from '../../context/PostContexp';

function PostItem({ post, id }) {
  const { deleteHandler } = useContext(CallbackContext);
  return (
    <div>
      <ListGroupItem>
        {`${id}, ${post?.message}`}
        <Button onClick={() => deleteHandler(id)} className="btn-danger">delete</Button>
      </ListGroupItem>

    </div>
  );
}

export default memo(PostItem);
