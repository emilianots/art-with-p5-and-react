import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtFour: React.FC = () => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(900, 700).parent(canvasParentRef);
    p5.strokeCap(p5.SQUARE);
  };

  const draw = (p5: p5Types) => {
    p5.background(255);
    p5.translate(p5.width / 2, p5.height / 2);

    var circleResolution = p5.int(p5.map(p5.mouseY, 0, p5.height, 2, 80));
    var radius = p5.mouseX - p5.width / 2 + 0.5;
    var angle = p5.TWO_PI / circleResolution;

    p5.strokeWeight(p5.mouseY / 20);

    p5.beginShape();

    for (var i = 0; i < circleResolution; i++) {
      var x = p5.cos(angle * i) * radius;
      var y = p5.sin(angle * i) * radius;
      p5.line(0, 0, x, y);
    }
    p5.endShape(p5.CLOSE);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ArtFour;
