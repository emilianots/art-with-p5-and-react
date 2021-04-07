import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtSix: React.FC = () => {
  var tileCount = 20;
  var actRandomSeed = 0;

  var circleAlpha = 130;
  var circleColor: any;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(900, 700).parent(canvasParentRef);
    p5.noFill();
    circleColor = p5.color(0, 0, 0, circleAlpha);
  };

  const draw = (p5: p5Types) => {
    p5.translate(p5.width / tileCount / 2, p5.height / tileCount / 2);

    p5.background(255);

    p5.randomSeed(actRandomSeed);

    p5.stroke(circleColor);
    p5.strokeWeight(p5.mouseY / 60);

    for (var gridY = 0; gridY < tileCount; gridY++) {
      for (var gridX = 0; gridX < tileCount; gridX++) {
        var posX = (p5.width / tileCount) * gridX;
        var posY = (p5.height / tileCount) * gridY;

        var shiftX = p5.random(-p5.mouseX, p5.mouseX) / 20;
        var shiftY = p5.random(-p5.mouseX, p5.mouseX) / 20;

        p5.ellipse(
          posX + shiftX,
          posY + shiftY,
          p5.mouseY / 15,
          p5.mouseY / 15
        );
      }
    }
  };

  const mousePressed = (p5: p5Types) => {
    actRandomSeed = p5.random(100000);
  };

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
};

export default ArtSix;
