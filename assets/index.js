twentyFour = [1, 2, 4, 5, 7, 8, 9]
twentyFive = [3, 6]

function randomSeason(){
    season = Math.round(Math.random() * 10);
    
    if (season == 0){
        console.log("Invalid season, getting another")
        randomSeason()
    }

    return season;
}
function randomEp(){

    randomSeason()

    if (twentyFour.includes(season)) {
        episode = Math.round(Math.random() * 24);
    }
    else if (twentyFive.includes(season)) {
        episode = Math.round(Math.random() * 25);
    }
    else if (season == 10) {
        episode = Math.round(Math.random() * 18);
    }

    if (episode == 0){

    }
    console.log(season);
    console.log(episode);
    document.getElementById("episode").innerHTML = "Season: " + season + "<br />Episode: " + episode;
}