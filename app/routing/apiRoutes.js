var data = require("../data/friends.js");


module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(data);
    });

    app.post("/api/friends", function (req, res) {
        data.push(req.body);
        var totalDifference = 0;
        var totalDifferences = [];
        for (var i = 0; i < data.length; i++) {

            for (var j = 0; j < data[i].scores.length; j++) {

                var userScore = req.body.scores;
                var friendsScore = data[i].scores;
                var difference = Math.abs((parseInt(userScore[j]) - parseInt(friendsScore[j])));
                totalDifference += difference;
                if (j === 9) {

                    totalDifferences.push(parseInt(totalDifference));
                    totalDifference = 0;
                }


            }
        }
        if (totalDifferences.length === data.length -1) {

            var lowestNum = Math.min(...totalDifferences);
            var bestMatch = totalDifferences.indexOf(lowestNum);
            var bestFriend = data[bestMatch];
            console.log(bestFriend);
            return bestFriend;
            }
        
});

}

