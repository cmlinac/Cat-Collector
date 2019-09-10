var wins = 0;
var losses = 0;
var score;
var goal;
var crystals;

// start or reset the game
function reset() {
    // set score to zero and goal to a random number from 19-120
    score = 0;
    goal = Math.floor(Math.random() * 101) + 19;

    // make an array of crystal values, random numbers between 1 and 12
    crystals = []
    for (var i = 0; i < 4; i++) {
        crystals.push(Math.floor(Math.random() * 12) + 1);
        // log crystal values to make the TA's job easier.
        console.log("Crystal " + (i+1) + ": " + crystals[i]);
    }
    console.log("-------------------------");
    // write the score and goal on the board
    $("#goal").text(goal);
    $("#score").text(score);
}

reset();

// run this function whenever the user clicks on a crystal
$(".crystal").on("click", function() {
    // get the value of the crystal and add it to the score
    var crystalIndex = $(this).val();
    score += crystals[crystalIndex];

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