import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Header.css";
import fire from "../../Login/Login/firebase.config";

const Header = () => {
  const handleLogOut = () => {
    fire.auth().signOut();
  };
  return (
    <div className="header-container">
      <Navbar handleLogOut={handleLogOut}></Navbar>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default Header;
