// background.js

chrome.commands.onCommand.addListener((command) => {
    console.log(`command: ${command}`)
    if (command != "close-non-pinned-tab") {
        return;
    }
    const tab = getCurrentTab().then(tab => {
        console.log(`pinned: ${tab.pinned}`)
        if (tab.pinned) {
            return;
        }
        chrome.tabs.remove(tab.id);
    })
});


async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
