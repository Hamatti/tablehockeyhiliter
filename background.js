/*
    Runs two things:
        browserAction.onClicked will toggle hilight on the page
        runtime.onMessage will send back localStorage players
*/

chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.executeScript({
        file: "hilight.js"
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.storage.local.get({
        players: []
    }, function(items) {
        sendResponse({players: items.players});
    });
    // Must return true here so port stays open for async sendResponse
    // see https://code.google.com/p/chromium/issues/detail?id=330415
    return true;
});
