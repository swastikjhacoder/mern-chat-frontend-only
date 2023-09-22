import React, { useState } from "react";

const Login = () => {
  const [ newUser, setNewUser ] = useState( false );
  return (
    <>
      <div className="right-sidebar-container">
        {newUser ? (
          <>
          <Sig
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
