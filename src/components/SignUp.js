import React from "react";

const SignUp = ({ isActive, onClose, onSignInClick, onSignUpSubmit }) => {
  return (
    <div className={`signup-form-container ${isActive ? "active" : ""}`}>
      <div id="close-signup-btn" className="fas fa-times" onClick={onClose}></div>

      <form onSubmit={onSignUpSubmit}>
        <h3>Register on my store</h3>
        <span>Email</span>
        <input
          type="email"
          className="box"
          placeholder="enter your email"
          name="email" // Changed from id to name
        />
        <span>Password</span>
        <input
          type="password"
          className="box"
          placeholder="enter your password"
          name="password" // Changed from id to name
        />
        <span>Confirm Password</span>
        <input
          type="password"
          className="box"
          placeholder="confirm your password"
          name="password_confirmation" // Changed from id to name
        />

        <div className="checkbox">
          <input type="checkbox" id="remember-me2" />
          <label htmlFor="remember-me2"> Remember me </label>
        </div>
        <p>
          I do have an account?{" "}
          <a href="#" id="signin" onClick={onSignInClick}>
            click here
          </a>
        </p>
        <input type="submit" value="Sign up" className="btn" id="signupbtn" />
      </form>
    </div>
  );
};

export default SignUp;
