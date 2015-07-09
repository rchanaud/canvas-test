let width  = window.innerWidth;
let height = 300; // Hauteur arbitraire

let canvas = document.getElementById('mycanvas');
    canvas.width  = width;
    canvas.height = height;

let context = canvas.getContext('2d');
    context.strokeStyle = '#000';
    context.lineWidth = 1;

let lines = [];

for (let x = 0; x < width; x = x + width/60){
    let line = {
        startX: x + getRandNum(width)/60,
        startY: 0,
        endX  : x + getRandNum(width)/60,
        endY  : height
    };
    lines.push(line);
}

lines.forEach(function(line){
    context.beginPath();
    context.moveTo(line.startX, line.startY);
    context.lineTo(line.endX, line.endY);
    context.stroke();
});

lines.forEach(function(line){
    TweenLite.to(line, 1+1*Math.random(), {
        x: line.startX+ getRandNum(width)/60,
        y: line.startY+ getRandNum(height)/60
    });
});

function getRandNum(max){
    return Math.floor(Math.random()*max);
}
