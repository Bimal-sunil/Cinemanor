import React from "react";
import SubHeader from "./SubHeader";
import Slider from "./Slider";
import { ContentType } from "../utils/enum";

type Props = {
  /**Category name */
  category: string;

  /**Type of content fetching */
  contentType: `${ContentType}`;
};

function SubSection(props: Props) {
  const { category, contentType } = props;
  return (
    <>
      <SubHeader title={category} />
      <Slider category={category} contentType={contentType} />
    </>
  );
}

export default SubSection;
