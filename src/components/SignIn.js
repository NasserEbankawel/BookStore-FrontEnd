import React from "react";

const SignIn = ({ isActive, onClose, onSignUpClick, onSignInSubmit }) => {
  return (
    <div className={`login-form-container ${isActive ? "active" : ""}`}>
      <div id="close-login-btn" className="fas fa-times" onClick={onClose}></div>

      <form onSubmit={onSignInSubmit}> 
        <h3>Sign in on my store</h3>
        <span>Username</span>
        <input
          type="email"
          className="box"
          placeholder="enter your email"
 
          name="email" // Add name attribute for easier access
        />
        <span>Password</span>
        <input
          type="password"
          className="box"
          placeholder="enter your password"
         
          name="password" // Add name attribute for easier access
        />

        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input type="submit" value="Sign in" className="btn" id="loginbtn" />
        <p>
          Forget password? <a href="#">Click here</a>
        </p>
        <p>
          Don't have an account?{" "}
          <a href="#" id="signup" onClick={onSignUpClick}>
            Create one
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
