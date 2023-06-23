import React, { useRef } from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Divider from "./Divider";

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};

function Header() {
  const CustomNavLink = ({ to, children }: CustomLinkProps) => (
    <NavLink to={to} className="nav-link">
      {children}
    </NavLink>
  );
  return (
    <div className="header">
      <img src="assets/logo.png" alt="" className="header-logo" />
      <div className="nav-container">
        <Search />
        <ul className="nav-bar">
          <li className="nav-item">
            <CustomNavLink to="/">
              Home
              <div className="active-nav-highlight"></div>
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink to="/categories">
              Categories
              <div className="active-nav-highlight"></div>
            </CustomNavLink>
          </li>
          <li className="nav-item">
            <CustomNavLink to="/about">
              About
              <div className="active-nav-highlight"></div>
            </CustomNavLink>
          </li>
        </ul>
      </div>
      <Divider style={{ position: "absolute", bottom: 0 }} />
    </div>
  );
}

export default Header;
