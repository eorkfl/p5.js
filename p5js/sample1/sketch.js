function setup() {
  createCanvas(600, 400);
  background(0);
   
  noStroke();       // 하늘
  fill('#120E37');
  rect(0, 0, 600, 400);
  fill('#231650');
  ellipse(300, 80, 680, 260);
  fill('#4B236E');
  ellipse(300, 140, 680, 280);
  fill('#823778');
  ellipse(300, 200, 680, 280);
  fill('#C3556E');
  ellipse(300, 250, 680, 270);
  fill('#E67350');
  ellipse(300, 300, 680, 250);
  fill('#F59B3C');
  ellipse(300, 360, 680, 200);
 
  fill('#D27882');      // 좌름
  ellipse(120, 130, 160, 45);
  fill('#EB9B9B');
  ellipse(108, 118, 80, 22);
 
  fill('#C86E7D');      // 우름
  ellipse(470, 105, 175, 48);
  fill('#E69496');
  ellipse(458, 93, 85, 24);
  fill('#D78264');      // 중름
  ellipse(300, 200, 200, 40);
  fill('#E49473');
  ellipse(295, 193, 130, 26);
  fill('#371E4B');     // 멀능
  ellipse(150, 370, 280, 100);
  ellipse(420, 375, 260, 90);
  ellipse(290, 365, 200, 80);
 
  fill('#190F32');     // 능선
  ellipse(80, 400, 260, 110);
  ellipse(520, 400, 240, 100);
  ellipse(300, 400, 340, 95);
  fill('#0F0A23');       // 땅 
  rect(0, 370, 600, 30);
 
  fill('#FFFFFF96');      // 별
  ellipse(95, 38, 2.4, 2.4);
  ellipse(230, 50, 2, 2);
  ellipse(440, 35, 2.2, 2.2);
  ellipse(560, 25, 1.8, 1.8);
  ellipse(50, 70, 1.6, 1.6);
 
  stroke('#0F235032');      // 혜성 꼬리
  strokeWeight(48);
  line(540, 15, 300, 240);
  stroke('#14327846');          
  strokeWeight(38);
  line(530, 25, 300, 240);
  stroke('#1E46A05A');          
  strokeWeight(28);
  line(515, 38, 300, 240);
  stroke('#3278D278');          
  line(490, 58, 300, 240);
  stroke('#4BA0EB96');         
  strokeWeight(13);
  line(455, 88, 300, 240);
  stroke('#64BEF5B4');           
  strokeWeight(7);
  line(410, 128, 300, 240);
  stroke('#8CDCFFD2');          
  strokeWeight(3);
  line(360, 178, 300, 240);
  noStroke();       // 꼬리 파편
  fill('#0F235014');
  ellipse(535, 20, 16, 16);    
  ellipse(510, 42, 10, 10);
  fill('#3278D219');
  ellipse(480, 68, 7, 7);
  ellipse(520, 30, 5, 5);
  fill('#64BEF514');
  ellipse(445, 100, 4, 4);    
 
  fill('#3264B42D');      // 혜성 머리
  ellipse(300, 240, 52, 52);   
  fill('#50A0EB4B');
  ellipse(300, 240, 36, 36);    
  fill('#8CDCFF');
  ellipse(300, 240, 22, 22);    
  fill('#DCF5FF');
  ellipse(300, 240, 13, 13);   
  fill('#FFFFFF');
  ellipse(300, 240, 5, 5);     
}
