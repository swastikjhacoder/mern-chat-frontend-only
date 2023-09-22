import React, { useState } from "react";

const Login = () => {
  const [ newUser, setNewUser ] = useState( false );
  return (
    <>
      <div className="right-sidebar-container">
        {newUser ? (
          <>
          <Sign
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
