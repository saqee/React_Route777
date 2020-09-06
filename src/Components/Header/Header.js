import React from 'react';
import './Header.css'
import Typography from '@material-ui/core/Typography'
import {
    
    Link
  } from "react-router-dom";
const Header = () => {
     const navBar={
        backgroundColor:'black',
        padding:'20px',
        textAlign:'center'
    }
     let item={
         marginRight:'20px',
         textDecoration:'none',
         color:'#F9773B',
         
     }
     
    return (
   <Typography style={navBar}>
  <Link to="/" style={item}>
    Home
  </Link>
  <Link to="/post" style={item}>
    Post
  </Link>
  <Link to="/about" style={item}>
    about us
  </Link>
</Typography>
    );
};

export default Header;