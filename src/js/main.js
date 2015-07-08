(function(){
    'use strict';

    var canvas = document.getElementById('mycanvas');
        canvas.width  = window.screen.availWidth;
        canvas.height = 300;
    var context = canvas.getContext('2d');

    var drawLine = function(){
        context.beginPath();
        context.moveTo(getRandNum(canvas.width),getRandNum(canvas.height));
        context.lineTo(getRandNum(canvas.width),getRandNum(canvas.height));
        context.stroke();
    };

    var getRandNum = function(max){
        return Math.floor(Math.random()*max);
    };

    

    for (var i = 0; i < 45; i++) {
        drawLine();
    }

}());
