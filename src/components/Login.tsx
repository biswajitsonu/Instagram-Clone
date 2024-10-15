import React, { useState } from "react";
import instagramLogoImage from "../assets/instagram-logo.png";
import facebookImage from "../assets/facebook.png";
import googePlayImage from "../assets/googleplay-button.png";
import appStoreImage from "../assets/apple-button.png";
import phoneImage2 from "../assets/phone2.png";
import '../App.css';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    alert("working");
  };

  return (
    <div className="main-container">
    
      <div className="phone-section">
        <img src={phoneImage2} alt="phone" className="phone-image" />
      </div>

      {}
      <div className="login-section">
        <div className="box-1">
          <div className="box-1-logo">
            <img src={instagramLogoImage} alt="Instagram Logo" className="instagram-logo" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Phone number, username, or email address"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-button-box">
            <button className="login-button" onClick={loginHandler}>
              Log In
            </button>
          </div>
          <div className="lines-box">
            <div className="line"></div>
            <div className="or-box">OR</div>
            <div className="line"></div>
          </div>
          <div className="fb-box">
            <img src={facebookImage} alt="Facebook Logo" className="fb-logo" />
            <p className="fb-link">Log in with Facebook</p>
          </div>
          <div className="forgotten-password-box">
            <p className="forgotten-password-link">Forgot password?</p>
          </div>
        </div>
        <div className="box-2">
          <p>
            Don't have an account? <span className="sign-up-span">Sign up</span>
          </p>
        </div>
        <div className="get-app-box">
          <p>Get the app.</p>
        </div>
        <div className="app-store-google-play-box">
          <img src={appStoreImage} alt="App Store" className="app-store-image" />
          <img src={googePlayImage} alt="Google Play" className="google-play-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
