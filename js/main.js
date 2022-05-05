function generate_random(max_number) {

    return Math.floor(Math.random()* max_number);
}

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

// adding a clickevent to the button
button.addEventListener("click", function() {

    let randomNumber = generate_random(4);

let answerText = "";

if (randomNumber ==0) {

    answerText = "Yes,definitely!";
}
else if (randomNumber === 1) {
    answerText = "My reply is no";
}
else if (randomNumber === 2) {
    answerText = "Cannot predict now";
}
else if (randomNumber ===3) {
    answerText = "Concetrate and ask again";
    
}
else {
    answerText = "As I see it, yes";
}

answer.innerHTML = answerText;

});



