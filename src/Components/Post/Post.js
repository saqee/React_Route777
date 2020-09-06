import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './Post.css'
import PostShow from '../PostShow/PostShow';
const Post = () => {
    const [post,setPost]=useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> setPost(data.slice(0,30)))
        
    })
    
    return (
        <div>
           
             {
                 post.map(post=> <PostShow post={post}></PostShow>)
             }
        </div>
    );
};

export default Post;