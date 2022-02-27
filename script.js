var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerHeight;
ctx.canvas.height = window.innerHeight;
ctx.strokeStyle="#8a0303";
ctx.lineWidth=4;
class Drop{
  constructor(){
    this.x=random(0,canvas.width);
    this.y=0;
    this.length=random(20,40);
  }
  down(){
    this.y+=25;
  }
}

function random(min,max){
  return Math.random()*(max-min)+min
}
let drops=[];

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for(var i=0;i<drops.length;i++){
    if(drops[i].y>canvas.width){
      drops.splice(i, 1);
    }
    ctx.beginPath();
    ctx.moveTo(drops[i].x,drops[i].y);
    ctx.lineTo(drops[i].x,drops[i].y-drops[i].length);
    ctx.stroke();
    drops[i].down();
  }
  var b=drops.length
  for(var l=b;l<b+2;l++){
    drops[l]=new Drop()
  }

  
}, 1000/20);