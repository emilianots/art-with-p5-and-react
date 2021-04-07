import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const ArtEight: React.FC = () => {
  // ------ mesh ------
  var tileCount: any;
  var zScale: any;

  // ------ noise ------
  var noiseXRange: any;
  var noiseYRange: any;
  var octaves: any;
  var falloff: any;

  // ------ mesh coloring ------
  var midColor: any;
  var topColor: any;
  var bottomColor: any;
  var strokeColor: any;
  var threshold: any;

  // ------ mouse interaction ------
  var offsetX: any;
  var offsetY: any;
  var clickX: any;
  var clickY: any;
  var zoom: any;
  var rotationX: any;
  var rotationZ: any;
  var targetRotationX: any;
  var targetRotationZ: any;
  var clickRotationX: any;
  var clickRotationZ: any;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(720, 720, p5.WEBGL).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 360, 100, 100);
    p5.cursor(p5.CROSS);

    // ------ mesh ------
    tileCount = 50;
    zScale = 150;

    // ------ noise ------
    noiseXRange = 10;
    noiseYRange = 10;
    octaves = 4;
    falloff = 0.5;

    // ------ mesh coloring ------
    topColor = p5.color(0, 0, 100);
    midColor = p5.color(191, 99, 63);
    bottomColor = p5.color(0, 0, 0);
    strokeColor = p5.color(180, 100, 100);
    threshold = 0.3;

    // ------ mouse interaction ------
    offsetX = 0;
    offsetY = 0;
    clickX = 0;
    clickY = 0;
    zoom = -300;
    rotationX = 0;
    rotationZ = 0;
    targetRotationX = p5.PI / 3;
    targetRotationZ = 0;
  };

  const draw = (p5: p5Types) => {
    p5.background(0, 0, 100);
    p5.ambientLight(150);

    // ------ set view ------
    p5.push();
    p5.translate(p5.width * 0.05, p5.height * 0.05, zoom);

    if (p5.mouseIsPressed && p5.mouseButton == p5.RIGHT) {
      offsetX = p5.mouseX - clickX;
      offsetY = p5.mouseY - clickY;
      targetRotationX = p5.min(
        p5.max(
          clickRotationX +
            (offsetY / p5.float(p5.width.toString())) * p5.TWO_PI,
          -p5.HALF_PI
        ),
        p5.HALF_PI
      );
      targetRotationZ =
        clickRotationZ + (offsetX / p5.float(p5.height.toString())) * p5.TWO_PI;
    }
    rotationX += (targetRotationX - rotationX) * 0.25;
    rotationZ += (targetRotationZ - rotationZ) * 0.25;
    p5.rotateX(-rotationX);
    p5.rotateZ(-rotationZ);

    // ------ mesh noise ------
    if (p5.mouseIsPressed && p5.mouseButton == p5.LEFT) {
      noiseXRange = p5.mouseX / 10;
      noiseYRange = p5.mouseY / 10;
    }

    p5.noiseDetail(octaves, falloff);
    var noiseYMax = 0;

    var tileSizeY = p5.height / tileCount;
    var noiseStepY = noiseYRange / tileCount;

    for (var meshY = 0; meshY <= tileCount; meshY++) {
      p5.beginShape(p5.TRIANGLE_STRIP);
      for (var meshX = 0; meshX <= tileCount; meshX++) {
        var x = p5.map(meshX, 0, tileCount, -p5.width / 2, p5.width / 2);
        var y = p5.map(meshY, 0, tileCount, -p5.height / 2, p5.height / 2);

        var noiseX = p5.map(meshX, 0, tileCount, 0, noiseXRange);
        var noiseY = p5.map(meshY, 0, tileCount, 0, noiseYRange);
        var z1 = p5.noise(noiseX, noiseY);
        var z2 = p5.noise(noiseX, noiseY + noiseStepY);

        noiseYMax = p5.max(noiseYMax, z1);
        var interColor;
        p5.colorMode(p5.RGB);
        var amount;
        if (z1 <= threshold) {
          amount = p5.map(z1, 0, threshold, 0.15, 1);
          interColor = p5.lerpColor(bottomColor, midColor, amount);
        } else {
          amount = p5.map(z1, threshold, noiseYMax, 0, 1);
          interColor = p5.lerpColor(midColor, topColor, amount);
        }
        p5.fill(interColor);
        p5.stroke(strokeColor);
        p5.strokeWeight(1);
        p5.vertex(x, y, z1 * zScale);
        p5.vertex(x, y + tileSizeY, z2 * zScale);
      }
      p5.endShape();
    }
    p5.pop();
  };

  const mousePressed = (p5: p5Types) => {
    clickX = p5.mouseX;
    clickY = p5.mouseY;
    clickRotationX = rotationX;
    clickRotationZ = rotationZ;
  };

  const keyReleased = (p5: p5Types) => {
    if (p5.keyCode === p5.UP_ARROW) falloff += 0.05;
    if (p5.keyCode === p5.DOWN_ARROW) falloff -= 0.05;
    if (falloff > 1.0) falloff = 1.0;
    if (falloff < 0.0) falloff = 0.0;

    if (p5.keyCode === p5.LEFT_ARROW) octaves--;
    if (p5.keyCode === p5.RIGHT_ARROW) octaves++;
    if (octaves < 0) octaves = 0;

    if (p5.keyCode === 187) zoom += 20; // '+'
    if (p5.keyCode === 189) zoom -= 20; // '-'

    if (p5.key === " ") p5.noiseSeed(p5.floor(p5.random(100000)));
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mousePressed={mousePressed}
      keyReleased={keyReleased}
    />
  );
};

export default ArtEight;
