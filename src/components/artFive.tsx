import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtFive: React.FC = () => {
  var tileCount = 20;
  var actRandomSeed = 0;

  var actStrokeCap: any = undefined;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(900, 700).parent(canvasParentRef);

    actStrokeCap = p5.ROUND;
  };

  const draw = (p5: p5Types) => {
    p5.clear();
    p5.strokeCap(actStrokeCap);
    p5.randomSeed(actRandomSeed);

    for (var gridY = 0; gridY < tileCount; gridY++) {
      for (var gridX = 0; gridX < tileCount; gridX++) {
        var posX = (p5.width / tileCount) * gridX;
        var posY = (p5.height / tileCount) * gridY;

        var toggle = p5.int(p5.random(0, 2));

        if (toggle === 0) {
          p5.strokeWeight(p5.mouseX / 20);
          p5.line(
            posX,
            posY,
            posX + p5.width / tileCount,
            posY + p5.height / tileCount
          );
        }
        if (toggle === 1) {
          p5.strokeWeight(p5.mouseY / 20);
          p5.line(
            posX,
            posY + p5.width / tileCount,
            posX + p5.height / tileCount,
            posY
          );
        }
      }
    }
  };

  const keyPressed = (p5: p5Types) => {
    switch (p5.key) {
      case "1":
        actStrokeCap = p5.ROUND;
        break;
      case "2":
        actStrokeCap = p5.SQUARE;
        break;
      case "3":
        actStrokeCap = p5.PROJECT;
        break;
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
};

export default ArtFive;
