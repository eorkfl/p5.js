function setup() {
  createCanvas(400, 600);
}

function draw() {
  // 하루 순환
  let cycle = (frameCount * 0.003) % 1;

  let brightness;
  if (cycle < 0.05) brightness = map(cycle, 0, 0.05, 0.3, 1);
  else if (cycle < 0.45) brightness = 1;
  else if (cycle < 0.55) brightness = map(cycle, 0.45, 0.55, 1, 0);
  else if (cycle < 0.95) brightness = 0;
  else brightness = map(cycle, 0.95, 1, 0, 0.3);

  // 하늘 
  let skyA = color(135, 190, 240);
  let skyB = color(230, 225, 215);
  let skyC = color(255, 120, 60);
  let skyD = color(255, 180, 100);
  let skyE = color(10, 10, 40);
  let skyF = color(30, 30, 70);

  for (let y = 0; y < 600; y++) {
    let skyG = y / 600;
    let skyH = lerpColor(skyA, skyB, skyG);
    let skyI = lerpColor(skyE, skyF, skyG);
    let skyJ = lerpColor(skyC, skyD, skyG);

    let skyK;
    if (cycle >= 0.45 && cycle < 0.55) {
      let skyL = (cycle - 0.45) / 0.1;
      if (skyL < 0.5) {
        skyK = lerpColor(skyH, skyJ, skyL * 2);
      } else {
        skyK = lerpColor(skyJ, skyI, (skyL - 0.5) * 2);
      }
    } else if (cycle >= 0.95 || cycle < 0.05) {
      let skyM;
      if (cycle >= 0.95) skyM = map(cycle, 0.95, 1, 0, 0.5);
      else skyM = map(cycle, 0, 0.05, 0.5, 1);
      let skyN = color(180, 140, 160);
      let skyO = color(220, 180, 160);
      let skyP = lerpColor(skyN, skyO, skyG);
      if (skyM < 0.5) {
        skyK = lerpColor(skyI, skyP, skyM * 2);
      } else {
        skyK = lerpColor(skyP, skyH, (skyM - 0.5) * 2);
      }
    } else {
      skyK = lerpColor(skyH, skyI, 1 - brightness);
    }
    stroke(skyK);
    line(0, y, 400, y);
  }
  noStroke();

  // 해 
  if (cycle < 0.55) {
    let sunA = cycle / 0.55;
    let sunB = lerp(-30, 430, sunA);
    let sunC = 300 - 280 * sin(sunA * PI);
    let sunD = 255;
    if (cycle < 0.03) sunD = map(cycle, 0, 0.03, 0, 255);
    if (cycle > 0.5) sunD = map(cycle, 0.5, 0.55, 255, 0);

    for (let r = 40; r >= 0; r--) {
      fill(255, 200, 50, sunD * 0.02 * (40 - r));
      ellipse(sunB, sunC, 50 + r * 2, 50 + r * 2);
    }
    fill(255, 220, 60, sunD);
    ellipse(sunB, sunC, 50, 50);
    for (let i = 0; i < 8; i++) {
      let sunE = i * PI / 4 + frameCount * 0.01;
      let sunF = 12 + 4 * sin(frameCount * 0.05 + i);
      stroke(255, 220, 60, sunD * 0.6);
      strokeWeight(2);
      let sx = sunB + cos(sunE) * 30;
      let sy = sunC + sin(sunE) * 30;
      let ex = sunB + cos(sunE) * (30 + sunF);
      let ey = sunC + sin(sunE) * (30 + sunF);
      line(sx, sy, ex, ey);
    }
    noStroke();
  }

  // 달 
  if (cycle > 0.5) {
    let moonA = (cycle - 0.5) / 0.5;
    let moonB = lerp(-30, 430, moonA);
    let moonC = 280 - 250 * sin(moonA * PI);
    let moonD = 255;
    if (cycle < 0.58) moonD = map(cycle, 0.5, 0.58, 0, 255);
    if (cycle > 0.93) moonD = map(cycle, 0.93, 1, 255, 0);

    for (let r = 20; r >= 0; r--) {
      fill(200, 210, 255, moonD * 0.015 * (20 - r));
      ellipse(moonB, moonC, 40 + r * 3, 40 + r * 3);
    }
    fill(240, 240, 210, moonD);
    ellipse(moonB, moonC, 40, 40);
  }

  //  별 
  if (brightness < 0.7) {
    let starA = map(brightness, 0.7, 0, 0, 255);
    let starB = [
      [30, 50], [70, 30], [150, 20], [250, 45], [350, 25],
      [55, 100], [130, 70], [300, 80], [370, 60], [200, 35],
      [20, 140], [90, 160], [170, 130], [280, 150], [360, 130],
      [45, 200], [140, 180], [330, 170], [230, 100], [380, 200]
    ];
    for (let i = 0; i < starB.length; i++) {
      let starC = 180 + 75 * sin(frameCount * 0.08 + i * 1.7);
      let starD = min(starA, starC);
      let starE = 2 + 1.5 * sin(frameCount * 0.06 + i * 2.3);
      fill(255, 255, 230, starD);
      noStroke();
      ellipse(starB[i][0], starB[i][1], starE, starE);
    }
  }

  // 구름
  let cloudA = map(brightness, 0, 1, 80, 255);
  drawCloud(((frameCount * 0.3) % 500) - 60, 90, 1.0, cloudA);
  drawCloud(((frameCount * 0.2 + 200) % 550) - 80, 140, 0.7, cloudA);
  drawCloud(((frameCount * 0.25 + 400) % 520) - 70, 60, 0.85, cloudA);
  
  // 피부
  fill(242, 215, 186);
  noStroke();
  rect(160, 370, 80, 200);
  rect(55, 530, 50, 90);
  rect(295, 530, 50, 90);

  // 티셔츠 
  fill('#788CB4');
  arc(200, 420, 220, 180, 0, PI);
  rect(100, 450, 200, 200);
  ellipse(103, 440, 70, 40);
  ellipse(100, 455, 70, 40);
  ellipse(97, 470, 70, 40);
  ellipse(94, 485, 70, 40);
  ellipse(91, 500, 70, 40);
  ellipse(88, 515, 70, 40);
  ellipse(85, 530, 70, 40);
  ellipse(297, 440, 70, 40);
  ellipse(300, 455, 70, 40);
  ellipse(303, 470, 70, 40);
  ellipse(306, 485, 70, 40);
  ellipse(309, 500, 70, 40);
  ellipse(312, 515, 70, 40);
  ellipse(315, 530, 70, 40);

  // 곰돌이 (심장 박동) 
  let bear = 1 + 0.15 * sin(frameCount * 0.05);
  push();
  translate(200, 520);
  scale(bear);
  fill('#D2AA6E');
  ellipse(0, 0, 40, 36);
  ellipse(-15, -15, 16, 16);
  ellipse(15, -15, 16, 16);
  fill('#B48C5A');
  ellipse(-15, -15, 10, 10);
  ellipse(15, -15, 10, 10);
  fill(60);
  ellipse(-7, -4, 5, 5);
  ellipse(7, -4, 5, 5);
  fill(40);
  ellipse(0, 3, 6, 4);
  pop();

  // 얼굴 
  fill(242, 215, 186);
  stroke(200, 175, 150);
  strokeWeight(1);
  ellipse(200, 280, 160, 200);
  ellipse(118, 280, 28, 40);
  ellipse(282, 280, 28, 40);

  // 버즈 
  fill(245, 245, 248);
  stroke(220, 220, 225);
  ellipse(111, 284, 13, 14);
  noStroke();
  fill(235, 235, 240);
  rect(106, 286, 10, 14, 3);

  //버즈 신호음파
  for (let i = 0; i < 3; i++) {
    let buzzA = ((frameCount * 2 + i * 30) % 90) / 90;
    let buzzB = 10 + buzzA * 35;
    let buzzC = 255 * (1 - buzzA);
    noFill();
    stroke(100, 150, 255, buzzC);
    strokeWeight(1.5);
    arc(111, 284, buzzB, buzzB, PI * 2 / 3, PI * 4 / 3);
  }

  // 머리카락
  fill(40, 32, 25);
  noStroke();
  arc(200, 218, 170, 120, PI, 0);
  quad(130, 210, 160, 195, 240, 195, 275, 225);
  quad(160, 195, 240, 195, 265, 220, 270, 240);
  rect(250, 220, 22, 30, 3);
  rect(130, 210, 20, 30, 2);
  rect(120, 218, 16, 45, 2);
  rect(264, 218, 16, 45, 2);

  // 눈썹
  noFill();
  stroke(120, 100, 85);
  strokeWeight(2);
  arc(170, 262, 42, 14, PI, 0);
  arc(232, 262, 42, 14, PI, 0);

  // 눈 
  fill(255);
  noStroke();
  ellipse(170, 278, 26, 19);
  ellipse(232, 278, 26, 19);
  fill(50, 30, 18);
  ellipse(170, 279, 14, 16);
  ellipse(232, 279, 14, 16);
  fill(0);
  ellipse(170, 279, 7, 7);
  ellipse(232, 279, 7, 7);
  fill(255);
  ellipse(173, 276, 3, 3);
  ellipse(235, 276, 3, 3);

  // 코 
  noFill();
  stroke('#DCCBAA');
  strokeWeight(1.5);
  arc(200, 315, 18, 10, 0, PI);

  // 입 
  fill('#C8826E');
  noStroke();
  arc(200, 343, 34, 12, 0, PI);
}

function drawCloud(cloudB, cloudC, cloudD, cloudE) {
  fill(cloudE, cloudE, cloudE, 200);
  noStroke();
  ellipse(cloudB, cloudC, 60 * cloudD, 35 * cloudD);
  ellipse(cloudB - 20 * cloudD, cloudC + 5 * cloudD, 40 * cloudD, 25 * cloudD);
  ellipse(cloudB + 22 * cloudD, cloudC + 5 * cloudD, 45 * cloudD, 28 * cloudD);
  ellipse(cloudB + 10 * cloudD, cloudC - 8 * cloudD, 35 * cloudD, 25 * cloudD);
}
