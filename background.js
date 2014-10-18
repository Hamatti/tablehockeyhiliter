chrome.browserAction.onClicked.addListener(function(activeTab) {
    console.log('Execute');
    chrome.tabs.executeScript({
        file: "hilight.js"
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.storage.sync.get({
        players: []
    }, function(items) {
        sendResponse({players: items.players});
    });
});
