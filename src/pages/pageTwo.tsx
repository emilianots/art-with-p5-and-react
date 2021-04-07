import React from "react";
import ArtTwo from "../components/artTwo";

interface IProps {}

const PageTwo: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtTwo />
    </div>
  );
};

export default PageTwo;
