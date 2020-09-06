import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useEffect } from 'react';
import { useState } from 'react';
const Comments = (props) => {
    const {email,name,postId,id}=props.comment
    const [photo,setPhoto]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos/'+id)
        .then(res=> res.json())
        .then(photo=> setPhoto(photo))
    })
   
    const body1={
        borderBottom:'1px solid #FFEA8C',
        borderRadius:'5px',
        width:'1000px',
         textAlign:'center',
         marginLeft:'20px'
      }
      const comment={
          textAlign:'center',
          display:'flex',
          justtifyContent:'center'
      }
      const imgSt={

      }
    return (
        <div style={body1}>
              
            <Grid  style={comment}>
              <Grid item  xs={5} style={imgSt}>
              {
                  <img src={photo.thumbnailUrl} alt=""/>
              }
              </Grid>
              <Grid item xs={7}>
              <p>Name:<strong>{name}</strong></p>
                <p>Email:<strong>{email}</strong></p>
              </Grid>
              
            </Grid>
        </div>
    );
};

export default Comments;