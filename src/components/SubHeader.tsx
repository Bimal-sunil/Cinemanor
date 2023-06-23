import React from "react";
import Divider from "./Divider";
import "../styles/SubHeader.css";

type Props = {
  title: string;
};

function SubHeader(props: Props) {
  const { title } = props;
  return (
    <div className="sub-header-component">
      <span className="sub-header">{title}</span>
      <Divider />
    </div>
  );
}

export default SubHeader;
