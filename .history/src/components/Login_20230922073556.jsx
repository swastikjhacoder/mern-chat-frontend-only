import React from "react";
import { useSelector } from "react-redux";
import { Button} from '@mui/material';

const Login = ({ toggleForm }) => {
  const { color, background } = useSelector((state) => state.liveChat);
  return (
    <div className="login-container">
      
      <p className="create-account">
        Don't have an Account? 
        <Button variant="outlined" style={{marginLeft:'10px'}}>Register</Button>
      </p>
    </div>
  );
};

export default Login;
