canvas=document.getElementById("dibujo1");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=8;
ctx.rect(80,70,160,160);
ctx.stroke();