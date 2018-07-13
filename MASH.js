const randomPlace = [
    "mansion",
    "apartment",
    "shack",
    "house", 
    "tupac's hole",
    process.argv[2]
];
function mash(){
    return "You will live in a " + getHome() + " and you will have " + getChildrenCount() + " kids!"
}
for(let i=0; i<15; i++){
let call = mash();
console.log(call);
}

function getHome(){
    let x = Math.random();
    let randomNumber = 0;
    if (process.argv[2]!=undefined){
        randomNumber= x*6;
    }
    else{
    randomNumber = x*5;}
    randomNumber = Math.floor(randomNumber);
    
    return randomPlace[randomNumber];
}

function getChildrenCount(){
    let x = Math.random();
    let randomChildren = 0;
    let heads = Math.random()>0.5;
    let inputDefined= process.argv[3]!=undefined;
    if (heads && inputDefined){
        randomChildren = process.argv[3];
    }
    else{
        randomChildren = x*100;
        randomChildren = Math.floor(randomChildren);
    }
    return randomChildren;
}
