import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios"; // Keep axios for sign-in and sign-up handling
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CustomerInfo from "./CustomerInfo";

const Header = ({ searchQuery, setSearchQuery }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCustomerInfo, setShowCustomerInfo] = useState(false);
  const [formData, setFormData] = useState({});

  const handleUserIconClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
    setShowCustomerInfo(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
    setShowCustomerInfo(false);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password_confirmation = e.target.password_confirmation.value;

    if (password !== password_confirmation) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    setFormData({ email, password, password_confirmation });
    setShowSignUp(false);
    setShowCustomerInfo(true);
  };

  const handleCustomerInfoSubmit = async (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    const finalData = {
      ...formData,
      firstname,
      lastname,
      address,
      phone,
    };

    try {
      const response = await axios.post("http://localhost:8000/api/register", finalData);
      if (response.status === 201) {
        alert("Registration successful!");
        closeForms();
        setShowSignIn(true);
      } else {
        alert(`An error occurred. Status: ${response.status}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://localhost:8000/api/login", { email, password });
      if (response.status === 200) {
        alert("Sign-in successful!");
        closeForms();
        window.location.reload();
      } else {
        alert(`Invalid Credentials. Status: ${response.status}`);
      }
    } catch (error) {
      alert("Invalid Credentials. Please try again.");
    }
  };

  const closeForms = () => {
    setShowSignIn(false);
    setShowSignUp(false);
    setShowCustomerInfo(false);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <i className="fas fa-book"></i> bookly
          </a>

          <form action="" className="search-form">
            <input
              type="search"
              placeholder="search here..."
              id="search-box"
              value={searchQuery}
              onChange={handleSearchChange} // Handle search input
            />
            <label htmlFor="search-box" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <div id="search-btn" className="fas fa-search"></div>
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-shopping-cart"></a>
            <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <Link to="/">home</Link>
            <Link to="/Genre">Genre</Link>
            <Link to="/featured">featured</Link>
            <Link to="#arrivals">arrivals</Link>
            <Link to="#reviews">reviews</Link>
            <Link to="#blogs">contact</Link>
          </nav>
        </div>
      </header>

      {/* Render the forms conditionally */}
      <SignIn
        isActive={showSignIn}
        onClose={closeForms}
        onSignUpClick={handleSignUpClick}
        onSignInSubmit={handleSignInSubmit}
      />

      <SignUp
        isActive={showSignUp}
        onClose={closeForms}
        onSignUpSubmit={handleSignUpSubmit}
      />

      <CustomerInfo
        isActive={showCustomerInfo}
        onClose={closeForms}
        onSubmit={handleCustomerInfoSubmit}
      />
    </div>
  );
};

export default Header;