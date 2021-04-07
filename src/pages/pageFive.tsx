import React from "react";
import ArtFive from "../components/artFive";

interface IProps {}

const PageFive: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtFive />
      Pressione as teclas de 1 a 3 e mova o mouse junto e veja o que acontece
    </div>
  );
};

export default PageFive;
