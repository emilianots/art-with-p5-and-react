import React from "react";
import ArtThree from "../components/artThree";

interface IProps {}

const PageThree: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtThree />
      Pressione as teclas de 1 a 5 e mova o mouse junto para ver o que acontece
    </div>
  );
};

export default PageThree;
