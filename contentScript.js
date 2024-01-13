browser.runtime.onMessage.addListener(function (message) {
    if (message.action === "clearSessionStorage") {
        sessionStorage.clear();

        console.log("Session storage cleared.");
    }
});
