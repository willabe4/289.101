/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/


//declaring puck initial location
var puck_x = 210;
var puck_y = 210;
var speed = 5;
var puck = document.getElementById('puck')
var gap = document.getElementById('gap')

//sdding the coordinates to puck
puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

//function to log coordinates
function logCoordinates(){
    console.log('x=' + puck_x + 'y' + puck_y)
}

//collision detection
function checkCollision(){
    if (puck_x >= 250 && puck_x < 350 && puck_y >= 150 && puck_y <= 240){
        gap.style.backgroundColor = 'red';
        console.log('collision!');
    }
    else{
        gap.style.backgroundColor = 'white';
    }
}

function teleport(){
    if (puck_x < -5){
        puck_x = 595;
    }
    else if (puck_x >= 595){
        puck_x = -5;
    }
    else if (puck_y < -5){
        puck_y = 395;
    }
    else if (puck_y > 395){
        puck_y = -5;
    }
}

//move left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    teleport();
});

//move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    teleport();
})

//move up
document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    teleport();
})

//move down
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    teleport();
})