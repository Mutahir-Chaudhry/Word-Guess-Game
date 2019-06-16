    //Creating an array of potential words to be used as the word to be guessed by the user.
    var colors = ["red", "blue", "green", "yellow", "black", "white", "orange", "purple"];
    
    //Creating variable to store the word to be used from the colors array. Using the Math.floor(Math.random) forula and set to run through the length of the entire array. 
    var word = words[Math.floor(Math.random()*colors.length)];

    //Creating an array to capture the letters input by the user. Creating an empty array, we set a for loop within it to create as many _ as the length of the word chosen. 
    var arrayAnswer = [];
    for (var i = 0; i < colors.length; i++) {
        arrayAnswer[i] = "_";
    }

    //Creating variable to keep track of the number of letters left to guess for the color chosen. It is set to the lengnth of the number of letters in the color chosen. 
    var remainingLetters = colors.length;

    //Beginning the while loop required for the game, set to run as long as there are missing letters left to be guessed in the word. 
    while (remainingLetters > 0) {
        
        //Creating a document.text to display player progress.
        alert(arrayAnswer.join(" "));

        //
        //Game Code
        //Player Progress
        //Input from Player
        //Update both previously created array and remaingLetters everytime user guesses correctly.
    }











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
    