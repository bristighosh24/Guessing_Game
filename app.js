const max = prompt("Enter the Max Number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit")
        break;
    }

    if(guess == random ){
        console.log("you are rignt! congratulation!! random number is",random);
        break;
    }
    else if(guess < random){
        guess = prompt("hint: your number is too small, please try again");
    }

    else{
        guess = prompt("hint: your guess is too large, please try again");
    }
}

