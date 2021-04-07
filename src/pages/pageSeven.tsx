import React from "react";
import ArtSeven from "../components/artSeven";

interface IProps {}

const PageSeven: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtSeven />
      Clique, segure e mova o mouse e alterne entre as teclas 1 e 3
    </div>
  );
};

export default PageSeven;
