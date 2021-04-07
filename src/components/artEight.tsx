import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtEight: React.FC = () => {
  var tileCount = 20;

  var moduleColor: any;
  var moduleAlpha = 180;
  var maxDistance = 500;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(720, 720).parent(canvasParentRef);
    p5.noFill();
    p5.strokeWeight(3);
    moduleColor = p5.color(0, 0, 0, moduleAlpha);
  };

  const draw = (p5: p5Types) => {
    p5.clear();

    p5.stroke(moduleColor);

    for (var gridY = 0; gridY < p5.width; gridY += 25) {
      for (var gridX = 0; gridX < p5.height; gridX += 25) {
        var diameter = p5.dist(p5.mouseX, p5.mouseY, gridX, gridY);
        diameter = (diameter / maxDistance) * 40;
        p5.push();
        p5.translate(gridX, gridY, diameter * 5);
        p5.rect(0, 0, diameter, diameter); // also nice: ellipse(...)
        p5.pop();
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ArtEight;
