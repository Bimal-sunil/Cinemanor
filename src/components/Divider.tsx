import React from "react";
import "../styles/Divider.css";

type Styles = {
  style?: React.CSSProperties;
};

function Divider(props: Styles) {
  const { style } = props;
  return <div className="divider" style={style}></div>;
}

export default Divider;
