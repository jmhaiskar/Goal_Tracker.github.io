let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d'); 

c.addEventListener('mousemove', letter);

function letter(){
    ctx.beginPath();
    ctx.font = "30px Serif";
    ctx.strokeText("This page is under construction!", 500, 250);
    ctx.fillStyle='red'; 
    ctx.fillText("This page is under construction!", 500, 250);
    ctx.fill();
    ctx.stroke();

}