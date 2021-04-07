import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtSeven: React.FC = () => {
  var strokeColor: any;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(720, 720).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 360, 100, 100, 100);
    p5.noFill();
    p5.strokeWeight(2);
    strokeColor = p5.color(0, 10);
  };

  const draw = (p5: p5Types) => {
    if (p5.mouseIsPressed && p5.mouseButton === p5.LEFT) {
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2);

      var circleResolution = p5.int(
        p5.map(p5.mouseY + 100, 0, p5.height, 2, 10)
      );
      var radius = p5.mouseX - p5.width / 2;
      var angle = p5.TAU / circleResolution;

      p5.stroke(strokeColor);

      p5.beginShape();
      for (var i = 0; i <= circleResolution; i++) {
        var x = p5.cos(angle * i) * radius;
        var y = p5.sin(angle * i) * radius;
        p5.vertex(x, y);
      }
      p5.endShape();

      p5.pop();
    }
  };

  function keyReleased(p5: p5Types) {
    if (p5.keyCode === p5.DELETE || p5.keyCode == p5.BACKSPACE)
      p5.background(0, 0, 100);

    if (p5.key === "1") strokeColor = p5.color(0, 10);
    if (p5.key === "2") strokeColor = p5.color(192, 100, 64, 10);
    if (p5.key === "3") strokeColor = p5.color(52, 100, 71, 10);
  }

  return <Sketch setup={setup} draw={draw} keyReleased={keyReleased} />;
};

export default ArtSeven;
