var c = document.getElementById("soda");
c.width = window.innerWidth;
c.height = window.innerHeight;

var ctx = c.getContext("2d");
var bubbles = new Array();
var bgLight = "#40FA57";
var bgDark = "#69CF6E";
var bubbleStroke = "#58AD5D";
var bubbleFill = "#3FF254";
var bubbleShadow = "black"

const grad=ctx.createLinearGradient(c.width/2,c.height, c.width/2, 0);
grad.addColorStop(0, bgDark);
grad.addColorStop(1, bgLight); 

function initBubbles() {
    for (let index = 0; index < 50; index++) {
        bubbles.push(new bubble(ctx, c.height, c.width))
    }
}

function drawBubbles() {
    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, c.width, c.height); // clear canvas
    ctx.save();
    ctx.globalCompositeOperation = "source-over";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 4;
    ctx.fillStyle = bubbleFill;
    bubbles.forEach(bubble => {
        bubble.drawBubble();
    });
    ctx.restore();
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, c.width, c.height);
}


class bubble {
    constructor() {
        this.y = Math.floor(Math.random() * c.height-100);
        this.x = Math.floor(Math.random() * c.width) -100;
        this.radius = Math.floor(Math.random() * 15)+10;
        this.velocity = (this.radius/10)+2;
    }

    init() {
        this.y = c.height;
        this.x = Math.floor(Math.random() * c.width) -100;
        this.radius = Math.floor(Math.random() * 15)+10;
        this.velocity = (this.radius/15)+2;;
    }

    drawBubble() {
        ctx.shadowColor = bubbleStroke;
        this.y = this.y-this.velocity
        if(this.y < 0) {
            this.init();
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        //ctx.stroke();
    }
}

initBubbles();
setInterval(drawBubbles, 30);

