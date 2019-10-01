twentyFour = [1, 2, 4, 5, 7, 8, 9]
twentyFive = [3, 6]

function randomEp() {
    season = Math.round(Math.random() * 10);
    
    if (twentyFour.includes(season)) {
        episode = Math.round(Math.random() * 24);
    }
    else if (twentyFive.includes(season)) {
        episode = Math.round(Math.random() * 25);
    }
    else if (season == 10) {
        episode = Math.round(Math.random() * 18);
    }
    console.log(season);
    console.log(episode);
    document.getElementById("episode").innerHTML = "Season: " + season + "<br />Episode: " + episode;
}