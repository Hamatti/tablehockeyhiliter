function hilight(player){
    var target = $('.seriestable td:contains(' + player + ')');
    target.parent().addClass('tsup');
    target.parent().parent().parent().addClass('tsup');
}

function toggleHighlight() {
    chrome.runtime.sendMessage({method: "getStatus"}, function(response) {
        alert('caught');
        var players = response.players;
        if($('.tsup').length) {
            $('.tsup').removeClass('tsup');
        }
        else {
            players.forEach(function(p) {
                hilight(p);
            });
        }
    });
}

toggleHighlight();
