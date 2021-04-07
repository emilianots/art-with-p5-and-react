import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtTwo: React.FC = () => {
  let stepX;
  let stepY;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(900, 700).parent(canvasParentRef);
    p5.noStroke();
    p5.colorMode(p5.HSB, p5.width, p5.height, 100);
  };

  const draw = (p5: p5Types) => {
    stepX = Math.abs(p5.mouseX) + 2;
    stepY = Math.abs(p5.mouseY) + 2;

    p5.background(p5.mouseY / 2, 100, 100);

    for (var gridY = 0; gridY < p5.height; gridY += stepY) {
      for (var gridX = 0; gridX < p5.width; gridX += stepX) {
        p5.fill(gridX, p5.height - gridY, 100);
        p5.rect(gridX, gridY, stepX, stepY);
      }
    }
  };

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
      Mova o mouse e veja o que acontece
    </div>
  );
};

export default ArtTwo;
