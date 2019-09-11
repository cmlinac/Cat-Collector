var wins = 0;
var losses = 0;
var score;
var goal;
var cats;

// start or reset the game
function reset() {
    // set score to zero and goal to a random number from 19-120
    score = 0;
    goal = Math.floor(Math.random() * 101) + 19;

    // make an array of cat values, random numbers between 1 and 12
    cats = []
    for (var i = 0; i < 4; i++) {
        cats.push(Math.floor(Math.random() * 12) + 1);
        // log cat values to make the TA's job easier.
        console.log("Cat " + (i+1) + ": " + cats[i]);
    }
    console.log("-------------------------");
    // write the score and goal on the board
    $("#goal").text(goal);
    $("#score").text(score);
}

reset();

// run this function whenever the user clicks on a cat
$(".cat").on("click", function() {
    // get the value of the cat and add it to the score
    var catIndex = $(this).val();
    score += cats[catIndex];    

    // hide win or loss from last game
    $("#result").text("")

    // win
    if (score === goal) {
        wins++;
        $("#result").text("You win!")
        $("#wins").text(wins);
        reset();
    // loss
    } else if (score > goal) {
        losses++;
        $("#result").text("You lose!")
        $("#losses").text(losses);
        reset();
    // game continues
    } else {
        $("#score").text(score);
    }
});