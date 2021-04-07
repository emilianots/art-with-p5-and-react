import React from "react";
import ArtNine from "../components/artNine";

interface IProps {}

const PageNine: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtNine />
      Clique (direito ou esquerdo do mouse) e mova o mouse e utilize as teclas de seta, espaço e as teclas "+" e "-" e veja o que acontece
    </div>
  );
};

export default PageNine;
