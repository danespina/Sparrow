var SVGdot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
var dots = [];
var dotNumber = 180;
var columns = 20;

var screenWidth, screenHeight;
var a = 0.4 ;


var update = setInterval(function(){
  matrixUpdate();
}, 20);

initialize();

function initialize() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  for(i = 0, k = 0, r = 0; i < dotNumber; i++, k++){
      if(k % columns == 0){
        k = 0;
        r += 1;
      }
      dots[i] = {};
      dots[i].el = SVGdot.cloneNode(false);
      dots[i].X = 50 + 35 * k;
      dots[i].Y = 0 + 35 * r;
      dots[i].state1 = k * 1.5 * a;
      dots[i].state2 = r * a * 1.5;
      dots[i].X2 = dots[i].X1 + Math.cos(dots[i].state1 + dots[i].state2);
      dots[i].Y2 = dots[i].Y1 + Math.sin(dots[i].state1 + dots[i].state2);
      dots[i].r = 30;
      dots[i].el.setAttribute('cx', dots[i].X);
      dots[i].el.setAttribute('cy', dots[i].Y);
      dots[i].el.setAttribute('r', dots[i].r);
      svg.appendChild(dots[i].el);
    }
  }

function matrixUpdate() {
  a += 0.1;
  for(i = 0, k = 0, r = 0; i < dotNumber; i++, k++){
      if(k % columns == 0){
        k = 0;
        r += 1;
      }
        UpdatedX = dots[i].X + 20 * Math.cos(dots[i].state1 + dots[i].state2 - a);
        UpdatedY = dots[i].Y + 20 * Math.sin(dots[i].state1 + dots[i].state2 - a);
        updatePosition();
  }
}

function updatePosition(){
    dots[i].el.setAttribute('cx', UpdatedX);
    dots[i].el.setAttribute('cy', UpdatedY);
}
