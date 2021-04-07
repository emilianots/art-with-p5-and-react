import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtThree: React.FC = () => {
  var segmentCount = 6;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(900, 500).parent(canvasParentRef);
    p5.noStroke();
  };

  const draw = (p5: p5Types) => {
    p5.colorMode(p5.HSB, 360, p5.width, p5.height);
    p5.background(360, 0, p5.height);

    var angleStep = 360 / segmentCount;

    p5.beginShape(p5.TRIANGLE_FAN);
    p5.vertex(p5.width / 2, p5.height / 2);

    for (var angle = 0; angle <= 360; angle += angleStep) {
      var vx = p5.width / 2 + p5.cos(p5.radians(angle)) * 200;
      var vy = p5.height / 2 + p5.sin(p5.radians(angle)) * 200;

      p5.vertex(vx, vy);
      p5.fill(angle, p5.mouseX, p5.mouseY);
    }
    p5.endShape();
  };

  const keyPressed = (p5: p5Types) => {
    switch (p5.key) {
      case "1":
        segmentCount = 360;
        break;
      case "2":
        segmentCount = 45;
        break;
      case "3":
        segmentCount = 24;
        break;
      case "4":
        segmentCount = 12;
        break;
      case "5":
        segmentCount = 6;
        break;
    }
  };

  return <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />;
};

export default ArtThree;
