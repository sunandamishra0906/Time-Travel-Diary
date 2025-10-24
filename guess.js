const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random()*(maximum-minimum+1)) + minimum

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`LET"S HAVE FUN !! \n Guess the number before entering between ${minimum} -${maximum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < minimum || guess > maximum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("LOW !! Try Again");
        }
        else if(guess > answer){
            window.alert("HIGH !! Try Again");
        }
        else{
            window.alert(`CORRECT !! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
    } 
}