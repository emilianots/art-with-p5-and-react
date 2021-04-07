import React from "react";
import ArtFour from "../components/artFour";

interface IProps {}

const PageFour: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtFour />
      Mova o mouse e veja o que acontece
    </div>
  );
};

export default PageFour;
