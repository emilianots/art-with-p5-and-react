import React from "react";
import { Button } from "@material-ui/core";
import ArtOne from "../components/artOne";

interface IProps {}

const PageOne: React.FC<IProps> = (props: IProps) => {
  return (
    <div style={{ paddingTop: 20 }}>
      <ArtOne />
    </div>
  );
};

export default PageOne;
