import React from "react";
import "../styles/Footer.css";
import Divider from "./Divider";

function Footer() {
  return (
    <div className="footer">
      <Divider style={{ position: "absolute", top: 0 }} />
      <i className="uil uil-copyright"></i>
      <span>2023 Cinemanor.Inc</span>
    </div>
  );
}

export default Footer;
