import { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { fetchComments } from '../services/api';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(postId).then(response => {
      setComments(response.data);
    });
  }, [postId]);

  return (
    <TransitionGroup component={List}>
      {comments.map(comment => (
        <CSSTransition key={comment.id} timeout={500} classNames="fade">
          <ListItem >
            <ListItemText primary={comment.name} secondary={comment.body} />
          </ListItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default CommentList;
