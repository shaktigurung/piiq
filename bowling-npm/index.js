
const BowlingGame = (score) => {
   
    //split the given number 
    const ScoreArray = score.toString().split(',').map(Number);

    // Add the splitted number
    const TotalScore = ScoreArray.reduce( (a,b) => a + b );

    return TotalScore;
}

module.exports = BowlingGame;