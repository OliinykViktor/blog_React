import { Paper, CardContent, Typography, Button, Box } from '@mui/material';
import { FC, useState } from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import CommentList from './CommentList';
import plugImg from '../assets/img/ozero-sinevir-bg.jpg'

const PostCard:FC = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState<boolean>(false);
  const [commentPostId, setCommentPostId] = useState<number>();
  
  const openCommentList = (postId:number) => {
    setCommentOpen(!commentOpen);
    setCommentPostId(postId)
  };
  return (
    <Paper sx={{borderRadius: '0 0 10 10', backgroundColor:"#abaca20c"}}>
      <CardContent>
        <img src={plugImg} alt="img" style={{objectFit:'contain', width:'100%', borderRadius:7}}/>
        <Typography sx={{mt:'25px'}} variant="h5">{post.title}</Typography>
        <Typography>{post.body}</Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
        <Button onClick={() => openCommentList(post.id)} sx={{ color: 'black' }}>
          <CommentIcon />
        </Button>
      </Box>
          {commentOpen && commentPostId === post.id ? <CommentList postId={post.id} /> : null}
    </Paper>
  );
};

export default PostCard;