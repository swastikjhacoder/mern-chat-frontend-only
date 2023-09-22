import React from 'react'

const SignUp = ({ toggleForm }) => {
  return (
    <div className="signUp-container">
      <p>Register your Account</p>
      <div className="input-box">
        <input type="text" name="name" required="required" />
        <span>Name</span>
      </div>
      <div className="input-box">
        <input type="email" name="email" required="required" />
        <span>Email</span>
      </div>
      <div className="input-box">
        <input type="text" name="mobile" required="required" />
        <span>Mobile</span>
      </div>
      <div className="input-box">
        <input type="password" name="password" required="required" />
        <span>Password</span>
      </div>
      <div className="input-box">
        <input type="file" name="file" />
        <span>Profile Picture</span>
      </div>
      <p className="create-account">
        Already have an Account?
        <button onClick={() => toggleForm()}>Login</button>
      </p>
    </div>
  );
};

export default SignUp