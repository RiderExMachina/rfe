twentyFour = [1, 2, 4, 5, 7, 8, 9]
twentyFive = [3, 6]


function randomEp() {
    if (typeof(Storage) !== "undefined") {
    	hasStorage = true;
		document.getElementById("previous").innerHTML = "Previous Episode: " + localStorage.getItem("season") + "x" + localStorage.getItem("episode");
	}
	else { hasStorage = false; }
    season = Math.round(Math.random() * 10);

    if (season == 0 || season == undefined){
        randomEp();
    }

    if (twentyFour.includes(season)) {
        episode = Math.round(Math.random() * 24);
    }
    else if (twentyFive.includes(season)) {
        episode = Math.round(Math.random() * 25);
    }
    else if (season == 10) {
        episode = Math.round(Math.random() * 18);
    }
    
    if (episode == 0 || episode == undefined){
        randomEp();
    }
    console.log(season);
    console.log(episode);

    if (hasStorage == true) {
        window.localStorage.setItem("season", season);
		window.localStorage.setItem("episode", episode);
    }
    else { console.log("Storage not supported in this browser.") }
    document.getElementById("episode").innerHTML = "Season: " + season + "<br />Episode: " + episode;
}
