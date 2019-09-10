var wins = 0;
var losses = 0;
var score;
var goal;
var crystals;

function reset() {
    score = 0;
    goal = Math.floor(Math.random());
    crystals = []
    for (var i = 0; i < crystals.length; i++) {
        crystals.push(Math.floor(Math.random()));
    }
    $("#goal").text(goal);
    $("#score").text(score);
}

$(".crystal").on("click", function() {
    var crystalIndex = $(this).val();
});