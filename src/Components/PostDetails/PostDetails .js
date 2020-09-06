import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails  = (props) => {
    const {postId}=useParams()
    const [data,setData]=useState([])
    const [comments,setComments]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
        .then(res=> res.json())
        .then(data=> setData(data))
    })

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+postId+'/comments')
        
        .then(res=> res.json())
        .then(data=> setComments(data))
    })
    
    const body1={
        border:'1px solid #FFEA8C',
        borderRadius:'5px',
        width:'1000px',
         textAlign:'center',
         margin:'50px'
      }
    return (
        <div>
      <Card style={body1}>
      <CardContent>
        <Typography>
         <h2 style={{color:'#1389E6'}}>{data.title}</h2>
        </Typography>
        <Typography>
        <p>{data.body}</p>
        </Typography>
        </CardContent>
        </Card>
        <h4 style={{color:'grey',textAlign:'center'}}>Comments Section</h4>  
       { comments.map(comment => <Comments comment={comment}></Comments>)}
     
      
    </div>
    );
};

export default PostDetails ;