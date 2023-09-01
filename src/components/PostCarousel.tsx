import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { fetchPosts } from '../services/api';
import PostCard from './PostCard';
import AddPostModal from './AddPostModal';

const PostCarousel = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchPosts().then(response => {
      setPosts(response.data);
    });
  }, []);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddPost = newPost => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  return (
<div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button onClick={handleModalOpen} style={{ color: 'black', alignSelf: 'flex-end', fontSize:'1.3em'}}>
        Add New Post
      </Button>
      {posts.map(post => (
        <div key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
      <AddPostModal open={modalOpen} onClose={handleModalOpen} onSubmit={handleAddPost} />
    </div>
  );
};

export default PostCarousel;
