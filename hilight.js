function hilight(player){
    var target = $('.seriestable td:contains(' + player + ')');
    target.parent().addClass('tsup');
    target.parent().parent().parent().addClass('tsup');
}

function toggleHighlight() {
    var players = ["Jan Pelkonen",
            "Janne Ollila",
            "Antti Suojanen",
            "Kevin Eriksson",
            "Kristian Iso-Tryykäri",
            "Kristian Iso-Tryykari",
            "Janne Kantola",
            "Rene Huhtala",
            "Kimmo Eriksson",
            "Mikko Haveri",
            "Benjamin Suominen",
            "Aleksi Eriksson",
            "Raido Radin",
            "Akseli Kuusela",
            "Lauri Törnström",
            "Sami Kattelus",
            "Kaj Carlsson",
            "Pekka Kattelus"
        ];
    if($('.tsup').length) {
        $('.tsup').removeClass('tsup');
    }
    else {
        players.forEach(function(p) {
            hilight(p);
        });
    }
}

toggleHighlight();
// chrome.browserAction.onClicked.addListener(toggleHighlight);

