import React from "react";
import ArtEight from "../components/artEight";

interface IProps {}

const PageEight: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtEight />
      Mova o mouse e veja o que acontece
    </div>
  );
};

export default PageEight;
