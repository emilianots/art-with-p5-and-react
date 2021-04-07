import React from "react";
import ArtSix from '../components/artSix'

interface IProps {}

const PageSix: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtSix />
        Mova o mouse e clique para ver o que acontece
    </div>
  );
};

export default PageSix;
