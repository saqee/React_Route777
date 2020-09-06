import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
const postShow = (props) => {
    const {id,title,body,userId}=props.post
    const body1={
      border:'1px solid #FFEA8C',
      borderRadius:'5px',
      width:'1000px',
       display:'flex',
       textAlign:'center',
       margin:'50px'
    }
    return (
    <div style={body1}>
    <Card>
      <CardContent>
        <Typography>
            <h2 style={{color:'#1389E6'}}>{title}</h2>
        </Typography>
        
      
        <Typography>
           <p>{body}</p>
          
        </Typography>
      </CardContent>
      <CardActions style={{float:'right'}}>
        <Button ><Link to={'/'+id} >Read More...</Link></Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default postShow;