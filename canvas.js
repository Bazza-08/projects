const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
    x: undefined,
    y: undefined,
}

var maxRadius = 40;

 // Commented out is code for whole screen with random radius)

//  var minRadius = 2;
var minRadius = 0;

var colourArray = [
    '#5368A6',
    "#0DA6A6",
    "#03A678",
    "#F2B872",
    "#F2695C",
]; 

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

// window.addEventListener('resize', function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     init();
// });

//Create moving circles

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colourArray[Math.floor(Math.random()*colourArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill(); 
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x- this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y- this.radius     < 0) {
            this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;

        //interactivity
        if (mouse.x - this.x < 50  && mouse.x - this.x >-50 
            && mouse.y - this.y < 50 && mouse.y - this.y > -50
            ) {
            if(this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

// function init(){
//     circleArray = [];

    for(var i = 0; i < 800; i++) {
        // Commented out is code for whole screen with random radius)
        
        // var radius = Math.random() * 4 +1;

        var radius = 0;
        var x = Math.random() * (innerWidth - radius) + radius; 
        var y = Math.random() * (innerHeight - radius) + radius;
        var dx = (Math.random()*3 -0.5);
        var dy = (Math.random()*3 -0.5);
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }  
// };


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }
    
}

animate();