import { useState } from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-items">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cook-logo-food-logo-design-template-853a1304372e26953ffd93f44d7b6cf5_screen.jpg?ts=1732296111"
          alt=""
        />
      </div>

      <div className="nav-links">
        <ul>
          <li>Home </li>
          <li>About Us</li>
          <li>Contact Us </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="header">
      <Header />
    </div>
  );
};

export default AppLayout;
