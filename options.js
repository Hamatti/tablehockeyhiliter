// Saves options to chrome.storage
function save_options() {
  var players = document.getElementById('tsup-hilite-players').value.split(',');
  players = players.map(function(n) { return n.trim(); });


  chrome.storage.local.set({
     players: players
  }, function() {
    // Update status to let user know options were saved.
    console.log(players);
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.local.get({
    players: []
  }, function(items) {
    document.getElementById('tsup-hilite-players').value = items.players.join(',');
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);