process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function main(input) {
    const inputLines = input.split('\n');
    const inputs = [];
    inputLines.forEach(line => {
        inputs.push(line.split(' ').map(_strInp => parseInt(_strInp)));
    });
    const T = inputs[0][0];
    for (testcase = 0; testcase < T; testcase++) {
        var numberOfInputs = inputs[testcase * 2 + 1][0];
        var teams = [];
        for (index = 0; index < numberOfInputs; index++) {
            let batting = inputs[testcase * 2 + 1 + (index + 1)][0];
            let bowlling = inputs[testcase * 2 + 1 + (index + 1)][1];
            let fielding = inputs[testcase * 2 + 1 + (index + 1)][2];
            let allRounder = inputs[testcase * 2 + 1 + (index + 1)][3];
            let captain = inputs[testcase * 2 + 1 + (index + 1)][4];
            let id = index + 1;
            teams.push(new Team(id, batting, bowlling, fielding, allRounder, captain));
        }
        console.log(turnament(teams));
    }
}


function turnament(teams) {
    while (teams.length != 1) {
        for (i = 0; i < teams.length - 1; i++) {
            let matchLooser = getMatchLooser(teams[i], teams[i + 1]);
            if (!matchLooser) i++;
            teams = teams.filter(item => item !== matchLooser);
        }
    }
    return teams[0].id;
}


function getMatchLooser(team1, team2) {
    if (team2 === null) return team1;
    var team1Count = 0;
    var team2Count = 0;
    team1.batting >= team2.batting ? team1Count++ : team2Count++;
    team1.bowlling >= team2.bowlling ? team1Count++ : team2Count++;
    team1.fielding >= team2.fielding ? team1Count++ : team2Count++;
    team1.allRounder >= team2.allRounder ? team1Count++ : team2Count++;
    team1.captain >= team2.captain ? team1Count++ : team2Count++;
    return team1Count >= 3 ? team2 : team1;
}

class Team {
    constructor(id, batting, bowlling, fielding, allRounder, captain) {
        this.id = id;
        this.batting = batting;
        this.bowlling = bowlling;
        this.fielding = fielding;
        this.allRounder = allRounder;
        this.captain = captain;
    }
}