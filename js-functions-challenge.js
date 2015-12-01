var gameInfo;
var uniqueTeamsNames;
var createTeamLists;

gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

// YOUR CODE HERE

uniqueTeamsNames = function(gameInfo) {
  var teamNames = [];
  teamNames.push((gameInfo())[0].home_team)
  for (var i = 0; i < (gameInfo()).length; i++) {
    if (teamNames.indexOf((gameInfo())[i].home_team) < 0) {
      teamNames.push((gameInfo())[i].home_team);
    }
    if (teamNames.indexOf((gameInfo())[i].away_team) < 0) {
      teamNames.push((gameInfo())[i].away_team);
    }
  }
  return teamNames;
}

var createTeam = function(name) {
  var team = {
    name: name,
    rank: null,
    wins: 0,
    losses: 0,
  }
  return team;
}

// Set up teams list
createTeamLists = function(array) {
  var teamsList = [];
  for (var i = 0; i < array.length; i++) {
    teamsList.push(createTeam(array[i]));
  }
  return teamsList;
}

var nameArray = uniqueTeamsNames(gameInfo);
var teams = createTeamLists(nameArray);

var getWins = function(teams) {
  for (var i = 0; i < gameInfo().length; i++){
    for (var x = 0; x < teams.length; x++) {
      if (gameInfo()[i].home_team == teams[x].name) {
        var win_losses = gameInfo()[i].home_score - gameInfo()[i].away_score;
        if (win_losses > 0) {
          teams[x].wins++;
        }
        else if (win_losses < 0) {
          teams[x].losses++;
        }
      }
      if (gameInfo()[i].away_team == teams[x].name) {
        var win_losses = gameInfo()[i].home_score - gameInfo()[i].away_score;
        if (win_losses < 0) {
          teams[x].wins++;
        }
        else if (win_losses > 0) {
          teams[x].losses++;
        }
      }
    }
  }
}

getWins(teams);

teams.sort(function(a, b){
  return ((b.wins-b.losses) - (a.wins-a.losses));
})

var rank = function(teams){
  for (var i = 0; i < teams.length; i++) {
    teams[i].rank = i+1;
  }
}

rank(teams);

console.log(teams)
