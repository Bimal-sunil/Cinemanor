import React from "react";
import Search from "./Search";
import { Link, NavLink } from "react-router-dom";
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
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src="assets/logo.png" alt="" className="header-logo" />
      </Link>
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
            <CustomNavLink to="/tv">
              Tv
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
