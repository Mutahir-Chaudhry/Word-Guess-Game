    //Creating an array of potential words to be used as the word to be guessed by the user.
    var colors = ["red", "blue", "green", "yellow", "black", "white", "orange", "purple"];
    //Creating variable to store the word to be used from the colors array. Using the Math.floor(Math.random) forula and set to run through the length of the entire array. 
    var randomizer = [Math.floor(Math.random()*colors.length)];
    //Creating array to hold the actual color chosen, storing it in the variable word. 
    var word = colors[randomizer];
    //Creating variable to store user length
    var userLength = word.length
    //Creating an array for the user display. 
    var userDisplay = [userLength]
    //Creating variable for win
    var win = userLength;
    //creating variable for the letters within the color chosen
    var letters = word.split('');
    //Creating variable to store the number of attempts remaining
    var attemptsLeft = 10;
    //Creating variable to combine and present display 
    var output = "";
    //Creating varaible to store the users letter
    var userLetter = "";
    //Creating variable to display wins and losses
    var wins = 0;
    var loses = 0;
    //varaible for the initial function
    var initial = function (){
    //for loop within it to create as many _ as the length of the word chosen using the userDisplay array
    for (var a = 0; a < word.length; a++) {
        userDisplay [a] = "_";
        output = output + userDisplay[a];
    }
    document.getElementById("colors").innerHTML=output;
    output="";
}
    //function for letter submitted
    var submission = function (){
        output = "";
        userLetter = document.getElementById("letter").value;
        document.getElementById("letter").value = "";

        for (var b = 0; b < word.length; b++){
            alert (letters[b]);
            if (userLetter.toLowerCase()==letters[b]){
                userDisplay[b] = userLetter.toLowerCase();
                win--;
            }
            output = output + display[b] + "";
        }
        document.getElementById("colors").innerHTML=output;
        output="";
        attemptsLeft--;
        if (win > 1)
        {
            document.getElementById("guesses").innerHTML = "You Win";
        }
        else if (attemptsLeft < 1)
        {
            document.getElementById("guesses").innerHTML = "You Lose";
        }
        else
        {
            document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + "guesses left";
        }
    }
window.onload = function(){
    initial();
    document.getElementById("submission").onclick=submit;
}
    
    // // // //Creating variable to keep track of the number of letters left to guess for the color chosen. It is set to the lengnth of the number of letters in the color chosen. 
    // // var remainingLetters = word.length;
    // //Beginning the while loop required for the game, set to run as long as there are missing letters left to be guessed in the word. 
    // while (userLength > 0) {
    //     //Creating a document.text to display player progress.
    //     alert(userDisplay.join(" "));
    //     //Input from Player code
    //     //Creating variable to store the guess from the player, inputed into the prompt created. 
    //     var guess = prompt("Guess a letter");
    //     //Creating if else statement for the possibilities of user input taken
    //     //First if statement is if the user cancels, making their guess null. 
    //     if (guess === null) {
    //         break;
    //     } 
    //     //This next part is particular to alerts, since we arent going off of sinlge key strokes just yet. For now, we want the basic game itself to work, whether we are displaying on the page or in alerts. Hence, this else if statement creates an alert if the user inputs anything other than a single letter. 
    //     else if (guess.length !== 1) {
    //         alert("Please enter just ONE letter!");
    //     }
    //     //
    //     else { 
    //         for (var b = 0; b < randomizer.length; b++){
    //         if (randomizer[b] === guess) {
    //             userDisplay[b] = guess;
    //             userLength--;
    //         }
    //     }
    //         //We will update the game state with the users input
    //     }   
    //     //Game Code
    //     //Player Progress
    //     //Input from Player
    //     //Update both previously created array and remaingLetters everytime user guesses correctly.
    // }











    // var $ = function (id) {
    //     return document.getElementById(id);
    // }

    // //Creating the array to hold all potential answers:
    // var word = ["ASTROPHYSICS", "BIOCHEMISTRY", "CLIMATOLOGIST", "DATUM", "ENTOMOLOGY", "FOSSIL", "GENETICS", "HYPOTHESIS", "IMMUNOLOGY", "LEPIDOPTERY", "MINEROLOGY", "ORNITHOLOGY", "PALEONTOLOGY", "QUANTUM", "RADIOLOGY", "SEISMOLOGY", "THERMOMETER", "VOLCANOLOGY", "WEATHER", "ZOOLOGY"]

    // //Creating variable for index chosen from the above array
    // var choice = Math.floor(Math.random()*20);

    // //Creating variable to hold the chosen word, known as the answer. 
    // var answer = word[choice];

    // //Creating variable to store the length of the answer. 
    // var myLength = answer.length;

    // //Testing to see if our answer is being chosen at random
    // alert(answer);
    