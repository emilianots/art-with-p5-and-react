import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface IProps {}

const ArtOne: React.FC<IProps> = (props: IProps) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(900, 720).parent(canvasParentRef);
    p5.noCursor();

    p5.colorMode(p5.HSB, 360, 100, 100);
    p5.rectMode(p5.CENTER);
    p5.noStroke();
  };

  const draw = (p5: p5Types) => {
    p5.background(p5.mouseY / 2, 100, 100);
    p5.fill(360 - p5.mouseY, 100, 100);
    p5.rect(450, 360, p5.mouseX + 1, p5.mouseX + 1);
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
      Mova o mouse e veja o que acontece;
    </div>
  );
};

export default ArtOne;
