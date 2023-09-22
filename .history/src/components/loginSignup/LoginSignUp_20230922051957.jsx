import React, { useState } from "react";

const Login = () => {
  const [ newUser, setNewUser ] = useState( false );

  const handleRegister = () =>
  { 
    setNewUser( !newUser );
  };
  return (
    <>
      <div className="right-sidebar-container">
        {newUser ? (
          <>
          
          </>
        ) : (
          <>
            
          </>
        )}
      </div>
    </>
  );
};

export default Login;
