chrome.browserAction.onClicked.addListener(function(activeTab) {
    console.log('Execute');
    chrome.tabs.executeScript({
        file: "hilight.js"
    });
});
