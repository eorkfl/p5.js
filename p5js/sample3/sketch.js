/*********************************************
  1. mouse:
    - 마우스 클릭: 울기 모드 
       
  2. keyboard:
    - 스페이스바: 머리카락 색 바뀜
                 (검정 → 갈색 → 금발 → 핑크)
    - ↑ 키: 점프 (뛰어오르기)
    - ← → 키: 배경  변경 ( ↔ 바다)
*********************************************/

let crying = false;
let tearY = 285;
let hairIndex = 0;
let yOff = 0;
let jumpVel = 0;
let isJumping = false;
let bgIndex = 0;

function setup() {
  createCanvas(400, 600);
}

function draw() {
  if (bgIndex == 0) {
    background(255, 220, 235);
    noStroke();
    for (let i = 0; i < 18; i++) {
      let px = (i * 83 + frameCount * (i % 3 + 1) * 0.7) % 420 - 10;
      let py = (i * 61 + frameCount * 1.2) % 620 - 10;
      fill(255, 170, 195, 200);
      ellipse(px, py, 10, 7);
      fill(255, 200, 215, 150);
      ellipse(px + 5, py + 3, 8, 5);
    }
  } else {
    background(160, 215, 245);
    noStroke();
    fill(255, 255, 255, 210);
    let cx = sin(frameCount * 0.008) * 12;
    ellipse(80 + cx, 75, 85, 42);
    ellipse(112 + cx, 63, 62, 36);
    ellipse(52 + cx, 70, 52, 32);
    ellipse(300 - cx, 95, 92, 42);
    ellipse(335 - cx, 83, 65, 36);
    fill(70, 150, 210);
    rect(0, 480, 400, 120);
    noFill();
    stroke(255, 255, 255, 160);
    strokeWeight(2.5);
    for (let i = 0; i < 5; i++) {
      arc((i * 90 + frameCount * 2) % 500 - 60, 490, 90, 28, PI, 0);
    }
  }

  if (isJumping) {
    yOff += jumpVel;
    jumpVel += 1.2;
    if (yOff >= 0) {
      yOff = 0;
      jumpVel = 0;
      isJumping = false;
    }
  }

  if (crying) {
    tearY += 4;
    if (tearY > 360) tearY = 285;
  }

  let hr, hg, hb;
  if (hairIndex == 0) {
    hr = 40; hg = 32; hb = 25;
  } else if (hairIndex == 1) {
    hr = 101; hg = 67; hb = 33;
  } else if (hairIndex == 2) {
    hr = 215; hg = 185; hb = 60;
  } else {
    hr = 220; hg = 90; hb = 150;
  }

  fill(242, 215, 186);
  noStroke();
  rect(160, 370 + yOff, 80, 200);
  rect(55, 530 + yOff, 50, 90);
  rect(295, 530 + yOff, 50, 90);
  fill('#788CB4');
  arc(200, 420 + yOff, 220, 180, 0, PI);
  rect(100, 450 + yOff, 200, 200);
  for (let i = 0; i < 7; i++) {
    ellipse(103 - i * 3, 440 + yOff + i * 15, 70, 40);
    ellipse(297 + i * 3, 440 + yOff + i * 15, 70, 40);
  }
  fill('#D2AA6E');
  ellipse(200, 520 + yOff, 40, 36);
  ellipse(185, 505 + yOff, 16, 16);
  ellipse(215, 505 + yOff, 16, 16);
  fill('#B48C5A');
  ellipse(185, 505 + yOff, 10, 10);
  ellipse(215, 505 + yOff, 10, 10);
  fill(60);
  ellipse(193, 516 + yOff, 5, 5);
  ellipse(207, 516 + yOff, 5, 5);
  fill(40);
  ellipse(200, 523 + yOff, 6, 4);

  fill(242, 215, 186);
  stroke(200, 175, 150);
  strokeWeight(1);
  ellipse(200, 280 + yOff, 160, 200);
  ellipse(118, 280 + yOff, 28, 40);
  ellipse(282, 280 + yOff, 28, 40);
  fill(245, 245, 248);
  stroke(220, 220, 225);
  ellipse(111, 284 + yOff, 13, 14);
  noStroke();
  fill(235, 235, 240);
  rect(106, 286 + yOff, 10, 14, 3);

  noStroke();
  fill(hr, hg, hb);
  arc(200, 218 + yOff, 170, 120, PI, 0);
  quad(130, 210 + yOff, 160, 195 + yOff, 240, 195 + yOff, 275, 225 + yOff);
  quad(160, 195 + yOff, 240, 195 + yOff, 265, 220 + yOff, 270, 240 + yOff);
  rect(250, 220 + yOff, 22, 30, 3);
  rect(130, 210 + yOff, 20, 30, 2);
  rect(120, 218 + yOff, 16, 45, 2);
  rect(264, 218 + yOff, 16, 45, 2);
  noFill();
  stroke(120, 100, 85);
  strokeWeight(2);
  if (crying) {
    arc(170, 268 + yOff, 42, 14, 0, PI);
    arc(232, 268 + yOff, 42, 14, 0, PI);
  } else {
    arc(170, 262 + yOff, 42, 14, PI, 0);
    arc(232, 262 + yOff, 42, 14, PI, 0);
  }

  fill(255);
  noStroke();
  ellipse(170, 278 + yOff, 26, 19);
  ellipse(232, 278 + yOff, 26, 19);
  fill(50, 30, 18);
  ellipse(170, 279 + yOff, 14, 16);
  ellipse(232, 279 + yOff, 14, 16);
  fill(0);
  ellipse(170, 279 + yOff, 7, 7);
  ellipse(232, 279 + yOff, 7, 7);
  fill(255);
  ellipse(173, 276 + yOff, 3, 3);
  ellipse(235, 276 + yOff, 3, 3);

  if (crying) {
    fill(150, 200, 255, 200);
    noStroke();
    ellipse(163, tearY + yOff, 7, 13);
    ellipse(239, tearY + 12 + yOff, 7, 13);
  }

  noFill();
  stroke('#DCCBAA');
  strokeWeight(1.5);
  arc(200, 315 + yOff, 18, 10, 0, PI);

  strokeWeight(2.5);
  if (crying) {
    stroke('#C8826E');
    noFill();
    arc(200, 354 + yOff, 34, 14, PI, 0);
  } else {
    fill('#C8826E');
    noStroke();
    arc(200, 343 + yOff, 34, 12, 0, PI);
  }
}

function mousePressed() {
  crying = !crying;
  tearY = 285;
}

function keyPressed() {
  if (key == ' ') {
    hairIndex = hairIndex + 1;
    if (hairIndex > 3) hairIndex = 0;
  }
  if (keyCode == UP_ARROW && !isJumping) {
    isJumping = true;
    jumpVel = -20;
  }
  if (keyCode == LEFT_ARROW) {
    bgIndex = bgIndex - 1;
    if (bgIndex < 0) bgIndex = 1;
  }
  if (keyCode == RIGHT_ARROW) {
    bgIndex = bgIndex + 1;
    if (bgIndex > 1) bgIndex = 0;
  }
}
