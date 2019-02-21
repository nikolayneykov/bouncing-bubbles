var topPlayers = [];

let requester = (function () {

    let get = function () {
        $.ajax({
            method: "GET",
            url: 'https://baas.kinvey.com/appdata/kid_SyvSg7jBV/players',
            headers: { 'Authorization': 'Basic ' + "Z3Vlc3Q6Z3Vlc3Q=" }
        }).then(displayTopPlayers);
    }

    let post = function (player) {
        $.ajax({
            method: 'POST',
            url: 'https://baas.kinvey.com/appdata/kid_SyvSg7jBV/players',
            headers: { 'Authorization': 'Basic ' + "Z3Vlc3Q6Z3Vlc3Q=" },
            data: player
        }).then(function () {
            displayTopPlayers(topPlayers);
        });
    }

    let put = function (player) {
        $.ajax({
            method: 'PUT',
            url: 'https://baas.kinvey.com/appdata/kid_SyvSg7jBV/players/' + player._id,
            headers: { 'Authorization': 'Basic ' + "Z3Vlc3Q6Z3Vlc3Q=" },
            data: player,
        }).then(function () {
            displayTopPlayers(topPlayers);
        });
    }

    return { get, post, put };
})();

$(function () {
    requester.get();

    $('#topPlayers').fadeIn(0);
    $('form').on('submit', function (e) {
        e.preventDefault();
        let playerName = $('#playerName');
        if (playerName.val() !== '' && playerName.val().length < 20) {
            $('form').toggle();
            $('#menu')
                .append(`<h4>Hello ${playerName.val()} :)</h4>`)
                .append(`<p>Score: <span id="score"></span></p>`);
        }
    });

});

async function addPlayer(player) {

    if (topPlayers.length > 0 && topPlayers[topPlayers.length - 1].score < player.score) {
        let currentPlayer = topPlayers.find(x => x.name === player.name);

        if (!currentPlayer) {
            await requester.post(player);
            topPlayers.push(player);
            currentPlayer = player;
        }

        currentPlayer.score = player.score;
        requester.put(currentPlayer);
    }
}

function displayTopPlayers(players) {
    topPlayers = players.sort((a, b) => Number(b.score) - Number(a.score)).slice(0, 10);
    $('#topPlayers').empty();
    $('#topPlayers').append('<th colspan="3">Top 10</th>');
    let cnt = 1;
    for (let player of topPlayers) {
        $('#topPlayers').append(`<tr><td id="place">${cnt}.</td><td>${player.name}:</td><td>${player.score}</td></tr>`);
        cnt++;

    }


}


