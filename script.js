let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch ', 'while I was praying '];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function() {
    let result="";
    result+=who[getRandomInt(0,who.length-1)];
    result+=action[getRandomInt(0,action.length-1)];
    result+=what[getRandomInt(0,what.length-1)];
    result+=when[getRandomInt(0,when.length-1)];

    document.getElementById("excuse").innerHTML = result;
};



